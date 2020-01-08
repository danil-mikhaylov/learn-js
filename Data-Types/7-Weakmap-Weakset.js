// let cache = new Set();
// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = /* do some stuff with the object */ obj + 1;
//     cache.set(obj, result);
//   }
//   return cache.get(obj);
// }
//
// // 📁 main.js
// let obj = {
//   /* допустим, у нас есть какой-то объект */
// };
//
// let result1 = process(obj); // вычислен результат
//
// // ...позже, из другого места в коде...
// let result2 = process(obj); // ранее вычисленный результат взят из кеша
//
// // ...позже, когда объект больше не нужен:
// obj = null;
//
// console.log(cache.size); // 1 (Упс! Объект всё ещё в кеше, занимает память!)

// 📁 cache.js
// let cache = new WeakMap();

// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = /* вычисляем результат для объекта */ 1 + obj;
//     cache.set(obj, result);
//   }
//   return cache.get(obj);
// }
//
// // 📁 main.js
// let obj = {
//   /* какой-то объект */
// };
//
// let result1 = process(obj);
// let result2 = process(obj);
//
// // ...позже, когда объект больше не нужен:
// obj = null;
//
// // Нет возможности получить cache.size, так как это WeakMap,
// // но он равен 0 или скоро будет равен 0
// // Когда сборщик мусора удаляет obj, связанные с ним данные из кеша тоже удаляются

// let visitedSet = new WeakSet();
//
// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };
//
// visitedSet.add(john); // John заходил к нам
// visitedSet.add(pete); // потом Pete
// visitedSet.add(john); // John снова
//
// // visitedSet сейчас содержит двух пользователей
//
// // проверим, заходил ли John?
// console.log(visitedSet.has(john)); // true
//
// // проверим, заходила ли Mary?
// console.log(visitedSet.has(mary)); // false
//
// john = null;
//
// // структура данных visitedSet будет очищена автоматически

// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" }
// ];
//
// let readMessages = new WeakSet();
//
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// readMessages.add(messages[0]);
// console.log("Read message 0: " + readMessages.has(messages[0]));
// console.log("Read message 1: " + readMessages.has(messages[1]));
// console.log("Read message 2: " + readMessages.has(messages[2]));


// let messages = [
//   { text: "Hello", from: "John" }, // 0
//   { text: "How goes?", from: "John" }, // 1
//   { text: "See you soon", from: "Alice" } // 2
// ];
//
// let readMap = new Map();
// readMap.set(messages[0], new Date(2019, 8, 1, 19));
// readMap.set(messages[1], new Date(2019, 8, 1, 19));
//
// console.log(readMap.has(messages[0])); // true
// console.log(readMap.has(messages[1])); // true
// console.log(readMap.has(messages[2])); // false