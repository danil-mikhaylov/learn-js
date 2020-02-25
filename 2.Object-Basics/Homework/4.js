// Каким будет результат выполнения данного кода?
let user = {
  name: "John",
  go: function() {
    console.log(this.name);
  }
};

user.go(); // John, скобки ни на что не влияют

// Каким будет реузльтат?
function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
}

let user = makeUser();

console.log(user.ref.name); // Ошибка
/*
Это потому, что правила, которые определяют значение this, никак не смотрят на объявление объекта. Важен лишь момент вызова метода.

Здесь значение this внутри makeUser() является undefined, потому что makeUser() вызвана как функция, не через «точку» как метод.

Литерал объекта сам по себе не влияет на this. Значение this одно для всей функции и блоков кода в ней, литеральные объекты не меняют его.

Таким образом, при создании объекта ref: this берёт текущее значение this функции makeUser().
 */

// Создать кальулятор с методами read(), sum(), mul()
let calculator = {
  sum() {
    // Функция суммы
    return this.a + this.b;
  },

  mul() {
    // Функция умножения
    return this.a * this.b;
  },

  read() {
    // Функция считывания
    this.a = +prompt("a?", 0); // Спрашиваем и записываем в this.a
    this.b = +prompt("b?", 0); // Спрашиваем и записываем в this.b
  }
};

calculator.read(); // ЧИТАТЬ!
console.log(calculator.sum());
console.log(calculator.mul());

// Изменить код для последовательности вызовов
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() {
    // показывает текущую ступеньку
    console.log(this.step);
  }
};

// Нужно:
// ladder.up().up().down().showStep(); // 1

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; // Чтобы следующий вызов получил this объкта ladder и мог работать с ним
  },
  down() {
    this.step--;
    return this; // Чтобы следующий вызов получил this объкта ladder и мог работать с ним
  },
  showStep() {
    console.log(this.step);
    return this; // Чтобы следующий вызов получил this объкта ladder и мог работать с ним
  }
};

ladder
  .up()
  .up()
  .down()
  .up()
  .down()
  .showStep(); // 1
