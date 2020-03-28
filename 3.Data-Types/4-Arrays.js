let arr = new Array();
let arr = [];

let fruits = ["Яблоко", "Апельсин", "Слива"];

console.log(fruits[0]); // Яблоко
console.log(fruits[1]); // Апельсин
console.log(fruits[2]); // Слива

fruits[2] = "Груша"; // теперь ["Яблоко", "Апельсин", "Груша"]
fruits[3] = "Лимон"; // теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]

let fruits = ["Яблоко", "Апельсин", "Слива"];

console.log(fruits.length); // 3

let fruits = ["Яблоко", "Апельсин", "Слива"];
console.log(fruits); // Яблоко, Апельсин, Слива

// разные типы значений
let arr = [
  "Яблоко",
  { name: "Джон" },
  true,
  function() {
    console.log("привет");
  }
];
// получить элемент с индексом 1 (объект) и затем показать его свойство
console.log(arr[1].name); // Джон

// получить элемент с индексом 3 (функция) и выполнить её
arr[3](); // привет

let fruits = ["Яблоко", "Апельсин", "Груша"];

console.log(fruits.pop()); // удаляем "Груша" и выводим его

console.log(fruits); // Яблоко, Апельсин

let fruits = ["Яблоко", "Апельсин"];

fruits.push("Груша");

console.log(fruits); // Яблоко, Апельсин, Груша

let fruits = ["Яблоко", "Апельсин", "Груша"];

console.log(fruits.shift()); // удаляем Яблоко и выводим его

console.log(fruits); // Апельсин, Груша

let fruits = ["Апельсин", "Груша"];

fruits.unshift("Яблоко");

console.log(fruits); // Яблоко, Апельсин, Груша

let fruits = ["Яблоко"];

fruits.push("Апельсин", "Груша");
fruits.unshift("Ананас", "Лимон");

// ["Ананас", "Лимон", "Яблоко", "Апельсин", "Груша"]
console.log(fruits);

let fruits = ["Банан"];

let arr = fruits; // копируется по ссылке (две переменные ссылаются на один и тот же массив)

console.log(arr === fruits); // true

arr.push("Груша"); // массив меняется по ссылке

console.log(fruits); // Банан, Груша - теперь два элемента

// Так делать не стоит:
let fruits = []; // создаём массив

fruits[99999] = 5; // создаём свойство с индексом, намного превышающим длину массива

fruits.age = 25; // создаём свойство с произвольным именем

let arr = ["Яблоко", "Апельсин", "Груша"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let fruits = ["Яблоко", "Апельсин", "Слива"];
for (let fruit of fruits) {
  console.log(fruit);
}

let arr = [1, 2, 3, 4, 5];

arr.length = 2; // укорачиваем до двух элементов
console.log(arr); // [1, 2]

arr.length = 5; // возвращаем length как было
console.log(arr[3]); // undefined: значения не восстановились

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][1]); // 5, центральный элемент

let arr = [1, 2, 3];

console.log(arr); // 1,2,3
console.log(String(arr) === "1,2,3"); // true

console.log([] + 1); // "1"
console.log([1] + 1); // "11"
console.log([1, 2] + 1); // "1,21"

styles = ["Джаз", "Блюз"];
console.log(styles); // Джаз,Блюз
styles.push("Рок-н-ролл");
console.log(styles); // Джаз,Блюз,Рок-н-ролл
// styles[1] = 'Классика';
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles); // Джаз,Классика,Рок-н-ролл
styles.shift();
console.log(styles); // Классика,Рок-н-ролл
styles.unshift("Рэп", "Регги");
console.log(styles); // Рэп,Регги,Классика,Рок-н-ролл

function sumInput() {
  let numbers = [];
  let sum = 0;
  while (true) {
    let value = prompt("value?");
    if (value === "" || value === null || !isFinite(value)) {
      break;
    }
    numbers.push(value);
  }
  for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
  }
  return sum;
}
console.log(sumInput());

function getMaxSubSum(arr) {
  // Аргмуент функции — массив, то есть он подаётся на вход
  let maxSum = 0; // Создаём перменную максимальной суммы, которую в конце и будем выводить
  let partialSum = 0; // Сумма "сейчас"
  for (let item of arr) {
    // Для каждого элемента в массиве (item — замена "i")
    partialSum += item; // К сумме "сейчас" прибавляем текущий элемент
    maxSum = Math.max(
      partialSum,
      maxSum
    ); /* Выбираем максимальное из суммы сейчас (которая...
                                          может быть < 0, и maxSum( которая равна 0)
*/
    if (partialSum < 0) {
      // Если всё же сумма "сейчас" отрицательна, мы её делаем 0
      partialSum = 0;
    }
  }
  return maxSum; // Выводим, соответственно
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // 0