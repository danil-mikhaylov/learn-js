// Изменить какой-то код
function makeCounter() { // Функция, которая создаёт счётчик
  let count = 0; // Локальная переменная count
  function counter() {
    return count++;
  }
  counter.set = value => (count = value); // А эти методы записано прямо в counter
  counter.decrease = () => count--;
  return counter;
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
counter.set(20);
console.log(counter()); // 20
counter.decrease();
console.log(counter()); // 20

// Создаём функцию, которая должна работать так: sum(1)(2)...(n) = 1 + 2 + ... + n
function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

console.log(sum(1)(2)(3)(4)(5));