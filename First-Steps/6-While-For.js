// while

// syntax of 'while':
while (condition) {
  // do stuff
}

let i = 3;
while (i) {
  // cycle will stop when i = 0:
  console.log(i);
  i--;
}

let i = 3;
while (i) console.log(i--); // Для однострочных циклов тело {} не нужно

let i = 0; // Если хотим, чтобы тело цикла хотя бы один раз исполнилось, лучше использовать while(...) {...}
do {
  console.log(i);
  i++;
} while (i < 3);

// Цикл for

for (начало; условие; шаг) {
  // ... тело цикла ...
}

for (let i = 0; i < 3; i++) {
  // выведет 0, затем 1, затем 2
  console.log(i);
}

// for (let i = 0; i < 3; i++) console.log(i)

// Выполнить начало
let i = 0;
// Если условие == true → Выполнить тело, Выполнить шаг
if (i < 3) {
  console.log(i);
  i++;
}
// Если условие == true → Выполнить тело, Выполнить шаг
if (i < 3) {
  console.log(i);
  i++;
}
// Если условие == true → Выполнить тело, Выполнить шаг
if (i < 3) {
  console.log(i);
  i++;
}
// ...конец, потому что теперь i == 3

let i = 0; // мы уже имеем объявленную i с присвоенным значением
for (; i < 3; i++) {
  // нет необходимости в "начале"
  console.log(i); // 0, 1, 2
}

let i = 0;
for (; i < 3; ) {
  console.log(i);
}

for (;;) {
  // равносильно while(True)
}

// break / continue

// break
let sum = 0;
while (True) {
  value = +promp("Number?"); // Считывает числа до тех пор, пока мы не перестанем их вводить. Затем, находится сумма всех введённых чисел
  if (!value) {
    // Если value = false, следовательно, !value = true, следовательно, выполнится break;
    break;
  }
  sum += value;
}
console.log(sum);

//continue
for (let i = 0; i < 10; i++) {
  // Выводит все нечётные числа до 10
  if (i % 2 == 0) {
    // Если число чётное...
    continue; // ...просто пропускаем эту стадию
  }
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    // Если число чётное,
    continue; // Игнорировать следующую часть цикла!
  }
  console.log(i); // Следовательно, чётные числа выводиться не будут
}

for (let i = 0; i < 10; i++) {
  // Тот же самый вариант
  if (i % 2) {
    // Если число нечётное, то...
    console.log(i); // ...вывод
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Значение на координатах (${i},${j})`, ""); // Отличный вариант input'a
    // Что если мы захотим перейти к Готово (ниже) прямо отсюда?
  }
}
console.log("Готово!");

labelName: for (;;) {
  // Вид метки цикла
  //    ...
}

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Значение на координатах (${i}, ${j})`);
    if (!input) break outer; // если пустая строка или Отмена, то выйти из обоих циклов
    // do stuff
  }
}

for (let i = 0; i < 10; i++) {
  // Цикл до 10, не включая 10
  if (i % 2 == 0) {
    // Если остаток = 0, то есть число чётное, то
    console.log(i); // Вывести это число
  }
}

for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`);
}
// || Одно равно другому
let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

for (;;) {
  input = prompt("Введите число, большее 100.");
  if (input > 100 || !input) {
    break;
  }
}

for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    // Проверить, делится ли число
    if (i % j == 0) continue;
  }
  console.log(i);
}

let n = 10;
nextPrime: for (let i = 2; i <= n; i++) {
  // Для всех i...

  for (let j = 2; j < i; j++) {
    // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log(i); // простое число
}
let a = Number(prompt("Enter the numbr between 3 and 5"));
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

// Лучше всегда использовать break, т.к. без него просто пойдут все проверки дальше

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

switch (browser) {
  case "Edge":
    console.log("You've got the Edge!");
    break;
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    console.log("Okay we support these browsers too");
    break;
  default:
    console.log("We hope that this page looks ok!");
}

let browser;
if (browser === "edge") {
  console.log("You've got the Edge!");
} else if (browser === "Chrome" || "Firefox" || "Safari" || "Opera") {
  console.log("Okay we support these browsers too");
} else {
  console.log("We hope that this page looks ok!");
}

const number = parseInt(prompt("Введите число между 0 и 3"));
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

for (let i = 0; i < 10; i++) {
  if (true) {
    console.log("hello");
  }
}

for (let i = 0; i < 10; i++) {
  if (!true) continue;
  console.log("hello");
}
