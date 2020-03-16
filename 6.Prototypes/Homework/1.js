// Какие значения показываются в процессе выполнения кода?
let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log(rabbit.jumps); // true, берётся из rabbit.

delete rabbit.jumps;

console.log(rabbit.jumps); // null, берётся из animal.

delete animal.jumps;

console.log(rabbit.jumps); // undefined, такого свойства больше нет.

// Составляем дерево, смотрим, что быстрее найдётся: head.glasses / pockets.glasses
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

console.log(pockets.pen); // 3
console.log(bed.glasses); // 1
console.log(table.money); // undefined

// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat(); // this = rabbit, =>, rabbit.full = true
console.log(rabbit.full); // true

// Почему второй хомяк тоже наедается? Исправить.
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
}
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple"); /*
  Сначала в прототипе (=hamster) находится метод speedy.eat, а затем он выполняется с this=speedy (объект перед точкой).
  Затем в this.stomach.push() нужно найти свойство stomach и вызвать для него push. Движок ищет stomach в this (=speedy), но ничего не находит.
  Он идёт по цепочке прототипов и находит stomach в hamster.
  И вызывает для него push, добавляя еду в живот прототипа.
 */

console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple