/*
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

 */
let user = {
  name: "John",
  years: 30
};

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

// Вычисляем имя сотрудника с максимальной зарплатой
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) { // Принимаем объект с именами и зарплатами
  let max = 0; // Переменная максимальной зарплаты
  let maxName = null; // Имя человека с максимальной зарплатой

  for (const [name, salary] of Object.entries(salaries)) { // Для каждого name и salary
    if (max < salary) { // Если максимальная на данный момент зарплата меньше, то
      max = salary; // Приравнять конкретную зарплату к максимальной
      maxName = name; // Записать имя
    }
  }

  return maxName; // Возвращаем имя
}

