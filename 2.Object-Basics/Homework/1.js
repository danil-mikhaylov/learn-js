let user = {}; // Создаём пустой объект user
user.name = "John"; // Добавляем свойство name со значением John
user.surname = "Smith"; // Добавляем свойство surname со значением Smith
user.name = "Pete"; // Изменяем значение свойства name на Pete
delete user.name; // Удаляем свойство name из объекта

// Написать функцию, которая проверяет, пустой ли объект
function isEmpty(obj) {
  // Объявляем фукнцию, которая принимает obj
  for (let key in obj) {
    // Для каждого значения в объекте...
    // Если тело цикла начнет выполняться, значит, в объекте есть свойства
    return false; // Следовательно, возвращаем false
  }
  return true; // Иначе, соответственно, вернём true
}

// Можно ли изменять свойства, которые в объекте, который объявили с помощью const?
const user = {
  name: "John"
};

// Будет это работать?
user.name = "Pete"; // Да, потому что const защищает от изменений лишь user

// Суммирование всех зарплат в объекте
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in user) {
  // Для каждого элемента в user
  sum += salaries[key]; // Добавляем этот объект в sum
}

console.log(sum); // 390

// Умножаем все числовые свойства на 2
function multiplyNumeric(obj) {
  // Объявляем функцию, которая принимает obj
  for (let key in obj) {
    // Для каждого элмента в этом obj
    if (typeof obj[key] == "number") {
      // Если элемент — число
      obj[key] *= 2; // То мы умножаем его на два
    }
  }
}
