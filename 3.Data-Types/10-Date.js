// let now = new Date();
// console.log(now); // Показывает текущие дату и время (2020-03-08T18:22:09.121Z)
//
// // 0 соответствует 01.01.1970 UTC+0
// let Jan01_1970 = new Date(0);
// console.log(Jan01_1970); // 1970-01-01T00:00:00.000Z
//
// // теперь добавим 24 часа и получим 02.01.1970 UTC+0
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log(Jan02_1970); // 1970-01-02T00:00:00.000Z
//
// // 31 декабря 1969 года
// let Dec31_1969 = new Date(-24 * 3600 * 1000);
// console.log(Dec31_1969); // 1969-12-31T00:00:00.000Z
//
// // Если аргумент — строка, то дата читается
// let date = new Date("2017-01-26");
// console.log(date); // 2017-01-26T00:00:00.000Z
// // Время не указано, поэтому оно ставится в полночь по Гринвичу и
// // меняется в соответствии с часовым поясом места выполнения кода
// // Так что в результате можно получить
// // Thu Jan 26 2017 11:00:00 GMT+1100 (восточно-австралийское время)
// // или
// // Wed Jan 25 2017 16:00:00 GMT-0800 (тихоокеанское время)
//
// new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 Jan 2011, 00:00:00
// new Date(2011, 0, 1); // то же самое, так как часы и проч. равны 0
//
// let date = new Date(2011, 0, 1, 2, 3, 4, 567);
// console.log(date); // 1.01.2011, 02:03:04.567

// Получение компонентов даты
// текущая дата
let date = new Date();

// час в вашем текущем часовом поясе
console.log(date.getHours()); // (21)

// час в часовом поясе UTC+0 (лондонское время без перехода на летнее время)
console.log(date.getUTCHours()); // (18)

// если вы в часовом поясе UTC-1, то выводится 60
// если вы в часовом поясе UTC+3, выводится -180
console.log(new Date().getTimezoneOffset());

// Установка компонентов даты
let today = new Date();

today.setHours(0);
console.log(today); // выводится сегодняшняя дата, но значение часа будет 0

today.setHours(0, 0, 0, 0);
console.log(today); // всё ещё выводится сегодняшняя дата, но время будет ровно 00:00:00.

// Автоисправление даты
let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
console.log(date); // ...1st Feb 2013!

let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

console.log(date); // 1 Mar 2016

let date = new Date();
date.setSeconds(date.getSeconds() + 70);

console.log(date); // выводит правильную дату

let date = new Date(2016, 0, 2); // 2 Jan 2016

date.setDate(1); // задать первое число месяца
console.log(date);

date.setDate(0); // первый день месяца — это 1, так что выводится последнее число предыдущего месяца
console.log(date); // 31 Dec 2015

// Преобразование к числу, разность дат
let date = new Date();
console.log(+date); // количество миллисекунд, то же самое, что date.getTime()

let start = new Date(); // начинаем отсчёт времени

// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // заканчиваем отсчёт времени

console.log(`Цикл отработал за ${end - start} миллисекунд`);

// Date.now()
let start = Date.now(); // количество миллисекунд с 1 января 1970 года

// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // заканчиваем отсчёт времени

console.log(`Цикл отработал за ${end - start} миллисекунд`); // вычитаются числа, а не даты
