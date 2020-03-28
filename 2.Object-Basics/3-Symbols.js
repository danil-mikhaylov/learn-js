let id = Symbol("id");
console.log(id); // TypeError: Cannot convert a Symbol value to a string

let id = Symbol("id");
console.log(id.toString()); // Symbol(id), теперь работает

let id = Symbol("id");
console.log(id.description); // id

let user = {
  name: "Вася"
};

let id = Symbol("id");

user[id] = 1;

console.log(user[id], user); // мы можем получить доступ к данным по ключу-символу

let id = Symbol("id");

let user = {
  name: "Вася",
  [id]: 123 // просто "id: 123" не сработает // Это Символ
};

// Свойства, чьи ключи — символы, не перебираются циклом for..in.
let id = Symbol("id");
let user = {
  name: "Вася",
  age: 30,
  [id]: 123
};

for (let key in user) console.log(key); // name, age
// (свойства с ключом-символом нет среди перечисленных)

// хотя прямой доступ по символу работает
console.log("Напрямую: " + user[id]);

let obj = {
  0: "Тест" // то же самое что и "0": "Тест"
};

// обе функции console.log выведут одно и то же свойство (число 0 преобразовывается в строку "0")
console.log(obj["0"]); // Тест
console.log(obj[0]); // Тест (то же свойство)

// читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for("id"); // если символа не существует, он будет создан

// читаем его снова в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for("id");

// проверяем — это один и тот же символ
console.log(id === idAgain); // true

// получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// получаем имя по символу
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log(Symbol.keyFor(globalSymbol)); // name, глобальный символ
console.log(Symbol.keyFor(localSymbol)); // undefined для неглобального символа

console.log(localSymbol.description); // name
