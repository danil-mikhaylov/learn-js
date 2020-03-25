// Добавить к функциям метод "f.defer(ms)", который вызывает функции через ms
function f() {
  console.log("Hello!");
}

Function.prototype.defer = function (ms) {
  // Расширяем прототип всех функций
  // Просто откладываем выполнение this (т.е. нашей функции) на ms
  setTimeout(this, ms);
};

f.defer(1000); // "Hello!" через пять секунд

// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку,
// откладывающую вызов функции на ms миллисекунд.
function f(a, b) {
  console.log(a + b);
}

Function.prototype.defer = function (ms) {
  // Создаём расширение для всех функций
  return function (...args) {
    // Возвращаем обёртку
    // Которая откладываем f.apply на ms
    setTimeout(() => f.apply(this, args), ms);
    // f.apply(this, args) -- Выполнение функции с нужными нам аргументами
  };
};

f.defer(1000)(1, 2); // Выведет 3 через 1 секунду
