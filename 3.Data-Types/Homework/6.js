// Создаём функцию, которая возвращает уникальные значения массива
function unique(arr) {
  return Array.from(new Set());
  // Сделать массив из созданного Set, который хранит лишь одно одинаковое значение (?)
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O"
];

console.log(unique(values)); // Hare, Krishna, :-O

// Фильтруем анаграммы
function aclean(arr) {
  let map = new Map(); // Новую коллекцию ключ:значение

  for (let word of arr) {
    // разбиваем слово на буквы, сортируем и объединяем снова в строку
    let sorted = word
      .toLowerCase() // Делаем слово маленьким
      .split("") // Превращаем его в массив
      .sort() // Сортируем
      .join(""); // Превращаем обратно в слово
    map.set(sorted, word); // Для каждого изначального слова лишь одна анаграмма
  }

  return Array.from(map.values()); // Выводим значения (уникальные) из map'a
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

let map = new Map();

map.set("name", "John");

let keys = map.keys(); // Возвращается интерируемый объект, а не массив

keys = Array.from(keys); // Теперь работает

keys.push("more"); // Ошибка
