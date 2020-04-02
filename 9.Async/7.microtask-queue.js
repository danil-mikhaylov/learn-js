let promise = Promise.resolve();

promise.then(() => console.log("промис выполнен"));

console.log("код выполнен"); // этот console.log показывается первым

// Если важен порядок, используем .then:
Promise.resolve()
  .then(() => console.log("промис выполнен!"))
  .then(() => console.log("код выполнен"));

let promise = Promise.reject(new Error("Ошибка в промисе!"));

setTimeout(() => promise.catch((err) => console.log("поймана")), 1000);

// Ошибка в промисе!
window.addEventListener("unhandledrejection", (event) =>
  console.log(event.reason)
);
