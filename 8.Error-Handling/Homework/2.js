/** Наследование от SyntaxError
 * Создайте класс FormatError, который наследует от встроенного класса SyntaxError.
 * Класс должен поддерживать свойства message, name и stack.
 */

class FormatError extends SyntaxError { // Format Error наследует от SyntaxError
  constructor(message) { //
    super(message); // message передаётся в конструтор SyntaxError
    this.name = "FormatError"; // Имя ошибки
    this.stack = "<stack>"; // Стэк вызовов
  }
}

let err = new FormatError("ошибка форматирования"); // Создаём данную ошибку

console.log(err.message); // ошибка форматирования
console.log(err.name); // FormatError
console.log(err.stack); // <stack>

console.log(err instanceof FormatError); // true
console.log(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)
