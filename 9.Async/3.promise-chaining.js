// Загрузка нескольких скриптов (асинхронные задачи) подряд:
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
})
  .then(function (result) {
    // (**)

    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    // (***)

    console.log(result); // 2
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 4
    return result * 2;
  });

// Ошибка:
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function (result) {
  console.log(result); // 1
  return result * 2;
});

promise.then(function (result) {
  console.log(result); // 1
  return result * 2;
});

promise.then(function (result) {
  console.log(result); // 1
  return result * 2;
});

// Возвращаем промисы:
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1

    return new Promise((resolve, reject) => {
      // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    // (**)

    console.log(result); // 2

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log(result); // 4
  });

// Пример с loadScript:
function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  });
}

loadScript("/article/promise-chaining/one.js")
  .then(function (script) {
    return loadScript("/article/promise-chaining/two.js");
  })
  .then(function (script) {
    return loadScript("/article/promise-chaining/three.js");
  })
  .then(function (script) {
    // вызовем функции, объявленные в загружаемых скриптах,
    // чтобы показать, что они действительно загрузились
    one();
    two();
    three();
  });

// Этот же код со стрелочными функциями:
loadScript("/article/promise-chaining/one.js")
  .then((script) => loadScript("/article/promise-chaining/two.js"))
  .then((script) => loadScript("/article/promise-chaining/three.js"))
  .then((script) => {
    // скрипты загружены, мы можем использовать объявленные в них функции
    one();
    two();
    three();
  });

// thenable
class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    console.log(resolve); // function() { native code }
    // будет успешно выполнено с аргументом this.num*2 через 1 секунду
    setTimeout(() => resolve(this.num * 2), 1000); // (**)
  }
}

new Promise((resolve) => resolve(1))
  .then((result) => {
    return new Thenable(result); // (*)
  })
  .then(console.log); // показывает 2 через 1000мс

// fetch
fetch("/article/promise-chaining/user.json")
  // .then в коде ниже выполняется, когда удалённый сервер отвечает
  .then(function (response) {
    // response.text() возвращает новый промис,
    // который выполняется и возвращает полный ответ сервера,
    // когда он загрузится
    return response.text();
  })
  .then(function (text) {
    // ...и здесь содержимое полученного файла
    console.log(text); // {"name": "iliakan", isAdmin: true}
  });

// то же самое, что и раньше, только теперь response.json() читает данные в формате JSON
// Запрашиваем user.json
fetch("/article/promise-chaining/user.json")
  // Загружаем данные в формате json
  .then((response) => response.json())
  // Делаем запрос к GitHub
  .then((user) => fetch(`https://api.github.com/users/${user.name}`))
  // Загружаем ответ в формате json
  .then((response) => response.json())
  // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
  .then((githubUser) => {
    let img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => img.remove(), 3000); // (*)
  });

fetch("/article/promise-chaining/user.json")
  .then((response) => response.json())
  .then((user) => fetch(`https://api.github.com/users/${user.name}`))
  .then((response) => response.json())
  .then(
    (githubUser) =>
      new Promise(function (resolve, reject) {
        // (*)
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
          img.remove();
          resolve(githubUser); // (**)
        }, 3000);
      })
  )
  // срабатывает через 3 секунды
  .then((githubUser) => console.log(`Закончили показ ${githubUser.name}`));

// И, наконец, давайте разобьём написанный код на отдельные функции, пригодные для повторного использования:
function loadJson(url) {
  return fetch(url)
    .then(response => response.json())
}

function loadGithubUser(user) {
  return fetch(`https://api.github.com/users/${user.name}`)
    .then(response => response.json())
}

function showAvatar(githubUser) {
  return new Promise((resolve, reject) => {
    let img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser)
    }, 3000)
  })

}
// Используем их:
loadJson('/article/promise-chaining/user.json')
  .then(user => loadGithubUser(user.name))
  .then(showAvatar)
  .then(githubUser => alert(`Показ аватара ${githubUser.name} завершён`));
// ...

/** Итого:
 * Если .then(handler) возвращает промис, следующие элементы цепочки ждут, когда этот промис завершится
 * Когда это происходит, результат выполнения этого промиса передаётся дальше
 * Не только .then, но и .catch, .finally
 */
