let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit");

console.log(rabbit.eats); // true
/*
  Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее:
  "При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]".
 */

// F.prototype по умолчанию, свойство constructor

function Rabbit() {
  /* Прототип по умолчанию
  // Rabbit.prototype = {constructor: Rabbit};
   */
}

function Rabbit() {}
// по умолчанию:
// Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit(); // наследует от {constructor: Rabbit}

console.log(rabbit.constructor === Rabbit); // true (свойство получено из прототипа)

function Rabbit(name) {
  this.name = name;
  console.log(name);
}

let rabbit1 = new Rabbit("White Rabbit");

let rabbit2 = new rabbit1.constructor("Black Rabbit");

function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};

let rabbit = new Rabbit();
console.log(rabbit.constructor === Rabbit); // false

function Rabbit() {}

// Не перезаписываем Rabbit.prototype полностью,
// а добавляем к нему свойство
Rabbit.prototype.jumps = true;
// Прототип по умолчанию сохраняется, и мы всё ещё имеем доступ к Rabbit.prototype.constructor

// Или мы можем заново создать свойство constructor

Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit
};

// теперь свойство constructor снова корректное, так как мы добавили его

// В обычных объектах prototype не является чем-то особенным:
let user = {
  name: "John",
  prototype: "Bla-Bla" // никакой магии нет - обычное свойство
};

