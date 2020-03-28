// /** Ошибка создания экземпляра класса
//  * В коде ниже класс Rabbit наследует Animal.
//  * К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.
//  */
//
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// class Rabbit extends Animal {
//   constructor(name) {
//     // this.name = name;
//
//     // Добавляем super:
//     super(name);
//
//     this.created = Date.now();
//   }
// }
//
// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// console.log(rabbit.name);
//
// /** Улучшенные часы
//  * У нас есть класс Clock. Сейчас он выводит время каждую секунду
//  * Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision
//  * — количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.
//  */

// class Clock { // Объявляем класс
//   constructor({ template }) { // Из переданного объекта он возьмёт лишь свойство template
//     this.template = template; // И в запишет его в this (то есть в свойство потом созданного нового obj)
//   }
//
//   render() {
//     let date = new Date();
//
//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;
//
//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;
//
//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;
//
//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);
//
//     console.log(output);
//   }
//
//   stop() {
//     clearInterval(this.timer);
//   }
//
//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }
//
// class ExtendedClock extends Clock { // Наследуем методы Clock
//   constructor(options) { // options — аргумент при создании через new Extende...
//     super(options); // Запускаем constructor Clock, кидаем туда options, получаем оттуда this
//     let { precision=1000 } = options; // Создаём переменную precision, значение которой берём из options
//     this.precision = precision; // Записываем значение этой переменной в this
//   }
//
//   start() {
//     super.render();
//     this.timer = setInterval(() => super.render(), this.precision);
//   }
// }
//
//
//
// let lowResolutionClock = new ExtendedClock({
//   template: 'h:m:s',
//   // precision: 10000
// });
//
// lowResolutionClock.start();

/** Исправить код
 */

class Rabbit extends Object {
  constructor(name) {
    // Унаследованный конструктор класса должен вызывать super(), иначе this будет неопределён
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

console.log( rabbit.hasOwnProperty('ame') ); // true
/** Два отличия class Rabbit от class Rabbit extends Object:
 * class Rabbit extends Object: необходимо вызвать super() в конструкторе, class Rabbit: --
 * class Rabbit extends Object: Rabbit.__proto__ === Object
 * class Rabbit: Rabbit.__proto__ === Function.prototype
 */