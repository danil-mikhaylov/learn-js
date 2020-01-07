// let arr = new Array();
// let arr = [];
//
// let fruits = ["Яблоко", "Апельсин", "Слива"];
//
// print(fruits[0]); // Яблоко
// print(fruits[1]); // Апельсин
// print(fruits[2]); // Слива
//
// fruits[2] = "Груша"; // теперь ["Яблоко", "Апельсин", "Груша"]
// fruits[3] = "Лимон"; // теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]
//
// let fruits = ["Яблоко", "Апельсин", "Слива"];
//
// print(fruits.length); // 3
//
// let fruits = ["Яблоко", "Апельсин", "Слива"];
// print(fruits); // Яблоко, Апельсин, Слива
//
// // разные типы значений
// let arr = [
//   "Яблоко",
//   { name: "Джон" },
//   true,
//   function() {
//     alert("привет");
//   }
// ];
// // получить элемент с индексом 1 (объект) и затем показать его свойство
// print(arr[1].name); // Джон
//
// // получить элемент с индексом 3 (функция) и выполнить её
// arr[3](); // привет
//
// let fruits = ["Яблоко", "Апельсин", "Груша"];
//
// print(fruits.pop()); // удаляем "Груша" и выводим его
//
// alert(fruits); // Яблоко, Апельсин
//
// let fruits = ["Яблоко", "Апельсин"];
//
// fruits.push("Груша");
//
// print(fruits); // Яблоко, Апельсин, Груша
//
// let fruits = ["Яблоко", "Апельсин", "Груша"];
//
// alert(fruits.shift()); // удаляем Яблоко и выводим его
//
// alert(fruits); // Апельсин, Груша
//
// let fruits = ["Апельсин", "Груша"];
//
// fruits.unshift("Яблоко");
//
// alert(fruits); // Яблоко, Апельсин, Груша
//
// let fruits = ["Яблоко"];
//
// fruits.push("Апельсин", "Груша");
// fruits.unshift("Ананас", "Лимон");
//
// // ["Ананас", "Лимон", "Яблоко", "Апельсин", "Груша"]
// alert(fruits);
//
// let fruits = ["Банан"];
//
// let arr = fruits; // копируется по ссылке (две переменные ссылаются на один и тот же массив)
//
// alert(arr === fruits); // true
//
// arr.push("Груша"); // массив меняется по ссылке
//
// alert(fruits); // Банан, Груша - теперь два элемента
//
// // Так делать не стоит:
// let fruits = []; // создаём массив
//
// fruits[99999] = 5; // создаём свойство с индексом, намного превышающим длину массива
//
// fruits.age = 25; // создаём свойство с произвольным именем
//
// let arr = ["Яблоко", "Апельсин", "Груша"];
//
// for (let i = 0; i < arr.length; i++) {
//   alert(arr[i]);
// }
//
// let fruits = ["Яблоко", "Апельсин", "Слива"];
// for (let fruit of fruits) {
//   print(fruit);
// }
//
// let arr = [1, 2, 3, 4, 5];
//
// arr.length = 2; // укорачиваем до двух элементов
// alert(arr); // [1, 2]
//
// arr.length = 5; // возвращаем length как было
// alert(arr[3]); // undefined: значения не восстановились
//
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
//
// alert(matrix[1][1]); // 5, центральный элемент
//
// let arr = [1, 2, 3];
//
// alert(arr); // 1,2,3
// alert(String(arr) === "1,2,3"); // true
//
// alert([] + 1); // "1"
// alert([1] + 1); // "11"
// alert([1, 2] + 1); // "1,21"
//
// styles = ["Джаз", "Блюз"];
// print(styles); // Джаз,Блюз
// styles.push("Рок-н-ролл");
// print(styles); // Джаз,Блюз,Рок-н-ролл
// // styles[1] = 'Классика';
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// print(styles); // Джаз,Классика,Рок-н-ролл
// styles.shift();
// print(styles); // Классика,Рок-н-ролл
// styles.unshift("Рэп", "Регги");
// print(styles); // Рэп,Регги,Классика,Рок-н-ролл
//
// function sumInput() {
//   let numbers = [];
//   let sum = 0;
//   while (true) {
//     let value = prompt("value?");
//     if (value === "" || value === null || !isFinite(value)) {
//       break;
//     }
//     numbers.push(value);
//   }
//   for (let i = 0; i < numbers.length; i++) {
//     sum += Number(numbers[i]);
//   }
//   return sum;
// }
// print(sumInput());
//
// function getMaxSubSum(arr) {
//   // Аргмуент функции -- массив, то есть он подаётся на вход
//   let maxSum = 0; // Создаём перменную максимальной суммы, которую в конце и будем выводить
//   let partialSum = 0; // Сумма "сейчас"
//   for (let item of arr) {
//     // Для каждого элемента в массиве (item -- замена "i")
//     partialSum += item; // К сумме "сейчас" прибавляем текущий элемент
//     maxSum = Math.max(
//       partialSum,
//       maxSum
//     ); /* Выбираем максимальное из суммы сейчас (которая...
//                                           может быть < 0, и maxSum( которая равна 0)
// */
//     if (partialSum < 0) {
//       // Если всё же сумма "сейчас" отрицательна, мы её делаем 0
//       partialSum = 0;
//     }
//   }
//   return maxSum; // Выводим, соответственно
// }
//
// print(getMaxSubSum([-1, 2, 3, -9])); // 5
// print(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
// print(getMaxSubSum([-2, -1, 1, 2])); // 3
// print(getMaxSubSum([100, -9, 2, -3, 5])); // 100
// print(getMaxSubSum([1, 2, 3])); // 6
// print(getMaxSubSum([-1, -2, -3])); // 0
