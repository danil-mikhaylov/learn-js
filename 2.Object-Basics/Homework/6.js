// Создаём калькулятор, используя конструкток
function Calculator() {
  this.read = function() {
    // В новом объекте будет свойство read()
    this.a = +prompt("a?", 0); // Работать оно будет с его this.a
    this.b = +prompt("b?", 0); // И this.b
  };

  this.sum = function() {
    // Также будет у него свойство sum()
    return this.a + this.b; // Которое будет возвращать сумму this.a и this.b
  };

  this.mul = function() {
    // Также будет и свойство mul()
    return this.a * this.b; // Которое будет вовзаращать произведение this.a на this.b
  };
}

// Создаём Accumulator
function Accumulator(startingValue) {
  this.value = startingValue; // Записываем в this.value (Accumulator.value)

  this.read = function() {
    // Функция read()
    this.value += +prompt("Сколько нужно добавить?", 0);
    // Добавляет к value то, что мы ввели (единожды)
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);
