// От Array, Map и т.д. тоже можно наследовать:
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); // false

let filteredArr = arr.filter((item) => item >= 10);
console.log(filteredArr); // false
console.log(filteredArr.isEmpty()); // false

// Как я понял, встроенные методы (filter, map...) возвращают именно объект PowerArray, а не Array
// Можем это исправить (это не ошибка!!!) вот так:
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // встроенные методы массива будут использовать этот метод как конструктор
  static get [Symbol.species]() {
    return Array;
    // return PowerArray;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); // false

// filter создаст новый массив, используя arr.constructor[Symbol.species] как конструктор
let filteredArr = arr.filter((item) => item >= 10);

// filteredArr не является PowerArray, это Array
console.log(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function

/* Отсутствие статического наследования встроенных классов
  У встроенных объектов есть собственные статические методы, например Object.keys, Array.isArray и т. д.
  Обычно, когда один класс наследует другому, то наследуются и статические методы.
  Но встроенные классы — исключение. Они не наследуют статические методы друг друга.
  Например, и Array, и Date наследуют от Object, так что в их экземплярах доступны методы из Object.prototype.
  Но Array.[[Prototype]] не ссылается на Object, поэтому нет методов Array.keys() или Date.keys().
 */
