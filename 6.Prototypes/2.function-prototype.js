// let animal = {
//   eats: true
// };
//
// function Rabbit(name) {
//   this.name = name;
// }
//
// Rabbit.prototype = animal;
//
// let rabbit = new Rabbit("White Rabbit");
//
// console.log(rabbit.eats); // true
/*
  Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее:
  "При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]".
 */

// F.prototype по умолчанию, свойство constructor

// function Rabbit() {
//   /* Прототип по умолчанию
//   // Rabbit.prototype = {constructor: Rabbit};
//    */
// }

function Rabbit() {
  // по умолчанию:
  // Rabbit.prototype = { constructor: Rabbit }
}

console.log(Rabbit.prototype.constructor == Rabbit); // true