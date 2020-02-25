// Создать скрипт, который выводит сумму двуд введённых чисел
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");
console.log(a + b);

// Случайное число от min до max
function random(min, max) {
  return min + Math.random() * (max - min);
  // Если Math.random() умножить на max - min, получится интервал от 0 до max
  // Если прибавить min, то получится то, что нам и нужно
}

function randomInteger() {
  // Проблема в том, что
  /*
  число от 1    ... до 1.4999999999  округлится до 1
  число от 1.5  ... до 2.4999999999  округлится до 2
  число от 2.5  ... до 2.9999999999  округлится до 3
   */
  // Чтобы это исправить, нам нужно
  // Получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand);
}

