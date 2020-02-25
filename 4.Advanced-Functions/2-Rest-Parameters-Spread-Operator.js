function sumAll(...args) {
  // 'args' – имя массива
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(1, 2, 3, 4, 5)); // 15

function showName(firstName, lastName, ...titles) {
  console.log(firstName + " " + lastName); // Юлий Цезарь

  console.log(titles[0]); // Консул
  console.log(titles[1]); // Император
  console.log(titles.length); // 2
}

showName("Юлий", "Цезарь", "Консул", "Император");

/*
function f(arg1, ...rest, arg2) { // arg2 после ...rest ?!
  // Ошибка
}
*/

function showName() {
  console.log(arguments.length); // 2
  console.log(arguments[0]);
  console.log(arguments[1]);

  // Объект arguments можно перебирать
  // for (let arg of arguments) console.log(arg);
}

// Вывод: 2, Юлий, Цезарь
showName("Юлий", "Цезарь");

// Вывод: 1, Илья, undefined (второго аргумента нет)
showName("Илья");

function f() {
  let showArg = () => console.log(arguments[0]);
  showArg(2);
}
f(1); // 1

let arr = [1, 3, 5];
console.log(Math.max(...arr)); // 5

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log(Math.max(...arr1, ...arr2)); // 8

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

let merged = [...arr1, ...arr2];

console.log(merged); // [1, -2, 3, 4, 8, 3, -8, 1]

let str = "Привет";
console.log(...str); // П р и в е т
console.log([...str]); // [ 'П', 'р', 'и', 'в', 'е', 'т' ]
console.log(Array.from(str)); // [ 'П', 'р', 'и', 'в', 'е', 'т' ]
