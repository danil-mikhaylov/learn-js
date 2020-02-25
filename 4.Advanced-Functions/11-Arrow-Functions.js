let group = {
  title: "Our group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(
      student => console.log(this.title + ': ' + student) // this = showList: group.title
    )
  }
};

group.showList();

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(function (student) {
      console.log(this.title + ': ' + student);
    })
  }
};

group.showList();

/*

Стрелочные функции VS bind

Существует тонкая разница между стрелочной функцией => и обычной функцией, вызванной с .bind(this):

    .bind(this) создаёт «связанную версию» функции.
    Стрелка => ничего не привязывает. У функции просто нет this. При получении значения this – оно, как обычная переменная, берётся из внешнего лексического окружения.


 */

function defer(func, ms) {
  return function () {
    setTimeout(() => {func.apply(this, arguments)}, ms);
  }
}

function sayHi(who) {
  console.log(`Hello, ${who}`);
}

let sayHiDeffer = defer(sayHi, 2000);
sayHiDeffer("John"); // выводит "Hello, John" через 2 секунды

function defer(f, ms) {
  return function(...args) {
    let ctx = this;
    setTimeout(function () {
      return f.apply(ctx, args);
    }, ms)
  }
}

/*
Итого

Стрелочные функции:

    Не имеют this.
    Не имеют arguments.
    Не могут быть вызваны с new.
    (У них также нет super, но мы про это не говорили. Про это будет в главе Наследование классов).

 */