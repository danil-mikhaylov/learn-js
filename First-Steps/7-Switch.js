/* Конструкция switch имеет один или более блок case
и необязательный блок default.

Выглядит она так:
*/

// switch(x) {
//   case 'value1':  // if (x === 'value1')
//     ...
//     [break]
//
//   case 'value2':  // if (x === 'value2')
//     [break]
//
//   default:
//     ...
//     [break]
// }

let a = 2 + 2;

switch (a) {
  case 3:
    console.log("Маловато");
    break;
  case 4:
    console.log("В точку!");
    break;
  case 5:
    console.log("Перебор");
    break;
  default:
    console.log("Нет таких значений");
}

let a = 2 + 2;

switch (a) {
  case 3:
    console.log("Маловато");
  case 4:
    console.log("В точку!");
  case 5:
    console.log("Перебор");
  default:
    console.log("Нет таких значений");
}

// В примере выше последовательно выполняются три console.log:
console.log("В точку!");
console.log("Перебор");
console.log("Нет таких значений");

let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    console.log(
      "Выполнится, т.к. значением +a будет 1, что в точности равно b+1"
    );
    break;

  default:
    console.log("Это не выполнится");
}

let a = 2 + 2;

switch (a) {
  case 4:
    console.log("Правильно!");
    break;

  case 3: // (*) группируем оба case
  case 5:
    console.log("Неправильно!");
    console.log("Может вам посетить урок математики?");
    break;

  default:
    console.log("Результат выглядит странновато. Честно.");
}

let arg = prompt("Введите число?");
switch (arg) {
  case "0":
  case "1":
    console.log("Один или ноль");
    break;

  case "2":
    console.log("Два");
    break;

  case 3:
    console.log("Никогда не выполнится!");
    break;
  default:
    console.log("Неизвестное значение");
}

// Домашка

if (browser == "Edge") {
  console.log("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  console.log("Okay we support these browsers too");
} else {
  console.log("We hope that this page looks ok!");
}

const number = +prompt("Введите число между 0 и 3", "");

if (number === 0) {
  console.log("Вы ввели число 0");
}

if (number === 1) {
  console.log("Вы ввели число 1");
}

if (number === 2 || number === 3) {
  console.log("Вы ввели число 2, а может и 3");
}
// Переписать в switch

const number = +prompt("Введите число между 0 и 3", "");

switch (number) {
  case 0:
    console.log("Вы ввели число 0");
    break;

  case 1:
    console.log("Вы ввели число 1");
    break;

  case 2:
  case 3:
    console.log("Вы ввели число 2, а может и 3");
    break;
}
