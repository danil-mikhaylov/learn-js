// let user = new Object(); // Использование с конкструктуром
// let user = {}; // Синтаксис "литерал объекта"
// let user = {     // объект
//   name: "John",  // под ключом "name" хранится значение "John"
//   age: 30        // под ключом "age" хранится значение 30
// };

// // получаем свойства объекта:
// alert( user.name ); // John
// alert( user.age ); // 30
// user.isAdmin = true;
// delete user.age;

// // Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки:
// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
// };

// let user = {};

// // присваивание значения свойству
// user["likes birds"] = true;

// // получение значения свойства
// alert(user["likes birds"]); // true

// // удаление свойства
// delete user["likes birds"];

// let user = {};
// user["likes birds"] = true;
// let key = "likes birds"
// user[key] // true

// let user = {
//   name: "John",
//   age: 30,
// }
// let key = prompt("What do you want to know about the user?","name")
// alert("The user name is " + user[key])

// let fruit = prompt("What kind of fruit do you want to buy?", "apple");

// let bag = {
//   [fruit]: 5, // означает, что имя свойства необходимо взять из переменной fruit.
// } // И если посетитель введёт слово "apple", то в объекте bag теперь будет лежать свойство {apple: 5}.
// alert( bag.apple );

// let fruit = prompt("What kind of fruit do you want to buy?", "apple");
// let bag = {};

// bag[fruit] = 5;

// let fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };

// let obj = {
//   first: 1,
//   second: 2,
//   third: 3,
// }

// alert( obj.first + obj.second + obj.third )

// function makeUser(name, age) { // Принимаем age, name
//   return {
//     name, // name:name,
//     age, // age:age,
//   }
// }
// name = prompt("Please, enter user name")
// age = prompt("Please, enter user age")
// let user = makeUser(name, age);
// alert("User name which you entered is " + user.name);
// alert("User age which you entered is " + user.age);
// let user = {
//   name: "John",
//   age: 30,
// }
// if (user.getSuchProperty === undefined) console.log('meow');

// if ("getSuchProperty" in user) {

// } console.log("There's no NoSuchProperty")

// for (key in object) {
//   // тело цикла выполняется для каждого свойства объекта
// }

// let user = {
//   age: 18,
//   name: "John",
//   isAdmin: true,
// }

// for (let key in user) { // let prop in user
//   console.log( key ) // name, age, isAdmin
//   console.log ( user[key] ) // John, 30, true
// }

// let user = {
//   name: "John",
// }
// let admin = user;
// admin.name = "Pete" // изменено по ссылке из переменной "admin"
// console.log(user.name) // 'Pete', изменения видны по ссылке из переменной "user"


// let a = {};
// let b = a;
// console.log(a == b) // true
// console.log(a === b) // true

// let a = {};
// let b = {};
// console.log(a == b) // false
// console.log(a === b) // false


// const user = {
//   name: "John",
// }

// user.age = 25;
// console.log(user);


// let user = {
//   name: "John",
//   age: 18,
//   isAdmin: true,
// }
// let clone = {};
// for (let key in user) {
//   clone[key] = user[key];
// }


// let user = {
//   name: "John",
// }

// let premission1 = {
//   canView: true,
// }

// let premission2 = {
//   canEdit: false,
// }

// Object.assign(user, premission1, premission2);

// console.log(user);

// // Если принимающий объект (user) уже имеет свойство с таким именем, 
// // оно будет перезаписано:

// let user = { name: "John" };

// // свойство name перезапишется, свойство isAdmin добавится
// Object.assign(user, { name: "Pete", isAdmin: true });

// // now user = { name: "Pete", isAdmin: true }

// let user = {
//   name: "John",
//   age: 30,
//   sizes: {
//     height: 182,
//     width: 50
//   },
// };

// let clone = Object.assign({}, user)

// console.log(clone)
// console.log(user == clone) // false

// user.sizes.height++

// console.log(clone.sizes.height === user.sizes.height)
// console.log(user.sizes.height, "user.sizes.height")
// console.log(clone.sizes.height, "clone.sizes.height")


// Домашка

// let user = {};
// user.name = "John"; // user["name"] = "John";
// user.surname = "Smith"; // user["surname"] = "Smith";
// user.name = "Pete"; // user["name"] = "Pete";
// delete user.name; // delete user["name"];


// let schedule = {};
// // schedule["8:30"] = "get up";
// function isEmpty(obj) {
//   for (let key in obj) { // Если он не найдёт, вылезет ошидка, а это значит, что тела цикла не выполнится.
//     return false;
//     // if (obj[key] === undefined) {
//     //   continue;
//     // } else {
//     //   return false;
//     // }
//   }
//   return true;
// }
// console.log(isEmpty(schedule));

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = 0;

// function summing(object) {
//   for (let key in object) {
//     sum += object[key]
//   }
//   return sum;
// }

// console.log(summing(salaries));


// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for(let key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
//   return menu;
// }

// multiplyNumeric(menu);

// console.log(menu)