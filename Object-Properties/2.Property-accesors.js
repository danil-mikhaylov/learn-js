// let user = {
//   name: "John",
//   surname: "Smith",
//
//   fName() {
//     return `${this.name} ${this.surname}`;
//   },
//
//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// };
//
// console.log(user.fullName); // John Smith

// let user = {
//   get fullName() {
//     return `...`;
//   }
// };
//
// user.fullName = 'Test' // Ошибка: у свойства есть только геттер

// let user = {
//   name: "John",
//   surname: "Smith",
//
//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
//
//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   }
// };
//
// user.fullName = "Alice Cooper";
//
// console.log(user.name); // Alice
// console.log(user.surname); // Cooper
// console.log(user); // { name: 'Alice', surname: 'Cooper', fullName: [Getter/Setter] }

// let user = {
//   name: "John",
//   surname: "Smith"
// };
//
// Object.defineProperty(user, "fullName", {
//   get() {
//     return `${this.name} ${this.surname}`;
//   },
//
//   set(value) {
//     [this.name, this.surname] = value.split(" ");
//   }
// });
//
// console.log(user.fullName); // John Smith
// for (let key in user) {
//   console.log(key); // name, surname
// }
// user.fullName = "Alice Cooper";
// console.log(user.fullName); // Alice Cooper

// // Error: Invalid property descriptor.
// Object.defineProperty({}, 'prop', {
//   get() {
//     return 1
//   },
//
//   value: 2
// });

// let user = {
//   get name() {
//     return this._name;
//   },
//
//   set name(value) {
//     if (value.length < 4) {
//       console.log("Имя слишком короткое...");
//       return;
//     }
//     this._name = value;
//   }
// };
//
// user.name = "Pete";
// console.log(user.name); // Pete
//
// user.name = "Tom"; // Имя слишком короткое...

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }
//
// new User("John", 25);

// function User(name, birthday) {
//   this.name = name;
//   this.birthday = birthday;
// }
//
// let john = new User("John", new Date(1992, 6, 1));

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));
console.log(john.birthday);
console.log(john.age);
