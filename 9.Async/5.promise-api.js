let promise = Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
]).then(console.log); // когда все промисы выполнятся, результат будет 1,2,3
// каждый промис даёт элемент массива

// Трюк: пропустить массив элементов через map-функцию, которая для каждого элемента создаст задачу-promise
// И затем обернуть получившийся массив в Promise.all
let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig",
];

// Преобразуем каждый URL в промис, возвращённый fetch
let requests = urls.map((url) => fetch(url));

Promise.all(requests).then((responses) => {
  responses.forEach((response) =>
    console.log(`${response.url}: ${response.status}`)
  );
});

// Получаем информацию о пользователях Github по их логинам из массивов:
let names = ["iliakan", "remy", "jeresig"];

let requests = names.map((name) =>
  fetch(`\`https://api.github.com/users/${name}\``)
);

Promise.all(requests)
  .then((responses) => {
    // все промисы успешно завершены
    for (let response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
    return responses;
  })
  // преобразовать массив ответов response в response.json(),
  // чтобы прочитать содержимое каждого
  .then((responses) => Promise.all(responses.map((r) => r.json())))
  .then((users) => users.forEach((u) => console.log(`${u.name}`)));

Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Ошибка!")), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).catch(console.log); // Error: Ошибка!

// Если аргумент в Promise.all не массив, то он передаётся "как есть":
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  }),
  2,
  3,
]).then(console.log); // [ 1, 2, 3 ]

// Promise.allSettled несмотря на ошибки, делает всё:
let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://no-such-url",
];

Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
  // (*)
  results.forEach((result, num) => {
    if (result.status == "fulfilled") {
      console.log(`${urls[num]}: ${result.value.status}`);
    }
    if (result.status == "rejected") {
      console.log(`${urls[num]}: ${result.reason}`);
    }
  });
});

// Promise.race
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Ошибка!")), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(console.log); // 1

// Promise.resolve:
let promise = new Promise((resolve, reject) => resolve(value));
Promise.resolve(value);

// Promise.reject
let promise = new Promise((resolve, reject) => reject(error));
Promise.reject(value);

/** Итого:
 * Promise.all -- ждёт выполнения всех промисов и возвращает массив с их результатами. Если ошибка, реузльтат - ошибка
 * Promise.allSettled -- ждёт, пока все промисы завершатся, и возвращает их результаты в виде массива с объектами:
 * * state: "fulfilled", если выполнен успешно или "rejected", если ошибка,
 * * value – результат, если успешно или reason – ошибка, если нет.
 * Promise.race(promises) -- ожидает первый выполненный промис, который становится его результатом
 * Promise.resolve(value) -- возвращает успешно выполнившийся промис с результатом value.
 * Promise.reject(error) – возвращает промис с ошибкой error.
 * Самый часто используемый -- Promise.all()
 */
