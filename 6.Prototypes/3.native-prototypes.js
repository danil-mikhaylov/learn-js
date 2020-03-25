// Где код, который создаёт эту самую строку?
let obj = {};
console.log(obj); // "[object Object]"
/*
let obj = new Object(), где Object – встроенная функция-конструктор
для объектов с собственным свойством prototype, которое ссылается на огромный объект с методом toString и другими.
 */

let obj = {};
console.log(obj.__proto__ === Object.prototype); // true

let arr = [1, 2, 3];

console.log(arr.__proto__ == Array.prototype); // true
console.log(arr.__proto__.__proto__ == Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__); // null

console.log(arr); // [ 1, 2, 3 ] ; Это собственный метод toString у Array, не у Object

console.dir([1, 2, 3]);

function f() {}

console.log(f.__proto__ == Function.prototype); // true
console.log(f.__proto__.__proto__ == Object.prototype); // true, наследует от ObjectR

String.prototype.snow = function () {
  console.log("BOOM!");
};

console.log("str".snow()); // BOOM!

// Лучше не расширять стандартные прототипы, потому что могут возникать конфликты
// Единственный одобренный вариант -- создание полифилов, то есть методов,
// которые ещё не поддерживаются в данной версии языка, но нам нужны:
if (!String.prototype.repeat) {
  // Если такого метода нет
  // добавляем его в прототип
  String.prototype.repeat = function (n) {
    // повторить строку n раз

    // на самом деле код должен быть немного более сложным
    // (полный алгоритм можно найти в спецификации)
    // но даже неполный полифил зачастую достаточно хорош для использования
    return new Array(n + 1).join(this);
  };
}

console.log("La".repeat(3)); // LaLaLa

// Методы объектов часто одалживают
// Например, когда мы используем псевдомассив, но хотим там какой-то метод простого массива
let obj = {
  0: "Hello",
  1: "World",
  length: 2,
};

obj.join = Array.prototype.join;
console.log(obj.join(",")); // Hello,World

/*
Это работает, потому что для внутреннего алгоритма встроенного метода join важны только
корректность индексов и свойство length, он не проверяет, является ли объект на самом деле массивом.
И многие встроенные методы работают так же.
Можно ещё obj.__proto__ = Array.prototype, но это не всегда возможно, потому что объект может наследовать
Только что-то одно
 */
