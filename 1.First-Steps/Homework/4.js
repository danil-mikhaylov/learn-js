// Спрашиваем официальное имя JS. If (...) {...}, else () {}
let question = prompt("Whats the js official name?"); // Спрашиваем имя
let message =
  question === "ECMAScript" // Наше условие
    ? console.log("Thats right!") // Если оно верно, то...
    : console.log("Wrong :c"); // Иначе...

// Просто спрашиваем, какой номер. If..., else...:
let number = prompt("Number?"); // Спрашиваем номер
if (number > 0) {
  // Условие
  console.log(1); // Выполнить
} else if (number < 0) {
  // Если иначе
  console.log(-1); // Выполнить
} else if (number === 0) {
  // Если иначе
  console.log(0); // Выполнить
}

// '?':
let result; // Объявляем переменную result
result = a + b < 4 ? "Мало" : "Много"; //

// Вариант с if / else:
let result; // Объявляем переменную result
if (a + b < 4) {
  // Если cond
  result = "Мало"; // То...
} else {
  // Иначе...
  result = "Много";
}

// Спрашиваем логин и действуем от ответа:
let message; // Объявляем переменную message
if (login == "Сотрудник") {
  // Если...
  message = "Привет"; // То...
} else if (login == "Директор") {
  // Если иначе...
  message = "Здравствуйте"; // То...
} else if (login == "") {
  // Если иначе...
  message = "Нет логина"; // То...
} else {
  // Иначе
  message = "";
}

// То задание с '?':
let message; // Объявляем переменную message
message =
  login === "Сотрудник" // Наше условие (Если...)
    ? "привет" // То...
    : login === "Директор" // Если иначе
    ? "Здравствуйте" // То...
    : login === ""
    ? "Нет логина"
    : "";
