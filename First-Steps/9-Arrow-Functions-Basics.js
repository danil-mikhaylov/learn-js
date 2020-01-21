// // ИСПОЛЬЗОВАНИЕ НОВОГО js
"use strict";

// СТРЕЛОЧНЫЕ ФУНКЦИИ

let func = function(arg1, arg2) {
  return expression;
};

let func = (arg1, arg2) => expression;

let sum = (a, b) => a + b;
/* Более короткая форма для:

let sum = function(a, b) {
  return a + b;
};
*/

// то же что и
// let double = function(n) { return n * 2 }
let double = n => n * 2;
alert(double(3)); // 6

// Если нет аргументов, указываются пустые круглые скобки:
let SayHi = () => alert("Hello!");

let age = prompt("Сколько вам лет?");
let welcome = age < 18 ? () => alert("Привет!") : () => alert("Здравствуйте!");
welcome();

// Заключение более сложного выражения требует {...}:
let sum = (a, b) => {
  // фигурная скобка, открывающая тело многострочной функции
  return a + b; // при фигурных скобках для возврата значения нужно явно вызвать return
};
alert(sum(1, 2)); // 3

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);
