// function slow(x) {
//   // Here are hard computations
//   console.log(`Called with ${x}`);
//   return x;
// }
//
// function cachingDecorator(func) {
//   let cache = new Map();
//
//   return function (x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//
//     let result = func(x);
//
//     cache.set(x, result);
//     return result;
//   }
// }
//
// slow = cachingDecorator(slow);
//
// alert( slow(1) ); // slow(1) кешируем
// alert( "Again: " + slow(1) ); // возвращаем из кеша
//
// alert( slow(2) ); // slow(2) кешируем
// alert( "Again: " + slow(2) ); // возвращаем из кеша

// // This decorator does not work with object methods
// let worker = {
//   someMethod() {
//     return 1;
//   },
//
//   slow(x) {
//     console.log(`Called with ${x}`);
//     return x * this.someMethod(); // (*)
//   }
// };
//
// function cachingDecorator(func) {
//   let cache = new Map();
//   return function(x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func(x); // (**)
//     cache.set(x, result);
//     return result;
//   };
// }
//
// console.log(worker.slow(1)); // 1, original method works
//
// worker.slow = cachingDecorator(worker.slow); // now let's make it cashing
//
// console.log(worker.slow(2)); // Oh! Error: cannot read property 'someMethod' from 'undefined'
// // this problems

// // func.call syntax:
// func.call(context, arg1, arg2, ...argN);

func(1, 2, 3);
func.call(obj, 1, 2, 3);
