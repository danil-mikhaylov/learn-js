// let name = "John";
// function sayHi(name) {
//   console.log("Hi, " + name);
// }
//
// name = "Pete";
//
// sayHi(name);

function makeWorker() {
  let name = "Pete";

  return function() {
    console.log(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)