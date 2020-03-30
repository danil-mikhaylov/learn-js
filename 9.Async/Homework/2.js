// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("Ошибка!")), 1000);
// });
//
// let secondPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Done!"), 1000);
// });
//
// promise.catch(console.log); // выведет "Error: Ошибка!" через секунду
// promise.catch(error => console.log(error)); // выведет "Error: Ошибка!" через секунду
// secondPromise.then(console.log); // выведет "Done!" через секунду
// secondPromise.then(result => console.log(result)); // выведет "Done!" через секунду

/** Можно ли "перевыполнить" промис?
 * Что выведет код ниже?
 */

// let promise = new Promise((resolve, reject) => {
//   resolve(1); // 1, первый вызов
//
//   // Все последующие выводы resolve/reject проигнорируются
//   setTimeout(() => resolve(2), 1000);
// });
//
// promise.then(console.log);

/** Задержка на промисах
 * Встроенная функция setTimeout использует колбэк-функции.
 * Создайте альтернативу, использующую промисы.
 * Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms,
 * так чтобы мы могли добавить к нему .then:
 */

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
  // У resolve нет аргументов, потому что мы не возвращаем из delay ничего, а просто гарантируем задержку
}

delay(3000).then(() => console.log("Выполнилось через 3 секунды"));


