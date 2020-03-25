/*
Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.

Добавьте ему метод dictionary.toString(), который должен возвращать список ключей,
разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.
 */

let dictionary = Object.create(null, {
  // Создаёам объект, [[Prototype]] -- null
  toString: {
    // определяем свойство toString
    // Определяем с помощью дескриптора, чтобы enumerable было равно false
    value() {
      // значение -- это функция
      return Object.keys(this).join(); // Возвращаем все соединённые ключи объекта перед точкой
    },
  },
});

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(dictionary); // "apple,__proto__"

// Разница между вызовами
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Rabbit
// Во всех других случаях this -- объект перед точкой, а там нет name
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi(); // undefined
