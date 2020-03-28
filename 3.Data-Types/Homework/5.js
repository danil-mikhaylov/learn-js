// Переведите текст вида border-left-width в borderLeftWidth
function camelize(string) {
  // Объявление функции, её аргумент — строка
  let completedArray; // Просто создаю переменную, которая в итоге будет строкой с заглавными буквами
  // вторых элементов
  let finalArray = []; // В финал я просто закину первое слово (без "-" + completedArray)
  let firstArray = string // Строка, над которой мы работаем, используя методы, которые написаны ниже
    .split("-")
    .filter((item, index) => index < 1) // Убираю все элементы массива, кроме первого
    .join("");

  completedArray = string
    .split("-")
    .filter((item, index) => index > 0)
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join("");

  finalArray.push(firstArray, completedArray);

  finalArray = finalArray.join("");

  return finalArray;
}

console.log(camelize("background-color")); // backgroundColor
console.log(camelize("list-style-image")); // listStyleImage
console.log(camelize("-webkit-transition")); // WebkitTransition

// Фильтрация по диапазону
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

function filterRange(array, a, b) {
  return array.filter(
    currentNumber => a <= currentNumber && currentNumber <= b
    // Если конкретный номер больше a и меньше b, то оставить его
  );
}
console.log(filtered);
console.log(arr);

// Фильтрация по диапазону "на месте"
function filterRangeInPlace(array, a, b) {
  for (let i = 0; i < array.left; i++) {
    let val = i;
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    // удалить, если за пределами интервала
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
console.log(arr); // [3, 1].

// Сортировать в порядке по убыванию
let array = [5, 2, 1, -10, 8];

array.sort((a, b) => b - a); // Стандартный вариант
// Если бы мы написали ((a, b) => a - b), то была бы стандартная сортировка

console.log(array); // [8, 5, 2, 1, -10]

// Скопировать и отсортировать массив
function copySorted(arr) {
  return arr.slice().sort(); // slice() не делает ничего, sort() сортирует
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // [ 'CSS', 'HTML', 'JavaScript' ]
console.log(arr); // [ 'HTML', 'JavaScript', 'CSS' ]

// Создать расширяемый калькулятор
function Calculator(str) {
  this.methods = {
    // содержит методы, где для каждого знакого callback fn
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };
  this.calculate = function(str) {
    // Функция самого вычисления
    let split = str.split(" "); // Разбивает строку вида "2 + 3"
    let a = parseInt(split[0]); // На 2
    let b = parseInt(split[2]); // На 3
    let operator = split[1]; // И на "+"
    // Обращается к methods по operator ("+" / "-") и передаёт a и b как аргументы
    return this.methods[operator](a, b);
  };
  this.addMethod = function(operator, func) {
    // Фунцкия, добавляющая методы
    this.methods[operator] = func; // Образается к methods по operator ("+" / "-")
    // И записывает, допустим, в "*" callback function, которую мы передали как аргмуент
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8

// Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name); // Создаём новый массив
// Берём элемент старого, запихиваем лишь его имя в новый
console.log(names); // ["Вася", "Петя", "Маша"]

// Трансформировать в массив объектов
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(item => ({
  // Почти то же самое: берём, трансформиурем
  fullName: item.name + " " + item.surname,
  id: item.id
}));

/*
  let usersMapped = users.map(item => ({
  fullName: `${item.name} ${item.surname}`,
  id: item.id,
  }));
*/

console.log(usersMapped[0].id); // 1

console.log(usersMapped[0].fullName); // Вася Пупкин

// Отсортировать пользователей по возрасту
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

function sortByAge(users) {
  users.sort((a, b) => (a.age > b.age ? 1 : -1)); // Старый sort(), но аргументы — age юзеров
}

sortByAge(arr);

// теперь: [vasya, masha, petya]
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя

// Перемешать массив
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Есть массив
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // А...
    let j = Math.floor(Math.random() * (i + 1));
    let t = array[i];
    array[i] = array[j];
    array[j] = t;
  }
}

shuffle(arr);
arr = [3, 2, 1];

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...

// Получить средний возраст
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(arr) {
  return (
    arr.reduce((acc, curr) => acc + curr.age, 0) / arr.length // Суммируем элементы массива // И делим на длину, чтобы было среднее арифмитическое
  );
}

console.log(getAverageAge(arr));

// Оставить уникальные элементы массива
function unique(strings) {
  let result = []; // Создаём переменную-результат
  for (let string of strings) {
    // Для каджой строки в strings
    if (!result.includes(string)) {
      // Если её нет в result,
      result.push(string); // Добавить её туда
    }
  }
  return result; // Возвращаем result
}

console.log(unique(strings)); // кришна, харе, :-O
