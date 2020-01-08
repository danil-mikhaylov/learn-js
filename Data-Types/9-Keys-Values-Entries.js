// let user = {
//   name: "John",
//   age: 30
// };
//
// console.log(Object.keys(user)); // [ 'name', 'age' ]
// console.log(Object.values(user)); // [ 'John', 30 ]
// console.log(Object.entries(user)); // [ [ 'name', 'John' ], [ 'age', 30 ] ]
//
//
// for (let value of Object.values(user)) {
//   console.log(value);
// }

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4
// };
//
// let doublePrices = Object.fromEntries(
//   Object.entries(prices).map(([key, value]) => [key, value * 2])
// );

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250
// };
//
//
// function sumSalaries(obj) {
//   let sum = 0;
//   for (let value of Object.values(obj)) {
//     sum += value;
//   }
//   return sum;
//
//   // return Object.values(obj).reduce((total, currentValue) => total + currentValue);
// }
// console.log(sumSalaries(salaries));
// let user = {
//   name: "John",
//   age: 30
// };
//
// function count(obj) {
//   return Object.values(obj).length;
// }
//
// console.log(count(user)); // 2


