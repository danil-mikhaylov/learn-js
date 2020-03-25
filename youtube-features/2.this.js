function hello() {
  console.log("Hello, ", this);
}

const person = {
  name: "Meow",
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function (job) {
    console.group(`${this.name} info:`);
    console.log(`Name is   ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Job is ${phone}`);
    console.groupEnd();
  },
};

const lena = {
  name: "Elena",
  age: 23,
};

const fnLenaInfoLog = person.logInfo.bind(lena);
fnLenaInfoLog("FrontEnd", "8-999-123-12-23");

