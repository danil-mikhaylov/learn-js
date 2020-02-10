// just simple example how do if-else work
let year = prompt("When wd was born?");
let cond = year == 2015;
if (cond) {
  console.log("you are right");
} else {
  console.log("loser");
}

// without 'cond' variable
let year = prompt("В каком году появилась спецификация ECMAScript-2015?", "");
if (year < 2015) {
  console.log("Это слишком рано...");
} else if (year > 2015) {
  console.log("Это поздновато");
} else {
  console.log("Верно!");
}

// An example with '?'
let accessAllowed;
let age = prompt("Сколько вам лет?", "");

if (age >= 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
console.log(accessAllowed);

/// shorter variant:
let accessAllowed;
let accessAllowed = age >= 18 ? true : false;

accessAllowed = age > 18; // comparison returns

// variant with '?':
let age = prompt("Возраст?", 18);
let message =
  age < 3
    ? "Здравствуй, малыш"
    : age < 18
    ? "Привет!"
    : age < 100
    ? "Здравствуйте!"
    : "Какой необычный возраст!";
console.log(message);

// Homework

// Asking for official name of JS. If..., else...:
let question = prompt("Whats the js official name?");
let message =
  question === "ECMAScript"
    ? console.log("Thats right!")
    : console.log("Wrong :c");

// Just asking what's the number. If..., else...:
let number = prompt("Number?");
if (number > 0) {
  console.log(1);
} else if (number < 0) {
  console.log(-1);
} else if (number === 0) {
  console.log(0);
}

// '?':
let result;
result = a + b < 4 ? "Мало" : "Много";

// if-else:
let result;
if (a + b < 4) {
  result = "Мало";
} else {
  result = "Много";
}

// Asking for login. if-else:
let message;
if (login == "Сотрудник") {
  message = "Привет";
} else if (login == "Директор") {
  message = "Здравствуйте";
} else if (login == "") {
  message = "Нет логина";
} else {
  message = "";
}

// '?':
let message;
message =
  login === "Сотрудник"
    ? "привет"
    : login === "Директор"
    ? "Здравствуйте"
    : login === ""
    ? "Нет логина"
    : "";
