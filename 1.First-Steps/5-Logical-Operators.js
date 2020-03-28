// Logical operators

result(a || b); // a OR b

console.log(null || 2 || undefined); // 2
console.log(console.log(1) || 2 || console.log(3)); // console.log(...) = undefined

let hour = 9;
if (hour < 10 || hour > 18) {
  // if: hour < 10 OR hour > 18:
  console.log("Офис закрыт.");
}

console.log(1 || 0); // 1
console.log(true || "no matter what"); // true
console.log(null || 1); // 1 (first 'true' value)
console.log(null || 0 || 1); // 1 (first 'true' value)
console.log(undefined || null || 0); // 0 (everything is false, so returns the last value)

let currentUser = null;
let defaultUser = "John";
let name = currentUser || defaultUser || "unnamed";
console.log(name); // "John" — first 'true' value

let x;
true || (x = 1); // '||' Checking: first value is true? Yes, so x != 1
console.log(x); // undefined

let x;
false || (x = 1); // Here's the opposite: false, so do 'x = 1'
console.log(x); // 1

result(a && b); // a AND b

console.log(1 && null && 2); // null
console.log(console.log(1) && console.log(2)); // 1, undefined, because console.log returns undefined

console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  console.log("The time is 12:30");
}

if (1 && 0) {
  // true and false, this does not work
  console.log("не сработает, так как результат ложный");
}

// If first operand is truthy:
// 'AND' returns the second one
console.log(1 && 0); // 0
console.log(1 && 5); // 5

// If first operand is falsy:
// 'AND' returns it.
console.log(null && 5); // null
console.log(0 && "no matter what"); // 0

let x = 1;
x > 0 && console.log("Greater than zero!"); // console.log() works only if x > 1 (Replacement for 'if')

let x = 1;
if (x > 0) {
  console.log("Greater than zero!");
}

result = !value; // НЕ
console.log(!true); // false
console.log(!0); // true

console.log(null || (2 && 3) || 4); // 3, 1 - ничего, считается второй аргумент. Если &&, то выводится последний результат.

age = console.log("enter your age");
if (!(age >= 14 && age <= 90)) {
  console.log("Вы входите в диапозог");
}

age = console.log("enter your age");
if (age >= 14 && age <= 90) {
  console.log("Вы входите в диапозог");
}

if (-1 || 0) console.log("first"); // first, т.к. (-1) != false
if (-1 && 0) console.log("second"); // nothing
if (null || (-1 && 1)) console.log("third"); // Там считается второй аргумент в И, а если один из аргументов И равен 1, значит пишем его.

let login;
let password;
login = prompt("enter login");
if (login === "Админ") {
  password = prompt("enter password");
  if (password == "Я главный") {
    console.log("Здравствуйте");
  }
  if (password != "Я главный" && password != null) {
    console.log("Неверный пароль");
  }
  if (password === "" || password === null) {
    console.log("Отменено");
  }
} else if (login != "Админ") {
  if (login === "" || login == null) {
    console.log("Отменено");
  } else {
    console.log("Я вас не знаю");
  }
}

// Тут сначала идёт проверка логина, если логин != админ, выводится "Я вас не знаю". Если логин = админ, то проверяется пароль.
// Если пароль неверный, то выводится "Неверный пароль". Если пароль верный, то выводится "Здравствуйте"
