function pow(a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
}
console.log(pow(2, 3)); // 8

function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
console.log(pow(2, 3)); // 8

/*
  1. pow(2, 4) = 2 * pow(2, 3)
  2. pow(2, 3) = 2 * pow(2, 2)
  3. pow(2, 2) = 2 * pow(2, 1)
  4. pow(2, 1) = 2
*/

function pow(x, n) {
  return n === 1 ? x : x * pow(x, n - 1);
}
console.log(pow(2, 3)); // 8

let company = {
  // тот же самый объект, сжатый для краткости
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 }
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 }
    ],
    internals: [{ name: "Jack", salary: 1300 }]
  }
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((total, current) => total + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}
console.log(sumSalaries(company));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4
      }
    }
  }
};
let second_list = { value: 1 };
second_list.next = { value: 2 };
second_list.next.next = { value: 3 };
second_list.next.next.next = { value: 4 };

console.log(list); // { value: 1, next: { value: 2, next: { value: 3, next: [Object] } } }
console.log(second_list); // { value: 1, next: { value: 2, next: { value: 3, next: [Object] } } }

list = { value: 0, next: list };
console.log(list); // { value: 1, next: { value: 2, next: { value: 3, next: [Object] } } }