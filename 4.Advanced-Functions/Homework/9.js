// Создаём функцию-обёртку-шпион, которая сохраняет в calls все вызовы work
function work(a, b) {
  console.log(a + b);
}

function spy(func) { // Принимает в качестве аргумента функцию
  function wrapper(...args) { // ...args -- наши a и b
    wrapper.calls.push(args); // Запихиваем аргументы в wrapper.calls
    return func.apply(this, arguments); // Вызываем исходную функцию
  }

  wrapper.calls = [];

  return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let key of work.calls) {
  console.log(key);
}
// Создаём декоратор, который задерживает выполнение f(x)
function f(x) { // Какая-то функция
  console.log(x); // Какое-то тело функции
}

function delay(func, ms) { // Наш декоратор, который принимает функцию и кол-во ms задержки
  return function (test) { // test -- аргумент f(x)
    setTimeout(() => { // Устанавливаем таймаут
      func.apply(this, arguments) // А в нём вызываем ту самую f(x)
    }, ms) // На кол-во ms
  }
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1000);

f1000("test");

function debounce(func, ms) {
  let isCoolDown = false;

  if (isCoolDown) return;

  return function() {
    func.apply(this, arguments);

    isCoolDown = true;

    setTimeout(() => (isCoolDown = true), ms);
  };
}

let f = debounce(console.log, 1000);

f(1); // 1
f(2); // 2