let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}`);
  }
};

setTimeout(user.sayHi, 100); // Hello, undefined
setTimeout(() => user.sayHi(), 100); // Hello, John

user.sayHi = user.sayHi.bind(user);
let timeout = setTimeout(user.sayHi, 100);

let user = {
  firstName: "John",
};

function func() {
  console.log(this.firstName)
}

func = func.bind(user);

func(); // John

let user = {
  firstName: "John",
};

function func(phrase) {
  console.log(phrase + ', ' + this.firstName);
}

let funcUser = func.bind(user);
funcUser("Hello"); // Hello, John

let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

let sayHi = user.sayHi.bind(user);
sayHi(); // Hello, John!

setTimeout(sayHi, 100); // Hello, John!

let user = {
  firstName: "John",
  say(phrase) {
    console.log(`${phrase}, ${this.firstName}`);
  }
};

let say = user.say.bind(user);

say("Hello"); // Hello, John
say("Bye"); // Bye, John

// BindAll

for (let key in user) {
  if (typeof key != 'function') {
    continue;
  }
  user[key] = user[key].bind(user);
}

function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

console.log(mul(3)); // = mul(2, 3) = 6
console.log(mul(4)); // = mul(2, 4) = 8
console.log(mul(5)); // = mul(2, 5) = 10

function mul(a, b) {
  return a * b;
}

let triple = mul.bind(null, 3);

console.log(triple(3)); // = mul(3, 3) = 9
console.log(triple(4)); // = mul(3, 4) = 12
console.log(triple(5)); // = mul(3, 5) = 15

// Usage
let user = {
  firstName: "John",
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}`)
  }
};

function partial(func, ...argsBound) {
  return function (...args) {
    return func.call(this, ...argsBound, ...args)
  }
}

// add a partially applied method with a fixed time
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

user.sayNow("Hello");

function f() {
  console.log(this);
}

let user = {
  g: f.bind(null)
};

user.g();

function f() {
  console.log(this.name);
}

f = f.bind({name: "Вася"} ).bind( {name: "Петя"});

f(); // Вася

function sayHi() {
  console.log(this.name);
}

sayHi.test = 5;

let bound = sayHi.bind({name: "Вася"});

console.log(bound.test); // undefined

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password === "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

// user.loginOk = user.loginOk.bind(user);
// user.loginFail = user.loginFail.bind(user);
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    console.log( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));