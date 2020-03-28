let name = "John";
function sayHi(name) {
  console.log("Hi, " + name); // Hi, Pete
}

name = "Pete";

sayHi(name);

function makeWorker() {
  let name = "Pete";

  return function() {
    console.log(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)

// Nested functions

function sayHiBye(firstName, lastName) {
  function getFullName() {
    return firstName + " " + lastName;
  }
  console.log("Hello, " + getFullName());
  console.log("Bye, " + getFullName());
}
sayHiBye("SOME", "ONE");

function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

/*
  Замыкание — функция, которая запоминает свои внешние переменные
  и может получить к ним доступ.
*/

// Homework

function sum(a) {
  return function(b) {
    return a + b; // берёт "a" из внешнего лексического окружения
  };
}

console.log(sum(1)(2)); // 3

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // [ 3, 4, 5, 6 ]
console.log(arr.filter(inArray([1, 2, 10]))); // [ 1, 2 ]

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

users.sort(byField("name"));
users.forEach(user => {
  console.log(user.name);
}); // Ann, John, Pete

users.sort(byField("age"));
users.forEach(user => {
  console.log(user.name);
}); // Pete, Ann, John

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() {
      // функция shooter
      console.log(j); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }
  // for (let i = 0; i < 10; i++) {
  //   let shooter = function() {
  //     console.log(i);
  //   };
  //   shooters.push(shooter);
  // }
  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
