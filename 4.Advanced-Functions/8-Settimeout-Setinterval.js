// setTimeout() to call a function once
// setInterval() to call a function regularly

// The following code will call sayHi function after 1000ms (1 sec):
function sayHi() {
  console.log("Hi");
}

setTimeout(sayHi, 1000);

// setTimeout

// With arguments:
function sayHi(phrase, who) {
  console.log(phrase + ", " + who);
}

setTimeout(sayHi, 1000, "Hello", "John");

// If the first argument is a string, then JS will create a function from it:
setTimeout("console.log('Hi')", 1000); // This should work, but this does not

// But using strings is not recommended. Use functions instead. For example, like this:
setTimeout(() => console.log("Hi"), 1000); // Hi

// Be attentive:
// WRONG:
setTimeout(sayHi(), 1000);
// The function is calling instantly, and result sends to setTimeout(), but here result is undefined

// Cancel using clearTimeout

// The setTimeout call returns a "timer identifier" timerID, which can be used to cancel further (дальнейшего) execution
// Syntax to cancel is:
let timerId = setTimeout(() => {}, 1000);
clearTimeout(timerId);

let timerId = setTimeout(() => console.log("nothing happens"), 1000);
console.log(timerId); // Timeout {...}

clearTimeout(timerId);
console.log(timerId); // the same identifier (not null after cancellation)

// setInterval

// retry every 2 seconds
let timerId = setInterval(() => console.log("tick"), 1000);

// stop after 5 seconds
setTimeout(() => {
  clearInterval(timerId);
}, 5000);

// Recursive setTimeout

/** instead of:
  let timerId = setInterval(() => console.log('tick'), 2000);
*/

let timerId = setTimeout(function tick() {
  console.log("tick");
  timerId = setTimeout(tick, 2000);
}, 2000);

/* For example, you need to write a service that sends a request to receive data to the server every 5 seconds,
  but if the server is overloaded, you need to increase the request interval to 10, 20, 40 second...
  Here is the pseudocode:
* */
let delay = 5000;

let timerId = setTimeout(function request() {
// ...отправить запрос...

  if (ошибка запроса из-за перегрузки сервера) {
    // увеличить интервал для следующего запроса
    delay *= 2;
  }

  timerId = setTimeout(request, delay);

}, delay);

// Here real delay equals to 100ms - function execution time
let i = 1;
setInterval(function() {
  console.log(i);
}, 100);

// Here real delay equals to 100ms
let i = 1;
setTimeout(function run() {
  console.log(i);
  setTimeout(run, 100);
}, 100);

setTimeout(() => console.log("world"));
console.log("Hello");
// Hello
// world

let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start); // запоминаем задержку от предыдущего вызова

  if (start + 100 < Date.now()) console.log(times);
  // показываем задержку через 100 мс
  else setTimeout(run); // если нужно ещё запланировать
});

// пример вывода:
// 1,1,1,1,9,15,20,24,30,35,40,45,50,55,59,64,70,75,80,85,90,95,100

// Homework

function printNumbers(from, to) {
  let result = from;
  let timerId = setInterval(() => {
    console.log(result);
    if (result === to) {
      clearInterval(timerId);
    } else {
      result++;
    }
  }, 1000);
}

function printNumbers(from, to) {
  let result = from;
  let timerId = setTimeout(function run() {
    console.log(result);
    if (result < to) {
      setTimeout(run, 1000);
    }
    result++;
  }, 1000);
}

printNumbers(1, 10);
