// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}`);
//   }
// };

// setTimeout(user.sayHi, 100); // Hello, undefined
// setTimeout(() => user.sayHi(), 100); // Hello, John

// user.sayHi = user.sayHi.bind(user);
// let timeout = setTimeout(user.sayHi, 100);

// let user = {
//   firstName: "John",
// };
//
// function func() {
//   console.log(this.firstName)
// }
//
// func = func.bind(user);
//
// func(); // John

// let user = {
//   firstName: "John",
// };
//
// function func(phrase) {
//   console.log(phrase + ', ' + this.firstName);
// }
//
// let funcUser = func.bind(user);
// funcUser("Hello"); // Hello, John

// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   }
// };
//
// let sayHi = user.sayHi.bind(user);
// sayHi(); // Hello, John!
//
// setTimeout(sayHi, 100); // Hello, John!

let user = {
  firstName: "John",
  say(phrase) {
    console.log(`${phrase}, ${this.firstName}`);
  }
};

let say = user.say.bind(user);

say("Hello"); // Hello, John
say("Bye"); // Bye, John
