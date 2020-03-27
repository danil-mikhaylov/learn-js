// Хранение отметок "не прочитано"
let messages = [
  // Массив объектов сообщений с text'oм и отправителем
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMessages = new WeakSet(); // Создаём новый WeakSet - readMessages

// Два сообщения были прочитаны
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages содержит 2 элемента

// ...давайте снова прочитаем первое сообщение!
readMessages.add(messages[0]);
// readMessages до сих пор содержит 2 элемента

// Вопрос: было ли сообщение message[0] прочитано?
console.log("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// теперь readMessages содержит 1 элемент (хотя технически память может быть очищена позже)

// Хранение времени прочтения
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
