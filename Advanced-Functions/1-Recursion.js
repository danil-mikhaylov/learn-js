// function pow(a, b) {
//   let result = 1;
//   for (let i = 0; i < b; i++) {
//     result *= a;
//   }
//   return result;
// }
// console.log(pow(2, 3)); // 8

// function pow(x, n) {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }
// console.log(pow(2, 3)); // 8

// function pow(x, n) {
//   return n === 1 ? x : x * pow(x, n - 1);
// }
// console.log(pow(2, 3)); // 8

// let company = {
//   // тот же самый объект, сжатый для краткости
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 600 }
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 }
//     ],
//     internals: [{ name: "Jack", salary: 1300 }]
//   }
// };
//
// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((total, current) => total + current.salary, 0);
//   } else {
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep);
//     }
//     return sum;
//   }
// }
// console.log(sumSalaries(company));

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4
//       }
//     }
//   }
// };
// let second_list = {value: 1};
// second_list.next = {value: 2};
// second_list.next.next = {value: 3};
// second_list.next.next.next = {value: 4};
//
//
// console.log(list); // { value: 1, next: { value: 2, next: { value: 3, next: [Object] } } }
// console.log(second_list); // { value: 1, next: { value: 2, next: { value: 3, next: [Object] } } }
//
// list = {value: 0, next: list};
// console.log(list); // { value: 1, next: { value: 2, next: { value: 3, next: [Object] } } }

// Homework

function sumToCycle(number) {
  let sum = 0;
  for (let i = number; i > 0; i--) {
    sum += i;
  }
  return sum;
}

function sumToRecursive(number) {
  return number === 1 ? number : number + sumToRecursive(number - 1);
}

function sumTo(number) {
  return number * (number + 1) / 2
}

console.log(sumToCycle(5)); // 15
console.log(sumToRecursive(100000)); // 15
console.log(sumTo(5)); // 15

function factorial(number) {
  let res =  number;
  for (let i = number - 1; i > 0; i--) {
    res = res * i;
  }
  return res;
}

function factorial(number) {
return number ? number * factorial(number - 1) : 1;
return (number === 1) ? number : number * factorial(number - 1);
}

console.log(factorial(5)); // 120

function fib(number) {
  let a = 1;
  let b = 2;
  for (let i = 3; i <= number; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return a;
}
console.log(fib(3)); // 2
console.log(fib(193372)); // 13

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
    return printReverseList(list.next)
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