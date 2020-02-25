let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(JSON.stringify(descriptor, null, 2));
/*
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
 */

// Меняем:
Object.defineProperty(obj, propertyName);

let user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(JSON.stringify(descriptor, null, 2));

/*
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
 */


let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false
});

console.log(user.name); // John
user.name = "Tom"; // Ошибка: Невозможно изменить доступное только для чтения свойство 'name'
console.log(user.name); // John

let user = {};

Object.defineProperty(user, "name", {
  value: "John",
  enumerable: true,
  configurable: true
});

console.log(user.name); // John

user.name = "Tom";

console.log(user.name); // John

let user = {
  name: "John",
  toString() {
    return this.name;
  },
  age: 30
};

for (let key in user) {
  console.log(key); // name, toString
}

// Enumerable off:
let user = {
  name: "John",
  toString() {
    console.log(this.name);
  },
  age: 30
};

Object.defineProperty(user, "toString", {
  enumerable: false
});

// Теперь toString нет в цикле:
for (let key in user) {
  console.log(key); // name, age
}

// Неперечислимые свойства также не возвращаются Object.keys:
console.log(Object.keys(user)); // [ 'name', 'age' ]

let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(JSON.stringify(descriptor, null, 2));
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

// Мы не можем изменить значение Math.PI или перезаписать его
Math.PI = 3; // Ошибка

// delete Math.PI тоже не сработает

let user = {};

Object.defineProperty(user, "name", {
  value: "John",
  writable: false,
  configurable: false
});

// теперь невозможно изменить user.name или его флаги
// всё это не будет работать:
user.name = "Pete";
delete user.name;
Object.defineProperty(user, "name", {
  writable: true
}); // Ошибка

let user = {};
Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});
Object.defineProperty(user, "name", {value: "John"});
console.log(user);

let obj = {
  title: "Object",
  number: 30
};
console.log(Object.getOwnPropertyDescriptors(obj)); // ... number: { value: 30, writable: true, enumerable: true, configurable: true }

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

// Обычное копирование:
for (let key in user) {
  clone[key] = user[key]
}
// Такой способ не учитывает символы и дескрипторы

