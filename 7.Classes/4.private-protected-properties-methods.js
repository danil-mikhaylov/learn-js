// // Сначала создадим простой класс для описания кофеварки:
// class CoffeeMachine {
//   waterAmount = 0; // количество воды внутри
//
//   constructor(power) {
//     this.power = power;
//     console.log(`Создана кофеварка, мощность: ${power}`);
//   }
// }
//
// // создаём кофеварку
// let coffeeMachine = new CoffeeMachine(100);
//
// // добавляем воды
// coffeeMachine.waterAmount = 200;
//
// // Делаем waterAmount приватным черех "_" впереди. Это такое соглашение.
// class CoffeeMachine {
//   _waterAmount = 0;
//
//   set waterAmount(value) {
//     if (value < 0) throw new Error("Отрицательное количество воды");
//     this._waterAmount = value;
//   }
//
//   get waterAmount() {
//     return this._waterAmount;
//   }
//
//   constructor(power) {
//     this._power = power;
//   }
// }
//
// // создаём новую кофеварку
// let coffeeMachine = new CoffeeMachine(100);
//
// // устанавливаем количество воды
// coffeeMachine.waterAmount = -10; // Error: Отрицательное количество воды
//
// // Делаем свойство power доступным только для чтения, потому что мощность не меняется:
// // Для этого нужно создать лишь геттер, сеттер не нужон.
// class CoffeeMachine {
//   // ...
//
//   constructor(power) {
//     this._power = power;
//   }
//
//   get power() {
//     return this._power;
//   }
// }
//
// // создаём кофеварку
// let coffeeMachine = new CoffeeMachine(100);
//
// console.log(`Мощность: ${coffeeMachine.power}W`); // Мощность: 100W
//
// coffeeMachine.power = 25; // Error (no setter)
//
// // Лучше использовать не геттеры и сеттеры, а функции get... / set...:
// class CoffeeMachine {
//   _waterAmount = 0;
//
//   setWaterAmount(value) {
//     if (value < 0) throw new Error("Отрицательное количество воды");
//     this._waterAmount = value;
//   }
//
//   getWaterAmount() {
//     return this._waterAmount;
//   }
// }
//
// new CoffeeMachine().setWaterAmount(100);
// // Защищённый поля наследуются.
//
// // Приватные свойства видны только внутри класса
// class CoffeeMachine {
//   #waterLimit = 200;
//
//   #checkWater(value) {
//     if (value < 0) throw new Error("Отрицательный уровень воды");
//     if (value > this.#waterLimit) throw new Error("Слишком много воды");
//   }
// }
//
// let coffeeMachine = new CoffeeMachine();
//
// // снаружи  нет доступа к приватным методам класса
// coffeeMachine.#checkWater(); // Error
// coffeeMachine.#waterLimit = 1000; // Error
//
// class CoffeeMachine {
//
//   #waterAmount = 0;
//
//   get waterAmount() {
//     return this.#waterAmount;
//   }
//
//   set waterAmount(value) {
//     if (value < 0) throw new Error("Отрицательный уровень воды");
//     this.#waterAmount = value;
//   }
// }
//
// let machine = new CoffeeMachine();
//
// machine.waterAmount = 100;
// // console.log(machine.#waterAmount); // Error
// machine.waterAmount;
//
// // Если наследуем, то мы не можем получить доступ к #waterAmount, придётся полагаться на свой геттер / сеттер
// class MegaCoffeeMachine extends CoffeeMachine {
//   method() {
//     console.log(this.#waterAmount); // Error: can only access from CoffeeMachine
//   }
// }

// Обычно мы можем получить доступ к полям объекта с помощью this[name]:
class User {
// ...
  sayHi() {
    let fieldName = "name";
    console.log(`Hello, ${this[fieldName]}`);
  }
}

// с приватными свойствами это не работает: this['#name'] не работает, потому что безопасность.

/** Итого:
 * Защищённые поля имеют префикс _. Это хорошо известное соглашение, не поддерживаемое на уровне языка.
 Программисты должны обращаться к полю, начинающемуся с _, только из его класса и классов, унаследованных от него.
 * Приватные поля имеют префикс #.
 JavaScript гарантирует, что мы можем получить доступ к таким полям только внутри класса.
 * В настоящее время приватные поля не очень хорошо поддерживаются в браузерах, но можно использовать полифил.
 */

