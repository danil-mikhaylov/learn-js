// // Независимы ли счётчики?
// function makeCounter() {
//   let count = 0;
//
//   return function() {
//     return count++;
//   };
// }
//
// let counter = makeCounter(); // Два разных вызова makeCounter()
// let counter2 = makeCounter(); // =>, разные лексические окружения
//
// console.log(counter()); // 0
// console.log(counter()); // 1
//
// console.log(counter2()); // 0, у каждой из них свой собственный count
// console.log(counter2()); // 1
//
// // Будет ли работать объект счётчика, созданный при помощи конструктора?
// function Counter() {
//   let count = 0;
//
//   this.up = function() {
//     // Обе функции созданы с одним и тем же лексическим окружением
//     return ++count;
//   };
//   this.down = function() {
//     // => они обе имеют доступ к одному count
//     return --count;
//   };
// }
//
// let counter = new Counter();
//
// console.log(counter.up()); // 1, работает!
// console.log(counter.up()); // 2, работает!
// console.log(counter.down()); // 1, работает!
//
// // Делаем функцию, которая работает таким образом: sum(a)(b) = a + b
// function sum(a) {
//   return function(b) {
//     return a + b;
//   };
// }
//
// console.log(sum(2)(3));

// Дополняем arr.filter() функциями inBetween и inArray
function inBetween(a, b) {
  return function(n) {
    // Наш аргумент -- то, что передаёт filter
    return n >= a && n <= b;
  };
}
function inArray(arr) {
  return function(n) {
    return arr.includes(n);
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// Преобразовать сортировку, например:
/*
users.sort((a, b) => a.name > b.name ? 1 : -1) ==> users.sort(byField('name'));
users.sort((a, b) => a.age > b.age ? 1 : -1) ==> users.sort(byField('name'));
 */
// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];
//
// function byField(field) {
//   return function (a, b) {
//     return a[field] > b[field] ? 1 : -1
//   }
// }
//
// users.sort(byField("age"));
// console.table(users);

// Починить код, чтобы у каждого стрелка бый свой порядковый номер
// Исходный код:
function makeArmy() {
  let shooters = []; // Создаём пустой массив shooters
  let i = 0;
  while (i < 10) {
    let shooter = function() { // Каждый шутер ссылается на внешнее ЛО, где i = 10
      // функция shooter
      console.log(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

// Нормальный код:
function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) { // (*)
    // Теперь ЛО внутреннее, у каждого свой i
    let shooter = function() {
      // функция shooter
      console.log(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5
