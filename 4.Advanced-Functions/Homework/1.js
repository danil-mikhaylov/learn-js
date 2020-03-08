console.time("form");
function sumTo(number) {
  return (number * (number + 1)) / 2;
}
console.log(sumTo(10000)); // 50005000
console.timeEnd("form"); // form: 4.141ms

console.time("cycle");
function sumToCycle(number) {
  let sum = 0;
  for (let i = number; i > 0; i--) {
    sum += i;
  }
  return sum;
}
console.log(sumToCycle(10000)); // 50005000
console.timeEnd("cycle"); // cycle: 0.225ms

console.time("recursive");
function sumToRecursive(number) {
  return number === 1 ? number : number + sumToRecursive(number - 1);
}
console.log(sumToRecursive(10000)); // 50005000
console.timeEnd("recursive"); // recursive: 0.913m

function factorial(number) {
  let res = number;
  for (let i = number - 1; i > 0; i--) {
    res = res * i;
  }
  return res;
}

function factorial(number) {
  return number ? number * factorial(number - 1) : 1;
  return number === 1 ? number : number * factorial(number - 1);
}

console.log(factorial(5)); // 120

function fib(number) {
  let a = 1;
  let b = 2;
  let counter = 0;
  for (let i = 3; i <= number; i++) {
    let c = a + b;
    a = b;
    b = c;
    counter += 1;
  }
  return a;
}
console.log(fib(3)); // 2, counter = 1
console.log(fib(7)); // 13, counter = 5

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

printList(list);

function printList(list) {
  console.log(list.value);
  if (list.next) {
    return printList(list.next);
  }
}
printList(list);

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

let arr = [];
function printReverseList(list) {
  arr.push(list.value);
  if (list.next) {
    return printReverseList(list.next);
  }
  arr.reverse();
  for (let number of arr) {
    console.log(number);
  }
}
function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
}
printReverseList(list);