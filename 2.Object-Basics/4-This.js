let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  console.log("Hi!");
};

user.sayHi();

// эти объекты делают одно и то же (одинаковые методы)
user = {
  sayHi: function() {
    console.log("Hi!");
  }
};
// сокращённая запись выглядит лучше, не так ли?
user = {
  sayHi() {
    console.log("Hi!");
  }
};

let user = {
  name: "Джон",
  age: 30,

  sayHi() {
    console.log(user.name); // приведёт к ошибке
  }
};

user.sayHi();

let user = { name: "Джон" };
let admin = { name: "Админ" };

function sayHi() {
  console.log(this.name);
}

// используем одну и ту же функцию в двух объектах
user.f = sayHi;
admin.f = sayHi;

// вызовы функции, приведённые ниже, имеют разное значение this
// "this" внутри функции является ссылкой на объект, который указан "перед точкой"
user.f(); // Джон  (this == user)
admin.f(); // Админ  (this == admin)

admin["f"](); // Админ (неважен способ доступа к методу - через точку или квадратные скобки)

let user = {
  name: "Джон",
  hi() {
    console.log(this.name);
  },
  bye() {
    console.log("Пока");
  }
};

user.hi(); // Джон (простой вызов метода работает хорошо)

// теперь давайте попробуем вызывать user.hi или user.bye
// в зависимости от имени пользователя user.name
// (user.name == "Джон" ? user.hi : user.bye)(); // Ошибка!
// (user.name == "Джон" ? user.hi() : user.bye()); // Нет ошибки!

/* Таким образом, значение this передаётся правильно,
  только если функция вызывается напрямую с использованием синтаксиса точки obj.method()
  или квадратных скобок obj['method']() (они делают то же самое).
*/

let user = {
  firstName: "Илья",
  sayHi() {
    let arrow = () => console.log(this.firstName); // Нет своего THIS, ссылается на user'a
    arrow();
    console.log(this);
  }
};

user.sayHi(); // Илья

// ДОМАШКА
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser(); // Мы не вызываем makeUser() через точку, а это значит, что this внутри него — undefined
console.log(user.ref.name);

function makeUser() {
  return {
    name: "John",
    ref() {
      return this; // В этот момент this записывается в return, this — ссылка на объект return
    }
  };
}

let user = makeUser();
console.log(user.ref().name); // John

let calculator = {
  read() {
    this.a = prompt("Enter the 'a' number"); // Создаём в calculator поле a
    this.b = prompt("Enter the 'b' number"); // Создаём в calculator поле b
  },
  sum() {
    return parseInt(this.a) + parseInt(this.b);
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.read();
console.log("Sum is " + calculator.sum());
console.log("Mult is " + calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    // показывает текущую ступеньку
    console.log(this.step);
    return this;
  }
};

console.log(
  ladder
    .up()
    .up()
    .down()
    .showStep()
); // 1

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(tag => console.log(tag));
  }
};

video.showTags();
