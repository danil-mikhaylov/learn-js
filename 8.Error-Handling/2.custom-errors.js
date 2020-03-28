class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError"; // (2)
  }
}

function test() {
  throw new ValidationError("Упс!");
}

try {
  test();
} catch (err) {
  console.log(err.message); // Упс!
  console.log(err.name); // ValidationError
  console.log(err.stack); // список вложенных вызовов с номерами строк для каждого
}

// Попробуем использовать его в readUser(json):
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Использование
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Использование
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError("Нет поля: age");
  }
  if (!user.name) {
    throw new ValidationError("Нет поля: name");
  }

  return user;
}

// Рабочий пример с try..catch

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Некорректные данные: " + err.message); // Некорректные данные: Нет поля: name
  }
  // вместо else if (err.name == "SyntaxError")
  else if (err instanceof SyntaxError) {
    // (*)
    console.log("JSON Ошибка Синтаксиса: " + err.message);
  } else {
    throw err; // неизвестная ошибка, пробросить исключение (**)
  }
}

// Сделаем класс PropertyRequiredError. Он будет нести дополнительную информацию о свойстве, которое отсутствует.
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("Нет свойства: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}

// Применение
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
  if (!user.name) {
    throw new PropertyRequiredError("name");
  }

  return user;
}

// Рабочий пример с try..catch

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Неверные данные: " + err.message); // Неверные данные: Нет свойства: name
    console.log(err.name); // PropertyRequiredError
    console.log(err.property); // name
  } else if (err instanceof SyntaxError) {
    console.log("Ошибка синтаксиса JSON: " + err.message);
  } else {
    throw err; // неизвестная ошибка, повторно выбросит исключение
  }
}

// Сделаем класс MyError, который будет делать this.name = this.constructor.name, чтобы каждый раз не писать:
// this.name = <Имя класса>

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ValidationError extends MyError {}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("Нет свойства: " + property);
    this.property = property;
  }
}

// name корректное
console.log(new PropertyRequiredError("field").name); // PropertyRequiredError

class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = "ReadError";
  }
}

class ValidationError extends Error {
  /*...*/
}
class PropertyRequiredError extends ValidationError {
  /* ... */
}

function validateUser(user) {
  if (!user.age) {
    throw new PropertyRequiredError("age");
  }

  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
}

function readUser(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError("Синтаксическая ошибка", err);
    } else {
      throw err;
    }
  }

  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError("Ошибка валидации", err);
    } else {
      throw err;
    }
  }
}

try {
  readUser("{bad json}");
} catch (e) {
  if (e instanceof ReadError) {
    console.log(e);
    // Исходная ошибка: SyntaxError:Unexpected token b in JSON at position 1
    console.log("Исходная ошибка: " + e.cause);
  } else {
    throw e;
  }
}

/** Итого:
 * Мы можем наследовать от Error для наших классов ошибок, но помнить про name и вызывание super
 * Для проверки типа ошибок используем instanceof, но когда нет простой возможности получить класс, используем name
 * Обёртывание исключений распространено. Функция ловит низкоуровневые исключения и создаёт "высокоуровненевое"
 вместо разных низкоуровневых. Иногда низкоуровневые исключения становятся свойствами этого объекта, как
 err.cause в примерах выше, но это необязательно.
 */
