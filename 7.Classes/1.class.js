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
    console.log(`Hi, ${this.name}!`)
  }
}
// Использование:
let user = new User("Ivan");
user.sayHi(); // Hi, Ivan!