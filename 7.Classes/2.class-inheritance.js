class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} стоит.`);
  }
}

let animal = new Animal("Мой питомец");
let rabbit = new Rabbit("Мой кролик");

// Наследуем от Animal, указывая "extends Animal"
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} прячется!`);
  }
}

// Пример вызова функции, которая генерирует родительский класс:
function f(phrase) {
  return class {
    sayHi() {console.log(phrase)}
  }
}

class User extends f("Привет") {}

new User().sayHi(); // Привет

// Переорпделение методов
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} остановился.`);
  }
}

class Rabbit extends Animal {
  constructor(age) {
    super();
  }
  stop() {
    // ...будет использован для rabbit.stop()
  }
}

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} стоит.`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} прячется!`);
  }

  stop() {
    super.stop(); // вызываем родительский метод stop
    this.hide(); // и затем hide
  }
}

let rabbit = new Rabbit("Белый кролик");

rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!

// У стрелочных функций нет super:
class Rabbit extends Animal {
  stop() {
    setTimeout(() => super.stop(), 1000); // вызывает родительский stop после 1 секунды
  }
}

// А так ошибка (Unexpected super):
setTimeout(function () {
  super.stop();
}, 1000);

// Если у класса нет своего конструктора, то он делает так:
class Rabbit extends Animal {
  constructor(...args) {
    super(...args);
  }
}

// Изменяем constructor:
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  // ...
}

class Rabbit extends Aniaml {
  constructor(name, earLength) {
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }

  // ...
}

// Не работает!
let rabbit = new Rabbit("Белый кролик", 10); // Error: this is not defined.

// Чтобы конструктор Rabbit работал, он должен вызвать super() до того, как использовать this, чтобы не было ошибки:
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  // ...
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  // ...
}

// теперь работает
let rabbit = new Rabbit("Белый кролик", 10);
console.log(rabbit.name); // Белый кролик
console.log(rabbit.earLength); // 10

/** Итого:
 * 1. class Child extends Parent {...}
 *    При этом Child.prototype.__proto__ = Parent.prototype
 * 2. При переопределении конструктора:
 *    Обязателен вызов конструктора родителя super() в конструкторе child для обращения к this
 * 3. При переопределении другого метода:
 *    Мы можем взять super.method() в методе Child для обращения к методу родителя Parent
 * 4. Внутренние детали:
 *    Методы запоминают свой объект во внутреннем свойстве [[HomeObject]].
 *    Благодаря этому работает super, он в его прототипе ищет родительские методы.
 *    Поэтому копировать метод, использующий super, между разными объектами небезопасно.
 * Также:
 *    У функций-стрелок нет своего this и super, поэтому они «прозрачно» встраиваются во внешний контекст.
 */
