// // у нас есть массив с именем и фамилией
// let arr = ["Ilya", "Kantor"]
//
// // деструктурирующее присваивание
// // записывает firstName=arr[0], surname=arr[1]
// let [firstName, surname] = arr;
//
// console.log(firstName); // Ilya
// console.log(surname);  // Kantor

// let [firstName, surname] = "Ilya Kantor".split(' ');
// console.log(firstName, surname); // Ilya Kantor

// // let [firstName, surname] = arr;
// let firstName = arr[0];
// let surname = arr[1];

// let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
//
// console.log(title); // Consul

// let [a, b, c] = "abc";
// let [one, two, three] = new Set([1, 2, 3]);
// console.log(three); // 3

// let user = {};
//
// [user.name, user.surname ] = "Ilya Cantor".split(' ');
//
// console.log(user.name); // Ilya

// let user = {
//   name: "John",
//   age: 30
// };
// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key}:${value}`);
//   /*
//   name:John
//   age:30
//   */
// }

// let user = new Map();
//
// user.set("name", "John");
// user.set("age", 30);
//
// for (let [key, value] of user) {
//   console.log(`${key}: ${value}`);
//   /*
//   name: John
//   age: 30
//   */
// }

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(rest[0]); // Consul
// console.log(rest[1]); // of the Roman Republic

// let [firstName, surname] = [];
//
// console.log(firstName); // undefined
// console.log(surname); // undefined

// let [name = "Julious", surname = "Anonymous"] = ["Guest"];
//
// console.log(name); // Guest (from the array)
// console.log(surname); // Anonymous (default value)

// // prompt запустится только для surname
// let [name = prompt("name?"), surname = prompt("surname?")] = ["Julius"];
//
// console.log(name); // Julius (из массива)
// console.log(surname); // результат prompt

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };
//
// // let {title, width, height} = options;
//
// let {height, width, title} = { title: "Menu", height: 200, width: 100 };
//
// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };
//
// let { width: w, height: h, title } = options;
//
// console.log(title); // Menu
// console.log(w); // 100
// console.log(h); // 200

// let options = {
//   title: "Menu"
// };
//
// let {width = 100, height = 200, title} = options;
//
// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200

// let options = {
//   title: "Menu"
// };
//
// let {width = prompt("width?"), title = prompt("title?")} = options;
//
// alert(title);  // Menu
// alert(width);  // (результат prompt)

// let options = {
//   title: "Menu"
// };
//
// let { width: w = 100, height: h = 200, title } = options;
//
// console.log(title); // Menu
// console.log(w); // 100
// console.log(h); // 200

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };
//
// // взять только title, игнорировать остальное
// let { title } = options;
//
// console.log(title); // Menu

// let options = {
//   title: "Menu",
//   height: 200,
//   width: 100
// };
//
// // title = свойство с именем title
// // rest = объект с остальными свойствами
// let {title, ...rest} = options;
//
// // сейчас title="Menu", rest={height: 200, width: 100}
// alert(rest.height);  // 200
// alert(rest.width);   // 100

// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };
//
// let {
//   size: { width, height },
//   items: [item1, item2],
//   title = "Menu"
// } = options;
//
// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200
// console.log(item1); // Cake
// console.log(item2); // Donut

// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };
//
// function showMenu({
//   title = "Untitled",
//   width: w = 100, // width присваиваем в w
//   height: h = 200, // height присваиваем в h
//   items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
// }) {
//   console.log(`${title} ${w} ${h}`); // My Menu 100 200
//   console.log(item1); // Item1
//   console.log(item2); // Item2
// }
//
// showMenu(options);

// function f({ incomingProperty: varName = defaultValue }) {}
// showMenu({}); // ок, все значения - по умолчанию
//
// showMenu(); // так была бы ошибка

// function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
//   alert( `${title} ${width} ${height}` );
// }
//
// showMenu(); // Menu 100 200

// let user = {
//   name: "John",
//   years: 30
// };
//
// let { name, years: age, isAdmin: isAdmin = false } = user;
//
// console.log(name); // John
// console.log(age); // 30
// console.log(isAdmin); // false

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250
// };
//
// function topSalary(salaries) {
//   let maxSalary = [0];
//   Object.entries(salaries).forEach(arr => {
//     if (arr[1] > maxSalary[0]) {
//       maxSalary[0] = arr[1];
//     }
//   });
//   return Number(maxSalary);
// }

// function topSalary(salaries) {
//   let maxSalary = 0;
//   let maxName = null;
//   for (let [name, salary] of Object.entries(salaries)) {
//     if (salary > maxSalary) {
//       maxSalary = salary;
//       maxName = name;
//     }
//   }
//   return {maxSalary, maxName};
// }
//
// console.log(topSalary(salaries));

