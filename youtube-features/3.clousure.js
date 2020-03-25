// function CreateCalcFunction(n) {
//   return function () {
//     console.log(1000 * n)
//   }
// }
//
// const calc = CreateCalcFunction(42);
// calc(); // 42000

// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   }
// }
//
// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);
//
// console.log(addOne(10)); // 11
// console.log(addOne(41)); // 42
//
// console.log(addTen(10)); // 20
// console.log(addTen(41)); // 51

// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`
//   }
// }
//
// const comUrl = urlGenerator("com");
// const ruUrl = urlGenerator('ru');
//
// console.log(comUrl("google")); // https://google.com
// console.log(comUrl("netflix")); // https://netflix.com
//
// console.log(ruUrl("yandex")); // https://yandex.ru
// console.log(ruUrl("vkontakte")); // https://vkontakte.ru

function bind1(context, fn) {
  return function (...args) {
    fn.apply(context, args)
  }
}
function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: "Maxim", age: 22, job: "Frontend"};
const person2 = {name: "Elena", age: 19, job: "SMM"};

bind1(person1, logPerson);
bind1(person2, logPerson);
