function hello() {
  console.log("Hello", this);
}

let John;
John = {
  name: "John",
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(this),
  logInfo: function(job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  }
};

const lena = {
  name: "Elena",
  age: 23
};

// John.logInfo.bind(lena)();
// const fnLenaInfoLog = John.logInfo.bind(lena, 'Frontend', '8-999-123-12-23')();
// John.logInfo.call(lena, 'Frontend', '8-999-123-12-23');
// John.logInfo.apply(lena, ["Frontend", "8-999-123-12-23"]);

// ========================

const array = [1, 2, 3, 4, 5];

// function multBy(n, array) {
//   return array.map(number => number * n);
// }
//
// console.log(multBy(2, array));

Array.prototype.multBy = function(n) {
  return this.map(curr => curr  * n);
};

console.log(array.multBy(2));