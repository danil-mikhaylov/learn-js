// let student = {
//   name: "John",
//   age: 30,
//   isAdmin: false,
//   courses: ["HTML", "CSS", "JS"],
//   wife: null,
// };
//
// let json = JSON.stringify(student);
//
// console.log(json); // {"name":"John","age":30,"isAdmin":false,"courses":["HTML","CSS","JS"],"wife":null}

// console.log(JSON.stringify(1)); // 1
// console.log(JSON.stringify('test')); // "test"
// console.log(JSON.stringify(true)); // true
// console.log(typeof JSON.stringify(true)); // string
// console.log(JSON.stringify([1, 2, 3])); // [1,2,3]
// console.log(typeof JSON.stringify([1, 2, 3])); // string

// let user = {
//   sayHi() {
//     console.log("Hello")
//   },
//   something: undefined,
//   [Symbol("Id")]: 123,
// };
//
// console.log(JSON.stringify(user)); // {}

// let meetUp = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["John", "Ann"]
//   }
// };
//
// let jsonMeetUp = JSON.stringify(meetUp);
//
// console.log(jsonMeetUp); // {"title":"Conference","room":{"number":23,"participants":["John","Ann"]}}
// /* вся структура преобразована в строку:
// {
//   "title":"Conference",
//   "room":{"number":23,"participants":["john","ann"]},
// }
// */

// let room = {
//   number: 23
// };
//
// let meetUp = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room // meetUp ссылается на room
// };
//
// room.occupiedBy = meetUp;
// // {"title":"Conference","participants":[{},{}]}\
// console.log(JSON.stringify(meetUp, ['title', 'participants']));
// // {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}]}
// console.log(JSON.stringify(meetUp, ["title", 'participants', 'name', 'occupiedBy']));

// let room = {
//   number: 23
// };
//
// let meetUp = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room
// };
//
// room.occupiedBy = meetUp; // room ссылается на meetUp
//
// console.log(
//   JSON.stringify(meetUp, (key, value) => {
//     console.log(`${key}:${value}`);
//     return (key == 'occupiedBy') ? undefined : value;
//     // return value;
//   }, 4)
// );
//
// /*
// :[object Object]
// title:Conference
// participants:[object Object],[object Object]
// 0:[object Object]
// name:John
// 1:[object Object]
// name:Alice
// place:[object Object]
// number:23
// occupiedBy:[object Object]
// {
//     "title": "Conference",
//     "participants": [
//         {
//             "name": "John"
//         },
//         {
//             "name": "Alice"
//         }
//     ],
//     "place": {
//         "number": 23
//     }
// }
// */

// let room = {
//   number: 123
// };
//
// let meetUp = {
//   title: "Conference",
//   date: new Date(Date.UTC(2017,0, 1)),
// };
//
// console.log(JSON.stringify(meetUp, ['date'])); // {"date":"2017-01-01T00:00:00.000Z"}
// console.log(typeof JSON.stringify(meetUp, ['date'])); // string

// let room = {
//   number: 23,
//   toJSON() {
//     return this.number;
//   }
// };
//
// let meetUp = {
//   title: "Conference",
//   room
// };
//
// console.log(JSON.stringify(room)); // 23
//
// console.log(JSON.stringify(meetUp));
// /*
//   {
//     "title":"Conference",
//     "room": 23
//   }
// */

// let numbersString = '[1, 2, 3, 4, 5]';
// let numbersInt = JSON.parse(numbersString);
// console.log(numbersInt.reduce((accumulator, currentValue) => accumulator + currentValue)); // 15
// console.log(numbersInt.forEach(currentValue => console.log(currentValue))); // 15
// console.log(numbersInt.map(currentValue => currentValue * 2));
// console.log(numbersInt.filter(currentValue => currentValue > 3 && currentValue < 5));

// let user =
//   '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
//
// user = JSON.parse(user); // this is an object now
//
// console.log(user.friends.reduce((a, b) => a + b)); // 6

// function createRandomArray(start = 0, end = 10) {
//   let arr = [];
//   let randomI = createRandomNumber();
//   for (let i = 0; i < randomI; i++) {
//     arr.push(createRandomNumber(start, end));
//   }
//   return arr;
// }
// function createRandomNumber(min = 0, max = 10) {
//   let rand = min - 0.5 + Math.random() * (max - min + 1);
//   return Math.round(rand);
// }
//
// function createRandomBoolean() {
//   return Boolean(Math.round(Math.random()));
// }
//
// let randomObject = {
//   randomArray: createRandomArray(),
//   randomBoolean: createRandomBoolean(),
//   randomNumber: createRandomNumber(),
// };
//
// console.log(JSON.stringify(randomObject));
// console.log(JSON.parse(JSON.stringify(randomObject)));

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };
//
// let user2 = JSON.parse(JSON.stringify(user));
// let user3 = JSON.stringify(user);
//
// console.log(user2);
// console.log(user3);


// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
//
// let meetup = JSON.parse(str, (key, value) => {
//   return key == "date" ? new Date(value) : value;
// });
//
// console.log(meetup.date.getDate()); // 30

// let room = {
//   number: 23
// };
//
// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//   place: room
// };
//
// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;
//
// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     return key != "" && value == meetup ? undefined : value;
//   })
// );
