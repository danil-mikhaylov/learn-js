// Вычисляем сумму чисел до данного
function sumTo(number) {
  // Здесь используем формулу
  return (number * (number + 1)) / 2;
}
console.log(sumTo(10000)); // 50005000

function sumToCycle(number) {
  let sum = 0;
  for (let i = number; i > 0; i--) {
    sum += i;
  }
  return sum;
}
console.log(sumToCycle(10000)); // 50005000

function sumToRecursive(number) {
  // База рекурсии -- number === 1 ? number;
  // Когда дойдёт до того, что number === 1, начнут возвращаться все значения
  return number === 1 ? number : number + sumToRecursive(number - 1);
}
console.log(sumToRecursive(10000)); // 50005000

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
  let a = 1; // Первое число
  let b = 2; // Второе число
  for (let i = 3; i <= number; i++) { // Сделает (number - 2) раз
    let c = a + b; // Их сумма
    a = b;
    b = c;
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

// function printList(list) {
//   while (list) {
//     console.log(list.value);
//     list = list.next;
//   }
// }
//
// printList(list);

function printList(list) {
  console.log(list.value); // Сначала выводим текущее значение
  if (list.next) { // Если можем идти дальше по списку
    return printList(list.next); // То вызываем функцию для следующего подсписка
  }
  // В итоге она выводит значение следующего подсписка, идёт к следующему-следующему...
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
//
// let arr = [];
// function printReverseList(list) {
//   arr.push(list.value);
//   if (list.next) {
//     return printReverseList(list.next);
//   }
//   arr.reverse();
//   for (let number of arr) {
//     console.log(number);
//   }
// }
function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value); // Здесь наоборот: выводим в конце
}
printReverseList(list);