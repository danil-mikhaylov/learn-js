// let animal = {
//   eats: true
// };
//
// let rabbit = {
//   jumps: true
// };
//
// rabbit.__proto__ = animal;
// // Теперь мы можем найти оба свойства в rabbit:
// console.log(rabbit.jumps); // true
// console.log(rabbit.eats); // true

// let animal = {
//   eats: true,
//   walk() {
//     console.log("Animal walks")
//   }
// };
//
// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };
//
// rabbit.walk(); // Animal walks

// let animal = {
//   eats: true,
//   walk() {
//     console.log("Animal walks");
//   }
// };
//
// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };
//
// let longEar = {
//   earLength: 10,
//   __proto__: rabbit
// };
//
// longEar.walk(); // Animal walks
// console.log(longEar.jumps); // true

// let animal = {
//   eats: true,
//   walk() {
//     /* этот метод не будет использоваться в rabbit */
//   }
// };
//
// let rabbit = {
//   __proto__: animal
// };
//
// rabbit.walk = function() {
//   console.log("Rabbit! Bounce-bounce");
// };
//
// rabbit.walk();

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");

  }
}