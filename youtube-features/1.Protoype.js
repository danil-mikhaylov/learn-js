const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Greet!");
  },
};

const person = new Object({
  name: "Maxim",
  age: 30,
  greet: function () {
    console.log("Greet!");
  },
});

Object.prototype.sayHello = function () {
  console.log("Hello!");
};

person.sayHello(); // Hello!

const lena = Object.create(person);

console.log(lena.greet()); // Greet!
console.log(lena.name); // Maxim

lena.name = "Elena";
console.log(lena.name); // Elena

let str = "I am a string";
console.log(str.length); // 13

const array = [1, 2, 3, 4, 5];
Object.prototype.multBy = function(n) {
  return this.map(i => i * n);
};

console.log(array.multBy(2));