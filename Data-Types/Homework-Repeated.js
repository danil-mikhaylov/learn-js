function camelize(str) {
  return str
    .split("-")
    .map((item, index) =>
      index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

let arr = [5, 3, 8, 1];

function filterRange(arr, number, number2) {
  return arr.filter(item => item >= number && item <= number2);
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (совпадающие значения)

console.log(arr); // 5,3,8,1 (без изменений)

let arr = [5, 2, 1, -10, 8];

function inverseSort(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(inverseSort(arr));

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort();
}

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)

let calc = new Calculator();

function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };
  this.calculate = str => {
    let split = str.split(" ");
    let a = parseInt(split[0]);
    let b = parseInt(split[2]);
    let name = split[1];
    return this.methods[name](a, b);
  };
  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name);
console.log(names); // Вася, Петя, Маша

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(item => ({
  fullName: `${item.name} ${item.surname}`,
  id: item.id
}));

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}
sortByAge(arr);

// теперь: [vasya, masha, petya]
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(arr) {
  return arr.reduce((total, current) => total + current.age, 0) / arr.length;
}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

function unique(arr) {
  // let set = new Set();
  // arr.forEach((item) => {
  //   set.add(item);
  // });
  // return Array.from(set);
  let result = [];
  arr.forEach(item => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aClean(arr) {
  let map = new Map();
  arr.forEach(word => {
    let sorted = word
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    map.set(sorted, word);
  });
  return Array.from(map.values());
}

console.log(aClean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMessages = new WeakSet();

readMessages.add(messages[1]);
readMessages.add(messages[0]);
readMessages.add(messages[1]);

console.log(`Message 1: ${readMessages.has(messages[0])}`); // true
console.log(`Message 2: ${readMessages.has(messages[1])}`); // true
console.log(`Message 3: ${readMessages.has(messages[2])}`); // false

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2019, 9, 1, 12, 41));

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

function sumSalaries(salaries) {
  // let sum = 0;
  //
  // Object.values(salaries).forEach(item => {
  //   sum += item;
  // });
  //
  // return sum;

  return Object.values(salaries).reduce((total, current) => total + current);
}

console.log(sumSalaries(salaries)); // 650

let user = {
  name: "John",
  age: 30
};

function count(obj) {
  return Object.values(obj).length;
}

console.log(count(user)); // 2

let user = {
  name: "John",
  years: 30
};

let { name, years: age, isAdmin: isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

function topSalary(salaries) {
  let max = 0;
  let workerName = null;
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > max) {
      max = salary;
      workerName = name;
      console.log(name);
    }
  }
  return { workerName, max };
}
console.log(topSalary(salaries));
