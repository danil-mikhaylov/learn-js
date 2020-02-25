// ФУНКЦИИ
function ShowMessage() {
  console.log("Hello everyone!");
}
// Локальные переменные
function showMessage() {
  let message = "Привет, я JavaScript!"; // локальная переменная
  console.log(message);
}
showMessage(); // Привет, я JavaScript!
console.log(message); // <-- будет ошибка, т.к. переменная видна только внутри функции

// Внешние переменные

let userName = "Вася";
function showMessage() {
  userName = "Петя"; // (1) изменяем значение внешней переменной
  let message = "Привет, " + userName;
  console.log(message);
}
console.log(userName); // Вася перед вызовом функции
showMessage();
console.log(userName); // Петя, значение внешней переменной было изменено функцией

let userName = "Вася";
function showMessage() {
  let userName = "Петя"; // объявляем локальную переменную
  let message = "Привет, " + userName; // Петя
  console.log(message);
}
// функция создаст и будет использовать свою собственную локальную переменную userName
showMessage();
console.log(userName); // Вася, не изменилась, функция не трогала внешнюю переменную

function ShowMessage(from, text) {
  console.log(from + ': "' + text + '"');
}
ShowMessage("Аня", "Привет!"); // Аня: "Привет!"

function showMessage(from, text) {
  from = "*" + from + "*"; // немного украсим "from"
  console.log(from + ": " + text);
}
let from = "Аня";
showMessage(from, "Привет"); // *Аня*: Привет
// значение "from" осталось прежним, функция изменила значение локальной переменной
console.log(from); // Аня

// Параметры по стандарту
function showMessage(from, text = "текст не добавлен") {
  console.log(from + ": " + text);
}
showMessage("Аня"); // Аня: текст не добавлен

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() выполнится только если не передан text
  // результатом будет значение text
}

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log(result); // 3

function checkAge(age = 17) {
  if (age > 18) {
    return true;
  } else {
    return confirm("А родители разрешили?"); // Прикольный пример использования comfirm
  }
}

let age = prompt("Сколько вам лет?");
if (checkAge(age)) {
  console.log("Acces comfirmed");
} else {
  console.log("Acces denied");
}

function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }
  console.log("Вам показывается кино"); // (*)
}
let age = 17;
function CheckAge(age) {
  return age >= 18 ? true : confirm("Родители разрешили?");
}

function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}

function min(a, b) {
  return a > b ? b : a;
}
function pow(a, b) {
  return a ** b;
}

x = prompt("x?");
n = prompt("n?");
if (n < 1) {
  console.log(`Степень ${n} не поддерживается`);
} else {
  console.log(pow(x, n));
}
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

function pow(a, b) {
  for (let i = 1; i < b; i++) {
    console.log("something");
    console.log("something");
  }
}
pow(3, 5);

// Вторая тема

function sayHi() {
  console.log("Привет");
}
console.log(sayHi); // выведет код функции

function sayHi() {
  // (1) создаём
  console.log("Привет");
}
let func = sayHi; // (2) копируем Если бы стояли скобочки (), то записался бы return
func(); // Привет    // (3) вызываем копию (работает)!
sayHi(); // Привет   //     прежняя тоже работает (почему бы нет)

// Функции-Колбэки

function ask(question, yes, no) {
  // В качестве "yes" и "no" пойдут ShowOk() и ShowCancel()
  if (confirm(question)) yes();
  // Если нажать "ок", то пойдёт yes(), т.е., пойдёт ShowOk()
  else no(); // Иначе, соответственно, no(), т.е., пойдёт ShowCancel()
}

function showOk() {
  console.log("Вы согласны.");
}
function showCancel() {
  console.log("Вы отменили выполнение.");
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Вы согласны?",
  function() {
    console.log("Вы согласны.");
  },
  function() {
    console.log("Вы отменили действие.");
  }
);

// Различие f_expression от f_declaration

function sum(a, b) {
  // Функция объявляется отдельной конструкцией «function…» в основном потоке кода.
  return a + b;
}

let sum = function(a, b) {
  // функция, созданная внутри другого выражения или синтаксической конструкции.
  return a + b; // В данном случае функция создаётся в правой части «выражения присваивания» =:
};

sayHi("Вася"); // Привет, Вася
function sayHi(name) {
  console.log(`Привет, ${name}`);
} // Всё хорошо, НО:

sayHi("Вася"); // ошибка!

let sayHi = function(name) {
  // (*) магии больше нет
  console.log(`Привет, ${name}`);
};

// Declarative functions доступны внутри {...}, но не снаружи его, например:

let age = prompt("Сколько Вам лет?", 18);
// в зависимости от условия объявляем функцию
if (age < 18) {
  function welcome() {
    console.log("Привет!");
  }
} else {
  function welcome() {
    console.log("Здравствуйте!");
  }
}
// ...не работает
welcome(); // Error: welcome is not defined

// Рабочий вариант кода
let age = prompt("Сколько Вам лет?", 18);
let welcome;
if (age < 18) {
  welcome = function() {
    console.log("Привет!");
  };
} else {
  welcome = function() {
    console.log("Здравствуйте!");
  };
}
welcome(); // теперь всё в порядке

// Более упрощённый вариант кода:

let age = prompt("Сколько вам лет?", 18);
let welcome =
  age > 18
    ? function() {
        console.log("Здравствуйте!");
      }
    : function() {
        console.log("Привет!");
      };

let n = prompt("Enter the number", 0);
function unknown(n) {
  return;
}
