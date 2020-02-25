// Простой пример работы if / else
let year = prompt("When wd was born?");
let cond = year == 2015;
if (cond) {
  console.log("you are right");
} else {
  console.log("loser");
}

// Без переменной условия
let year = prompt("В каком году появилась спецификация ECMAScript-2015?", "");
if (year < 2015) {
  console.log("Это слишком рано...");
} else if (year > 2015) {
  console.log("Это поздновато");
} else {
  console.log("Верно!");
}

// Пример с '?'
let accessAllowed;
let age = prompt("Сколько вам лет?", "");

if (age >= 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
console.log(accessAllowed);

// Более короткий вариант:
let accessAllowed;
let accessAllowed = age >= 18 ? true : false;

accessAllowed = age > 18; // comparison returns

// Вариант без '?':
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
