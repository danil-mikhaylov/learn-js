// Синтаксис «try…catch»:
try {
  // код...
} catch (err) {
  // обработка ошибки
}

// Пример без ошибок:
try {
  console.log("Начало блока try"); // (1) <--

  // ...код без ошибок

  console.log("Конец блока try"); // (2) <--
} catch (err) {
  console.log("Catch игнорируется, так как нет ошибок"); // (3)
}

try {
  console.log("Начало блока try");

  lalala; // Ошибка: переменная неопределена

  console.log("Конец блока try никогда не выполнится");
} catch (e) {
  console.log("Возникла ошибка!");
}

// Ошибки синтаксиса идут нафиг, код не может прочитать, поэтому и обработать тоже не может:
try {
  {{{{{{{{{{{{
} catch(e) {
  console.log("Движок не может понять этот код, он некорректен");
}

// Исключение: асинхронный код:
try {
  setTimeout(function () {
    noSuchVariable; // Скрипт упадёт тут
  }, 1000);
} catch (e) {
  console.log("Не сработает");
}

// Исправляем:
setTimeout(function () {
  try {
    noSuchVariable;
  } catch (e) {
    console.log("Ошибка поймана!");
  }
});

// Объект ошибки:
try {
  lalala;
} catch (e) {
  console.log(e.name); // ReferenceError
  console.log(e.message); // lalala is not defined
  console.log(e.stack); // ReferenceError: lalala is not defined at (...стек вызовов)

  // Можем также просто вывести ошибку целиком
  // Ошибка приводится к строке вида "name: message"
  console.log(e); // ReferenceError: lalala is not defined
}

// Если нам не нужны детали ошибки, мы можем её пропустить:
try {
  // ...
} catch {
  //  <-- без (err)
  // ...
}

// Реальные пример: допустим, неправильный JSON:
let json = "{ некорректный JSON }";

try {
  let user = JSON.parse(json);
  console.log(user.name);
} catch (e) {
  // ...выполнение прыгает сюда
  console.log("Извините, в данных ошибка, мы попробуем получить их ещё раз.");
  console.log(e.name);
  console.log(e.message);
}

// Генерация собственных ошибок
// Допустим, есть верные JSON, но в нём нет каких-то данных:
let json = '{ "age": 30 }'; // данные неполны

try {
  let user = JSON.parse(json); // <-- выполнится без ошибок
  console.log(user.name); // нет свойства name! ; undefined
} catch (e) {
  console.log("не выполнится");
}

// Объект ошибки (реальный):
let error = new Error(message);
// или
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...

let error = new Error(" Ого, ошибка! o_O");

console.log(error.name); // Error
console.log(error.message); //  Ого, ошибка! o_O

let json = '{ "age": 30 }'; // данные неполны

try {
  let user = JSON.parse(json); // <-- выполнится без ошибок

  if (!user.name) throw new SyntaxError("Данные неполны: нет имени");

  console.log(user.name);
} catch (e) {
  console.log("JSON Error: " + e.message); // // JSON Error: Данные неполны: нет имени
}

// Что делать, когда ошибка не та (допустим, не JSON):
let json = '{ "age": 30 }'; // данные неполны

try {
  user = JSON.parse(json); // <-- забыл добавить "let" перед user

  // ...
} catch (err) {
  console.log("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
  // (не JSON ошибка на самом деле)
}

/** Проброс исключения:
 * 1. Блок catch получает все ошибки.
 * 2. В блоке catch(err) {...} мы анализируем объект ошибки err.
 * 3. Если мы не знаем как её обработать, тогда делаем throw err.
 */

// Здесь мы используем проброс исключения, catch обрабатывает только syntaxError:
let json = '{ "age": 30 }'; // данные неполны
try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Данные неполны: нет имени");
  }

  blabla(); // неожиданная ошибка

  console.log(user.name);
} catch (e) {
  if (e.name == "SyntaxError") {
    console.log("JSON Error: " + e.message);
  } else {
    throw e; // проброс (*)
  }
}

// Два уровня try & catch для разных ошибок:
function readData() {
  let json = '{ "age": 30 }';

  try {
    // ...
    blabla(); // ошибка!
  } catch (e) {
    // ...
    if (e.name != "SyntaxError") {
      throw e; // проброс исключения (не знаю как это обработать)
    }
  }
}

try {
  readData();
} catch (e) {
  console.log("Внешний catch поймал: " + e); // поймал!
}

// Когда начали что-то делать и хотим закончить вне зависимости от ошибки, используем finally:
let num = +prompt("Введите положительное целое число?", 35);

let diff, result; // Переменные не являются локальными. Если объявить в try/catch, то будут недоступны извне

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Должно быть целое неотрицательное число");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (e) {
  result = 0;
} finally {
  // Выполняется ВСЕГДА!
  diff = Date.now() - start;
}

console.log(result || "возникла ошибка");

console.log(`Выполнение заняло ${diff}ms`);

// try..finally:
// когда не хотим здесь обрабатывать ошибки (пусть выпадут), но хотим быть уверены, что начатые процессы завершились:
function func() {
  // Начать делать что-то
  try {
    // ...
  } finally {
    // Завершить это, даже если всё упадёт
  }
}

// Итого (синтаксис):
try {
  // исполняем код
} catch (err) {
  // если случилась ошибка, прыгаем сюда
  // err - это объект ошибки
} finally {
  // выполняется всегда после try/catch
}

/**
  Могут бысть кострукции try..catch и try..finally
  Объект ошибок содержит следующие свойства:
 * message — понятное человеку сообщение
 * name — строка с именем ошибки (имя конструктора ошибки)
 * stack (нестандартное, но хорошо поддерживается) — стек на момент ошибки.
  Если объект ошибки не нужен, то используем catch {} вместо catch(e) {}
  Мы можем использовать собственные ошибки, для этого нужен throw, а аргумент обычно — ошибка.
  Проброс исключения — важный приём обработки ошибки. catch обычно ждёт определённый тип ошибок, поэтому
  он должен пробрасывать ошибки, о которых он не знает.

 (Даже если у нас нет try..catch, большинство сред позволяют настроить «глобальный» обработчик ошибок,
 чтобы ловить ошибки, которые «выпадают наружу». В браузере это window.onerror)
 */
