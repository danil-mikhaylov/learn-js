let animal = {
  eats: true
};

let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;
// Теперь мы можем найти оба свойства в rabbit:
console.log(rabbit.jumps); // true
console.log(rabbit.eats); // true

let animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

rabbit.walk(); // Animal walks

let animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

longEar.walk(); // Animal walks
console.log(longEar.jumps); // true

let animal = {
  eats: true,
  walk() {
    /* этот метод не будет использоваться в rabbit */
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.walk = function() {
  console.log("Rabbit! Bounce-bounce");
};

rabbit.walk(); // Rabbit! Bounce-bounce

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};
// this – объект перед точкой, просто у admin не было name и surname
console.log(admin.fullName); // John Smith (*)

// срабатывает сеттер!
admin.fullName = "Alice Cooper"; // (**)
console.log(admin.name); // Alice
console.log(admin.surname); // Cooper

// Операция записи не использует прототип

// методы animal
let animal = {
  walk() {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};

// модифицирует rabbit.isSleeping
rabbit.sleep();

console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined (нет такого свойства в прототипе)
/*
  Но this при вызове каждого метода будет соответствовать объекту (перед точкой),
  на котором происходит вызов, а не animal.
  Поэтому, когда мы записываем данные в this, они сохраняются в этих объектах.
 */

// Цикл for…in

let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// Object.keys возвращает только собственные ключи
console.log(Object.keys(rabbit)); // [ 'jumps' ]

// for..in проходит и по своим, и по унаследованным ключам
for (let prop in rabbit) {
  console.log(prop);
} // jumps, затем eats

// Если унаследованные свойства нам не нужны, то мы можем отфильтровать их:
let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our: ${prop}`);
  } else {
    console.log(`Inherited: ${prop}`);
  }
}

// Вариант с бенчмаркингом
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

// как быстрее получить значение glasses
let start = new Date();

for (let i = 0; i <= 100000000; i++){
  let temp = pockets.glasses;
}

let stop = new Date();
let pockets_glasses = stop - start;
//---
start = new Date();

for (let i2 = 0; i2 <= 100000000; i2++){
  let temp = head.glasses;
}

stop = new Date();
let head_glasses = stop - start;
//---
console.log(`pockets.glasses = ${pockets_glasses}
head.glasses = ${head_glasses}`);