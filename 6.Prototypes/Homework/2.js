// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

// Сначала у нас есть такой код:
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

console.log(rabbit.eats); // true

// Добавим одну строчку. Что вызов console.log покажет нам сейчас?
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

Rabbit.prototype = {}; // (*) Изменение prototype не влияет на существующие объекты, но влияет на следующие

console.log(rabbit.eats); // ? (true)

// …А если код такой (заменили одну строчку)?
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false; // (*)
/*
Объекты присваиваются по ссылке.
Не создаётся копия Rabbit.prototype, это всегда один объект,
на который ссылается и Rabbit.prototype, и [[Prototype]] объекта rabbit.
 */

console.log(rabbit.eats); // ? (false)

// Или такой (заменили одну строчку)?
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

delete rabbit.eats; // (*) Пытается удалить свойство eats, но оно-то находится в прототипе!

console.log(rabbit.eats); // ? (true)

// Или, наконец, такой:
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats; // (*) Свойство eats удалено из прототипа, оно больше не существует.

console.log(rabbit.eats); // ? (undefined)

// Создайте новый объект с помощью уже существующего
function User(name) {
  this.name = name;
}

let user = new User("John");
let user2 = new user.constructor("Pete");

console.log(user2.name); // Pete (сработало!)

function User(name) {
  this.name = name;
}
User.prototype = {}; // (*)
/*
  1. Сначала ищется свойство constructor в объекте user. Не нашлось.
  2.Потом задействуется поиск по цепочке прототипов.
  Прототип объекта user — это User.prototype, и там тоже нет искомого свойства.
  3. Значение User.prototype — это пустой объект {}, чей прототип — Object.prototype.
  Object.prototype.constructor == Object.
  Таким образом, свойство constructor всё-таки найдено.
  4. Наконец срабатывает let user2 = new Object('Pete'), но конструктор Object игнорирует аргументы,
  он всегда создаёт пустой объект: let user2 = {} — это как раз то, чему равен user2 в итоге.
 */

let user = new User("John");
let user2 = new user.constructor("Pete");

console.log(user2.name); // undefined
