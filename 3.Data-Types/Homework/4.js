// Что выведет следующий код?
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
console.log(fruits.length); // 4
// Потому, что массивы – это объекты.
// Обе переменные shoppingCart и fruits являются ссылками на один и тот же массив.

// Играемся с массивами
styles = ["Джаз", "Блюз"];
console.log(styles); // Джаз,Блюз
styles.push("Рок-н-ролл"); // Добавляем "Рок-н-ролл" в конец
console.log(styles); // Джаз,Блюз,Рок-н-ролл
// styles[1] = 'Классика';
styles[Math.floor((styles.length - 1) / 2)] = "Классика"; // Меянем середину на кл
console.log(styles); // Джаз,Классика,Рок-н-ролл
styles.shift(); // Удаялем первый элемент массива
console.log(styles); // Классика,Рок-н-ролл
styles.unshift("Рэп", "Регги"); // Вставляем ("...") в начало массива
console.log(styles); // Рэп,Регги,Классика,Рок-н-ролл

let arr = ["a", "b"];

arr.push(function() {
  console.log(this);
});

arr[2](); // "a","b",function
// Не стоит забывать, что arr -- объект

// Функция sumInput, которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт "null" (etc)
// Подсчитывает и возвращает сумму элементов массива
function sumInput() {
  let numbers = []; // Создаём массив numbers
  let sum = 0;
  while (true) {
    // Бесконечный цикл
    let value = prompt("value?"); // Спрашиваем число
    if (value === "" || value === null || !isFinite(value)) {
      // Если не число, то
      break; // Выходим из бесконечного цикла
    }
    numbers.push(value); // А иначе пушим наше число в numbers
  }
  for (let i = 0; i < numbers.length; i++) {
    // Каждый элемент массива
    sum += Number(numbers[i]); // Кидаем в sum
  }
  /*
    sum = numbers.reduce((a, b) => a + b);
   */
  return sum;
}
console.log(sumInput());

// Подмассив наибольшей суммы
function getMaxSubSum(arr) {
  // Аргмуент функции -- массив, то есть он подаётся на вход
  let maxSum = 0; // Создаём перменную максимальной суммы, которую в конце и будем выводить
  let partialSum = 0; // Сумма "сейчас"
  for (let item of arr) {
    // Для каждого элемента в массиве (item -- замена "i")
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

console.log(getMaxSubSum([-7, 7, 7, -7, 8])); // 15

console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // 0
