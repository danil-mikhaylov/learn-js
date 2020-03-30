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

