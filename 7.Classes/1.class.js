// // Базовый синтаксис:
// class MyClass {
//   // методы класса
//   constructor() { ... }
//   method1() { ... }
//   method2() { ... }
//   method3() { ... }
//   ...
// }

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi, ${this.name}!`);
  }
}
// Использование:
let user = new User("Ivan");
user.sayHi(); // Hi, Ivan!

/** Когда вызывается new User("Иван"):
 * Создаётся новый объект.
 * constructor запускается с заданным аргументом и сохраняет его в this.name.
 * …Затем можно вызывать на объекте методы, такие как user.sayHi().
 */

// Class Expression
let User = class {
  sayHi() {
    console.log("Привет");
  }
};

// "Named Class Expression"
// (в спецификации нет такого термина, но происходящее похоже на Named Function Expression)
let User = class MyClass {
  sayHi() {
    console.log(MyClass); // имя MyClass видно только внутри класса
  }
};

new User().sayHi(); // работает, выводит определение MyClass

console.log(MyClass); // ошибка, имя MyClass не видно за пределами класса

// Мы даже можем динамически создавать классы «по запросу»:
function makeClass(phrase) {
  // объявляем класс и возвращаем его
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

// Создаём новый класс
let User = makeClass("Привет");

new User().sayHi(); // Привет

// Пример класса с использованием get/set:
class User {
  constructor(name) {
    // вызывает сеттер
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Имя слишком короткое.");
      return;
    }
    this._name = value;
  }
}

let user = new User("Иван");
console.log(user.name); // Иван

user = new User(""); // Имя слишком короткое.

// Пример с вычисляемым свойством в скобках [...]:
class User {
  ["say" + "Hi"]() {
    console.log("Привет");
  }
}

new User().sayHi();

// Свойство классов:
class User {
  name = "Аноним";

  sayHi() {
    console.log(`Привет, ${this.name}!`);
  }
}

new User().sayHi();
