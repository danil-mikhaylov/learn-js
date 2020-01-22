// function sumTo(number) {
//   return (number === 1) ? number : number + sumTo(number - 1);
// }
//
// console.log(sumTo(1)); // 1
// console.log(sumTo(2)); // 3
// console.log(sumTo(3)); // 6
// console.log(sumTo(4)); // 10
// console.log(sumTo(100)); // 5050

// function factorial(number) {
//   return (number === 1) ? number : number * factorial(number - 1);
// }
//
// console.log(factorial(5)); // 120

// function fib(number) {
//   let a = 1;
//   let b = 2;
//   for (let i = 3; i <= number; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return a;
// }
// console.log(fib(77)); // 2
//
// function makeFibArr(number) {
//   let arr = [];
//   for (let i = 0; i < number; i++) {
//     arr.push(fib(i));
//   }
//   return arr;
// }
//
// console.log(makeFibArr(25));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// function printList(list) {
//   console.log(list.value);
//   if (list.next) {
//     printList(list.next);
//   }
// }
// printList(list);

// function printListReversed(list) {
//   if (list.next) {
//     printListReversed(list.next);
//   }
//   console.log(list.value);
// }
// printListReversed(list);

