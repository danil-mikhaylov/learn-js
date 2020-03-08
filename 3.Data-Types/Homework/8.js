// Сумма свойств объекта
let salaries = {
  // Объект с зарплатами
  John: 100,
  Pete: 300,
  Mary: 250
};

function sumSalaries(obj) {
  // Аргумент -- объект с зарплатами
  let sum = 0; // Сумма всех зарплат
  for (let value of Object.values(obj)) {
    // Для кадого ЗНАЧЕНИЯ нашего аргумента
    sum += value; // Добавляем зарплату к сумме
  }
  return sum; // Возвращаем сумму всех зарплат

  // return Object.values(obj).reduce((total, currentValue) => total + currentValue);
}
console.log(sumSalaries(salaries));

// Подсчёт количества свойств объекта
let user = {
  name: "John",
  age: 30
};

function count(obj) {
  return Object.values(obj).length;
}

console.log(count(user)); // 2
