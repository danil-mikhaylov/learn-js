let promise = new Promise(function (resolve, reject) {
  // функция-исполнитель (executor)
  // "певец"
});

// Пример успешно выполненной задачи
let promise = new Promise(function (resolve, reject) {
  // эта функция выполнится автоматически, при вызове new Promise

  // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
  setTimeout(() => resolve("done"), 1000);
});

// Пример задачи, выполненной с ошибкой:
let promise = new Promise(function (resolve, reject) {
  // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// Вызывается лишь один раз (и имеет лишь один аргумент):
let promise = new Promise(function (resolve, reject) {
  resolve("done");

  reject(new Error("…")); // игнорируется
  setTimeout(() => resolve("…")); // игнорируется
});
console.log(promise); // Promise { 'done' }

// then
promise.then(
  function (result) {
    /* обработает успешное выполнение */
  },
  function (error) {
    /* обработает ошибку */
  }
);

// Пример успешного промиса:
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Done!"), 1000);
});

promise.then(
  (result) => console.log(result), // выведет "done!" через одну секунду
  (error) => console.log(error) // не будет запущена
);

// А в случае ошибки выполнится вторая функция:
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject запустит вторую функцию, переданную в .then
promise.then(
  (result) => console.log(result), // не будет запущена
  (error) => console.log(error) // выведет "Error: Whoops!" спустя одну секунду
);

// Можно передавать лишь одну функцию, если мы, например, заинтересованы в выполнении лишь одной задачи
let promise = new Promise((resolve) => {
  setTimeout(() => resolve("done!"), 1000);
});

promise.then(console.log); // выведет "done!" спустя одну секунду
promise.then((result) => console.log(result)); // выведет "done!" спустя одну секунду

// catch

let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Ошибка!")), 1000);
});

promise.catch(console.log); // выведет "Error: Ошибка!" через секунду
promise.catch((error) => console.log(error)); // выведет "Error: Ошибка!" через секунду

// finally
let promise = new Promise((resolve, reject) => {
  /* сделать что-то, что займёт время, и после вызвать resolve/reject */
});

// выполнится, когда промис завершится, независимо от того, успешно или нет
promise.finally(() => остановить индикатор загрузки)
promise.then(result => показать результат, err => показать ошибку)

// Разница между then(f,f):
// В finally нет аргументов, потому что обычно наша задача -- выполнить "общее" завершающие задание
// finally пропускает результат или ошибку дальше, к последующим обработчикам:
new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 1000);
})
  .finally(() => console.log("Промис завершён"))
  .then((result) => console.log(result)); // <-- .then обработает результат

// А здесь ошибка из промиса проходит через finally к catch:
new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => console.log("Промис завершён"))
  .catch((err) => console.log(err)); // <-- .catch обработает объект ошибки

// Практические примеры облегчения написания асинхронного кода:

// Вот loadScript из прошлой главы (с коллбэками):
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

  document.head.append(script);
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    // Возвращаем промис
    let script = document.createElement("script"); // Создаём в DOM'e скрипт
    script.src = src; // .src его мы передаём как аргумент

    script.onload = () => resolve(script); // Когда скрипт загрузится, вызвать resolve
    script.onerror = () =>
      reject(new Error(`Ошибка при загрузке скрипта ${src}`)); // Если будет ошибка, reject

    document.head.append(script); // Добавить элемент в head нашего html
  });
}

let promise = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
); // Загружаем

promise.then(
  // Когда скрипт загрузится
  (script) => console.log(`${script.src} загружен!`),
  (error) => console.log(`Ошибка: ${error.message}`)
);

promise.then((script) => console.log("Ещё один обработчик...")); // Ещё одни then
