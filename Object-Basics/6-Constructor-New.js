function CreateUser(name) {
  // this = {} (неявно)
  this.name = name;
  this.isAdmin = false;
  // return this (неявно)
}

let user = new CreateUser("Вася");
alert(user.name); // Вася
alert(this.isAdmin); // false

let user = {
  name: "Вася",
  isAdmin: false
};

function User() {
  alert(new.target);
}

// без "new":
User(); // undefined

// с "new":
new User(); // function User { ... }

function User(name) {
  if (!new.target) {
    return new User(name);
  }
  this.name = name;
}
let vasya = User("Вася"); // переадресовывает вызовы на new User
alert(vasya.name); // Вася

function BigUser() {
  this.name = "Вася";

  return { name: "Godzilla" }; // <-- возвращает этот объект
}

alert(new BigUser().name); // Godzilla, получили этот объект

function SmallUser() {
  this.name = "Вася";

  return; // <-- возвращает this
}

alert(new SmallUser().name); // Вася

function SmallUser() {
  this.name = "Вася";

  return; // <-- возвращает this
}

alert(new SmallUser().name); // Вася

let user = new User();
// то же, что и
let user = new User();

function User(name) {
  this.name = name;
  this.sayHi = function() {
    alert("My name is " + this.name);
  };
}

let user = new User("The cat");
user.sayHi();

/*
vasya = {
   name: "Вася",
   sayHi: function() { ... }
}
*/

Домашка;
let something = {};
function A() {
  // TO DO
  return something;
}

function B() {
  // TO DO
  return something;
}

let a = new A();
let b = new B();
console.log(a == b); // true

function Calculator() {
  this.read = function() {
    this.a = parseInt(prompt("a?"));
    this.b = parseInt(prompt("b?"));
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();
console.log("Sum = " + calculator.sum());
console.log("Mul = " + calculator.mul());

let ask = prompt("startingValue?");
function Accamulator(startingValue) {
  this.value = parseInt(startingValue);
  this.read = function() {
    let a = parseInt(prompt("a?"));
    this.value += a;
  };
}

let accamulator = new Accamulator(ask);

accamulator.read();
accamulator.read();

console.log(accamulator.value);
