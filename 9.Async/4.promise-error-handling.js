fetch("https://no-such-server.blabla") // ошибка
  .then((response) => response.json())
  .catch((err) => console.log(err)); // TypeError: failed to fetch (текст может отличаться)

// Самый лёгкий способ перехватить все ошибки -- добавить .catch в конце цепочки:
fetch("/article/promise-chaining/user.json")
  .then((response) => response.json())
  .then((user) => fetch(`https://api.github.com/users/${user.name}`))
  .then((response) => response.json())
  .then(
    (githubUser) =>
      new Promise((resolve, reject) => {
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
          img.remove();
          resolve(githubUser);
        }, 3000);
      })
  )
  .catch((error) => console.log(error.message));

// Вокруг функции промиса есть try..catch
new Promise((resolve, reject) => {
  throw new Error("Ошибка!");
}).catch(console.log); // // Error: Ошибка!

new Promise((resolve, reject) => {
  reject(new Error("Ошибка!"));
}).catch(console.log); // Error: Ошибка!

// Даже если ошибка в одном из .then, то всё равно .catch схватит её:
new Promise((resolve, reject) => {
  resolve("ok");
})
  .then((result) => throw new Error("Ошибка!")) //  Генерируем ошибку
  .catch(console.log); // Error: Ошибка!

// Любые ошибки, не только throw:
new Promise((resolve, reject) => {
  resolve("ок");
})
  .then((result) => {
    blabla(); // нет такой функции
  })
  .catch(console.log); // ReferenceError: blabla is not defined

// Если пробросить (throw) ошибку в .catch, то управление перейдёт к следующему обработчику ошибок
// the execution: catch -> catch -> then
new Promise((resolve, reject) => {
  throw new Error("Ошибка!");
})
  .catch(function (error) {
    // (*)

    if (error instanceof URIError) {
      // обрабатываем ошибку
    } else {
      console.log("Не могу обработать ошибку");

      throw error; // пробрасывает эту или другую ошибку в следующий catch
    }
  })
  .then(function () {
    /* не выполнится */
  })
  .catch((error) => {
    // (**)

    console.log(`Неизвестная ошибка: ${error}`);
    // ничего не возвращаем => выполнение продолжается в нормальном режиме
  });
// Если обработаем ошибку и завершим работу обработчика нормально, то управление пойдёт в следующий .then:
// the execution: catch -> then
new Promise((resolve, reject) => {
  throw new Error("Ошибка!");
})
  .catch(function (error) {
    console.log("Ошибка обработана, продолжить работу");
  })
  .then(() => console.log("Управление перейдёт в следующий then"));

// Если мног .then, но нет .catch, то всё плохо. JS-engine генерирует в этом случае глобальную ошибку
window.addEventListener("unhandledrejection", function (event) {
  // объект события имеет два специальных свойства:
  console.log(event.promise); // [object Promise] - промис, который сгенерировал ошибку
  console.log(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
});

new Promise(function () {
  throw new Error("Ошибка!");
}); // нет обработчика ошибок

/** Итого:
 * .catch перехватывает все виды ошибок в промисах: reject() или throw new Error..
 * Размещаем .catch там, где мы хотим обработать ошибки и знаем, как это сделать.
 * .catch пробует обработать и если ничего не знает об ошибки, пробрасывает её в слеудющий .catch
 * Можно и совсем не использовать .catch, если нет нормального способа восстановиться после ошибки.
 * Следует использовать обработчик события unhandledrejection, чтобы отслеживать необработанные ошибки и сообщать
 */