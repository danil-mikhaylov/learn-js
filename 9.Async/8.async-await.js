// // Async
// async function q() {
//   return 1;
// }
//
// async function f() {
//   return Promise.resolve(1);
// }
//
// f().then(console.log); // 1
//
// // Await
// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("готово!"), 1000);
//   });
//
//   let result = await promise; // будет ждать, пока промис не выполнится (*)
//
//   console.log(result); // "готово!"
// }
//
// f();
//
// // showAvatar с await:
// async function showAvatar() {
//   // Запрашиваем JSON с данными пользователя
//   let response = await fetch("/article/promise-chaining/user.json");
//   let user = await response.json();
//
//   // Запрашиваем информацию об этом пользователе из Github
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();
//
//   // Отображаем аватар пользователя
//   let img = document.createElement("img");
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);
//
//   // Ждём 3 секунды и затем скрываем аватар
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));
//
//   img.remove();
//
//   return githubUser;
// }
//
// showAvatar();
//
// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     console.log(resolve);
//     // выполнить resolve со значением this.num * 2 через 1000мс
//     setTimeout(() => resolve(this.num * 2), 1000); // (*)
//   }
// }
//
// async function f() {
//   // код будет ждать 1 секунду,
//   // после чего значение result станет равным 2
//   let result = await new Thenable(1);
//   console.log(result);
// }
//
// f();
//
// class Writer {
//   async wait() {
//     // return 1;
//     return await Promise.resolve(1);
//   }
// }
//
// new Writer()
//   .wait()
//   .then(console.log); // 1

async function f() {
  await Promise.reject(new Error("Упс!"));
}

async function f1() {
  throw new Error("Упс!");
}

async function f() {

  try {
    let response = await fetch('http://no-such-url');
  } catch(err) {
    console.log(err); // TypeError: failed to fetch
  }
}

f();

async function f() {

  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch(err) {
    // перехватит любую ошибку в блоке try: и в fetch, и в response.json
    console.log(err);
  }
}

f();

async function f() {
  let response = await fetch('http://no-such-url');
}

// f() вернёт промис в состоянии rejected
f().catch(alert); // TypeError: failed to fetch // (*)

/** Итого:
 * Async перед объявлением функции:
 * 1. Обязывает её всегда возвращать промис.
 * 2. Позволяет использовать await в теле этой функции.
 *
 * Await перед промисом заставят JS дождаться его выполнения, после чего:
 * 1. Если промис завершится с ошибкой, то будет сгенерировано исключение, как если бы тут было throw
 * 2. Иначе вернётся результат промиса.
 *
 * С async/await можно быть и без .then и .catch, но можно использовать .catch на верхнем уровне
 * Также await отлично работает с Promise.all, если необходимо выполнить несколько задач параллельно
 */



