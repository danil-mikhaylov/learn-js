// Оператор instanceof вернёт true, если obj принадлежит классу Class или наследующему от него
obj instanceof Class;

class Rabbit {}
let rabbit = new Rabbit();

// это объект класса Rabbit?
console.log(rabbit instanceof Rabbit); // true

// Также это работает с функциями-конструкторами:
// вместо класса
function Rabbit() {}

console.log(new Rabbit() instanceof Rabbit); // true

// …И для встроенных классов, таких как Array:
let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

// 1. Если есть Symbol.hasInstance, то вызвать его. Это и есть способ настройки:
class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}

let obj = { canEat: true };

console.log(obj instanceof Animal); // true: вызван Animal[Symbol.hasInstance](obj)

// 2. Проверяется, равен ли Class.prototype одному из прототипов в прототипной цепочке obj:
obj.__proto__ === Class.prototype?
obj.__proto__.__proto__ === Class.prototype?
obj.__proto__.__proto__.__proto__ === Class.prototype?
...
// если какой-то из ответов true - возвратить true
// если дошли до конца цепочки - false

// В случае с наследованием, совпадение будет на втором шаге:
class Animal {}
class Rabbit extends Animal {}

let rabbit = new Rabbit();
console.log(rabbit instanceof Animal); // true

// rabbit.__proto__ === Rabbit.prototype
// rabbit.__proto__.__proto__ === Animal.prototype (совпадение!)

// Есть метод objA.isPrototypeOf(objB)
// => obj instanceof Class === Class.prototype.isPrototypeOf(obj).
// в проверке учавствует Class.prototype
function Rabbit() {}
let rabbit = new Rabbit();

// заменяем прототип
Rabbit.prototype = {};

// ...больше не rabbit!
console.log(rabbit instanceof Rabbit); // false

// скопируем метод toString в переменную для удобства
let objectToString = Object.prototype.toString;

// какой это тип?
let arr = [];

console.log(objectToString.call(arr)); // [object Array]
let s = Object.prototype.toString;

console.log(s.call(123)); // [object Number]
console.log(s.call(null)); // [object Null]
console.log(s.call(console.log)); // [object Function]

/** Итого:
 * typeof работает для примитивов, возвращает строку
 * {}.toString работает для примитивов, встроенных объектов, объектов с Symbol.toStringTag, возвращает строку
 * instanceof работает для объектов, возвращает true/false
 * {}.toString "более продвинут", чем typeof
 * А instanceof хорош для работы с иерархией классов и проверок с учеётом наследования
 */
