function sayHi() {
  console.log("Hi");
}

console.log(sayHi.name); // sayHi

// And the following example works as well:
let sayHi = function() {
  console.log("Hi");
};

console.log(sayHi.name); // sayHi (есть имя!)

function f(sayHi = function() {}) {
  console.log(sayHi.name); // sayHi (работает!)
}

f();

// The methods of the object also have names:
let user = {
  sayHi() {
    console.log("Hi");
  },
  sayBye: function() {
    console.log("Bye");
  }
};

console.log(user.sayHi.name); // sayHi
console.log(user.sayBye.name); // sayBye

// If it's impossible to get the name, the name is an empty string:
let arr = [function() {}];

console.log(arr[0].name); // ''

// "length" property
function f1(a) {}
function f2(a, b) {}
function f3(a, b, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(f3.length); // 2

function ask(question, ...handlers) {
  let isYes = confirm(question);
  for (let handler of handlers) {
    if (handler.length === 0) {
      if (isYes) {
        handler();
      } else {
        handler(isYes);
      }
    }
  }
}

// for positive responses, both types of handlers are called
// for negative - only the second type
ask(
  "Вопрос?",
  () => console.log("Вы ответили да"),
  result => console.log(result)
);

// User properties

function sayHi() {
  console.log("Hi");
  sayHi.counter++;
}

sayHi.counter = 0;

sayHi();
sayHi();
console.log(`Was called ${sayHi.counter} times`);

/*
  Property is not a variable!
  The property of the function, assigned as sayHi.counter = 0, does not declare the local variable counter inside it.
  In other words, the counter property and let counter variable are two independent things.

  We can use the function as an object, store properties in it, but they do not affect its execution in any way.
  Variables are not properties of a function, and vice versa (наоборот). These are two parallel worlds.
*/

// Rewriting a function makeCounter() from the "closure" chapter:
function makeCounter() {
  // instead of
  // let count = 0;

  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

// The count property is now stored directly in the function, and not in its external lexical environment.

/*
  The main difference is that if the count value lives in an external variable, then it is not available for external code.
  Only nested (вложенные) functions can change it. And if it is assigned (присовено) as a property of a function,
  then we can get it:
*/

function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  return counter;
}

let counter = makeCounter();

counter.count = 10;
console.log(counter.count); // 10

// Therefore, the choice of implementation (реализации) depends on our goals (целей).

// Named Function Expression

// For example, lets declare Function Expression:
let sayHi = function(who) {
  console.log(`Hello, ${who}`);
};

// And give him a name:
let sayHi = function func(who) {
  console.log(`Hello, ${who}`);
};

// First, function is still Function Expression
// The function is still available as sayHi():
let sayHi = function func(who) {
  console.log(`Hello, ${who}`);
};

sayHi("John"); // Hello, John

/*
  What the "func" was created for?
  1. It allows a function to refer itself.
  2. It is not available outside the function.
*/

let sayHi = function func(who) {
  if (who) {
    console.log(`Hello, ${who}.`);
  } else {
    func("Guest"); // Uses func to call itself again
  }
};

sayHi("Mister"); // Hello, Mister.
sayHi(); // Hello, Guest.

// And so it will not work:
func(); // Error, func is not defined (is not available outside the function)

// We can just use sayHi() for nested call:
let sayHi = function(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    sayHi("Guest");
  }
};

// But the sayHi value can be changed. The function can be assigned to another variable,
// and then the code will start to generate errors:
let sayHi = function(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    sayHi("Guest"); // Ошибка: sayHi не является функцией
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Ошибка, вложенный вызов sayHi больше не работает!

// This happens because the function takes sayHi from the external lexical environment.
// Since the local variable sayHi is missing, an external one is used.
// And at the time of the call, the outer sayHi is null.

// An optional name solves such problems:
let sayHi = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // Теперь всё в порядке
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest (вложенный вызов работает)

// Homework

function makeCounter() {
  let count = 0;
  function counter() {
    return count++;
  }
  counter.set = value => (count = value);
  counter.decrease = () => count--;
  return counter;
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
counter.set(20);
console.log(counter()); // 20
counter.decrease();
console.log(counter()); // 20

// Did not get:
function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

console.log(sum(1)(2)(3)(4)(5));
