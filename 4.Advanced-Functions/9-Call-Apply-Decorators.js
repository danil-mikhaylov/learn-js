function slow(x) {
  // Here are hard computations
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    let result = func(x);

    cache.set(x, result);
    return result;
  };
}

slow = cachingDecorator(slow);

console.log(slow(1)); // slow(1) кешируем
console.log("Again: " + slow(1)); // возвращаем из кеша

console.log(slow(2)); // slow(2) кешируем
console.log("Again: " + slow(2)); // возвращаем из кеша

// This decorator does not work with object methods
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    console.log(`Called with ${x}`);
    return x * this.someMethod(); // (*)
  }
};

function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x); // (**)
    cache.set(x, result);
    return result;
  };
}

console.log(worker.slow(1)); // 1, original method works

worker.slow = cachingDecorator(worker.slow); // now let's make it cashing

console.log(worker.slow(2)); // Oh! Error: cannot read property 'someMethod' from 'undefined'
// this problems

// func.call syntax:
func.call(context, arg1, arg2, ...argN);

func(1, 2, 3);
func.call(obj, 1, 2, 3); // this = obj

// My own test
function sayHi() {
  console.log(this.message);
}

let obj = {
  message: "Hello!"
};

sayHi.call(obj);

function sayHi() {
  console.log(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// Use 'call' to pass various (различные) object as 'this'
sayHi.call(user); // John
sayHi.call(admin); // Admin

// Here we use call to call say with the given context and phrase:
function say(phrase) {
  console.log(this.name + ": " + phrase);
}

let user = { name: "John" };

// 'user' become 'this' and 'hello' is the first argument
say.call(user, "Hello"); // John: Hello

let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    console.log(`Called with ${x}`);
    return x * this.someMethod();
  }
};

function catchingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x);
    cache.set(x, result);
    return result;
  };
}

worker.slow = catchingDecorator(worker.slow); // now lets make it caching

console.log(worker.slow(2)); // works
console.log(worker.slow(2)); // works as well, but now caching

function catchingDecorator(func, hash) {
  // 2 args, func -- worker.slow, hash -- hash();
  let cache = new Map(); // create a new variable that is called cache
  return function() {
    // and return a function
    let key = hash(arguments); // create a special key using hash()
    console.log(key); // '3, 5'
    if (cache.has(key)) {
      // if cache has a string '3, 5',
      return cache.get(key); // then return a value of key
    }

    let result = func.call(this, ...arguments); // arguments that are collected by catchingDecorator

    cache.set(key, result); // remember the key

    return result; // and return a result
  };
}

function hash(args) {
  return args[0] + ", " + args[1];
}

worker.slow = catchingDecorator(worker.slow, hash);

console.log(worker.slow(3, 5)); // работает
console.log("Again " + worker.slow(3, 5)); // аналогично (из кеша)

// func.apply

// func.call(this, ...arguments) = func.apply(this, arguments)

// Syntax func.apply:
// func.apply(context, args);

// func.call(context, ...args); // Array.isArray(args) = true;
// func.apply(context, args); // the same effect

// ... can use string
// apply wants to have only the pseudoarray

// Перенаправление вызова -- передача всех аргументов вместе с контекстом другой функции
// For example:
let wrapper = function() {
  return func.apply(this, arguments);
};

// lets improve hash function:
function hash(args) {
  return args[0] + args[1];
}

// Now it works only for 2 args (args[0] and args[1])
// What if we want to hash any count of arguments
// Probably, we can use join() method:
function hash(args) {
  args.join();
}

// But this does not work:
function hash() {
  console.log(arguments.join()); // Error: arguments.join is not a function
}

hash(1, 2);

// Nonetheless (тем не менее), there is the simplest way to use an array connection:
function hash() {
  console.log([].join.call(arguments)); // 1,2
}

hash(1, 2);

// Homework

function work(a, b) {
  console.log(a + b);
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }

  wrapper.calls = [];

  return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let key of work.calls) {
  console.log(key);
}

function f(x) {
  console.log(x);
}

function delay(func, ms) {
  return function (test) {
    setTimeout(() => {
      func.apply(this, arguments)
    }, ms)
  }
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1000);

f1000("test");

function debounce(func, ms) {
  let isCoolDown = false;

  if (isCoolDown) return;

  return function() {
    func.apply(this, arguments);

    isCoolDown = true;

    setTimeout(() => (isCoolDown = true), ms);
  };
}

let f = debounce(console.log, 1000);

f(1); // 1
f(2); // 2