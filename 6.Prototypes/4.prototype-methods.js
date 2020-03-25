// let animal = {
//   eats: true
// };
//
// let rabbit = Object.create(animal);
//
// console.log(rabbit.eats); // true
// console.log(Object.getPrototypeOf(rabbit) === animal); // true
// Object.setPrototypeOf(rabbit, {}); // Заменяем прототип объекта rabbit на {}
//
// // У Object.create есть необязательный аргумент -- дескрипторы, можно добавить новое свойство так:
// let animal = {
//   eats: true
// };
//
// let rabbit = Object.create(animal, {
//   jumps: {
//     value: true
//   }
// });
//
// console.log(rabbit.jumps, rabbit.eats); // true true
//
// // // клон obj c тем же прототипом (с поверхностным копированием свойств)
// let obj = {
//   name: "John",
//   age: 30
// };
//
// let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
//
// let obj = {};
//
// let key = prompt("What's the key?", "__proto__");
// // obj["__proto__"] == object.__proto__
// obj[key] = "some value";
//
// console.log(obj[key]); // [object Object], не "some value"!
// // [[Prototype]] не может быть строкой: либо объект, либо null
// // => Если пользователь введёт "__proto__", то значение просто проигнорируется
//
// // Можем исправить так:
// let obj = Object.create(null); // Прототип у obj уже есть -- null, а второго быть не может
//
// let key = prompt("What's the key?", "__proto__");
//
// obj[key] = "some value";
//
// console.log(obj[key]); // some value

// Такие объекты называются простейшими. Недостаток в том, что они ничего не наследуют:
let obj = Object.create(null);
console.log(obj); // [Object: null prototype] {}

