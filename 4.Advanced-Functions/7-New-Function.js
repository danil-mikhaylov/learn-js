// General syntax:
// let func = new Function([arg1, arg2, ...argN], functionBody);

let sum = new Function("a", "b", "return a + b");

console.log(sum(1, 2)); // 3

// Here's an only body function:
let sayHi = new Function('console.log("Hello")');

sayHi(); // Hello

// new Function() allows you to turn any string into a function:
// let str = ...the code recieved from the server dynamically...

let func = new Function(str);
func();

// The function receives the global lexical environment, therefore such a function has access only to global variables.
function getFunc() {
  let value = "test";

  let func = new Function("console.log(value)");

  return func;
}

getFunc()(); // Error: value is not defined

// Here's the usual function declaration:
function getFunc() {
  let value = "test";

  let func = function() {
    console.log(value);
  };

  return func;
}

getFunc()(); // "test", from the lexical environment of the getFunc() function

// Total:

// These three declarations are equivalent:
new Function("a", "b", "return a + b"); // standard syntax
new Function("a,b", "return a + b"); // через запятую на одной строке
new Function("a , b", "return a + b"); // через запятую с пробелами в одной строке

/*
  Function declared through new Function() have [[Environment]] referring to the global lexical environment,
  and not to the parent.
  Therefore, they cannot use external local variables. But this is very good, because it insures (страхует)
  us against mistakes.
  The parameters passed explicitly (явно) are a much better architectural solution
  that does not cause problems with minificators
*/
