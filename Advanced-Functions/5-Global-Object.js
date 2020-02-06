console.log("Привет");
// это то же самое, что и
globalThis.console.log("Привет");


var gVar = 5;

console.log(globalThis.gVar); // 5 (становится свойством глобального объекта)

let gLet = 5;

console.log(globalThis.gLet); // undefined (не становится свойством глобального объекта)


// сделать информацию о текущем пользователе глобальной, для предоставления доступа всем скриптам
globalThis.currentUser = {
  name: "John"
};

// где угодно в коде
console.log(currentUser.name); // John

// или, если у нас есть локальная переменная с именем "currentUser",
// получим её из window явно (безопасно!)
console.log(globalThis.currentUser.name); // John


if (!globalThis.Promise) {
  console.log("Ваш браузер очень старый!");
}


if (!globalThis.Promise) {
  globalThis.Promise = ... // собственная реализация современной возможности языка
}

