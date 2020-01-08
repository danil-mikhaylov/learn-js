// let map = new Map();
// map.set("1", "str1");
// map.set(1, "num1");
// map.set(true, "bool1");
//
// console.log(map.get(1)); // num1
// console.log(map.get("1")); // str1
// console.log(map.size); // 3

// let John = { name: "John" };
//
// let visitsCountMap = new Map();
//
// visitsCountMap.set(John, 123);
//
// console.log(visitsCountMap.get(John)); // 123

// let John = { name: "John" };
//
// let visitsCountObj = {};
//
// visitsCountObj[John] = 123;
//
// console.log(visitsCountObj["[object Object]"]); // 123

// map
//   .set("1", "str1")
//   .set(1, "num1")
//   .set(true, "bool1");
//
// let recipeMap = new Map([
//   ["огурец", 500],
//   ["помидор", 350],
//   ["лук", 50]
// ]);
//
// for (let vegetable of recipeMap.keys()) {
//   console.log(vegetable); // огурец, помидор, лук
// }
//
// for (let vegetable of recipeMap.values()) {
//   console.log(vegetable); // 500, 350, 50
// }
//
// for (let vegetable of recipeMap) {
//   console.log(vegetable); // ["огурец", 500] , ["помидор", 350] , ["лук", 50]
// }
//
// recipeMap.forEach((value, key, map) => {
//   console.log(`${map} : ${key} : ${value}`); // [object Map] : огурец : 500...
// });
//
// let map = new Map([
//   ["1", "str1"],
//   [1, "str1"],
//   [true, "str1"]
// ]);
// console.log(map.get("1")); // str1
//
// let user = {
//   name: "John",
//   age: 18
// };
//
// let map = new Map(Object.entries(user));
// let obj = Object.fromEntries(map);
// console.log(obj);
// console.log(Object.entries(user)); // ["name", "John"] , ["age", 18]
//
// let map = new Map();
// map.set("banana", 1);
// map.set("orange", 2);
// map.set("meat", 3);
//
// let obj = Object.fromEntries(map.entries());
// console.log(obj); // 1
//
// let set = new Set();
//
// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };
//
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);
//
// console.log(set.size); // 3
//
// for (let user of set) {
//   console.log(user.name); // John, Pete, Mary
// }
//
// let set = new Set(["апельсин", "яблоко", "банан"]);
// for (let value of set) {
//   console.log(value);
// }
//
// set.forEach((value, valueAgain, set) => console.log(value));
//
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
//
// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O"
// ];
//
// console.log(unique(values)); // Hare, Krishna, :-O
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// function aClean(arr) {
//   let map = new Map();
//   for (let word of arr) {
//     let sorted = word
//       .toLowerCase()
//       .split("")
//       .sort()
//       .join("");
//     map.set(sorted, word);
//   }
//   return Array.from(map.values());
// }

// function aClean(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     let sorted = arr[i]
//       .toLowerCase()
//       .split("")
//       .sort()
//       .join("");
//     obj[sorted] = arr[i];
//   }
//   return obj;
// }

// console.log(aClean(arr)); // ["PAN", "hectares", "era"]
//
// let map = new Map();
//
// map.set("name", "John");
//
// let keys = Array.from(map.keys());
//
// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");
// console.log(keys);
