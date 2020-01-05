// ИСПОЛЬЗОВАНИЕ НОВОГО js
'use strict';

let year = prompt('When wd was born?')
let cond = (year == 2015)
if (cond) {
    alert('you are right')
} else {
    alert('loser')
}

let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');
if (year < 2015) {
  alert( 'Это слишком рано...' );
} else if (year > 2015) {
  alert( 'Это поздновато' );
} else {
  alert( 'Верно!' );
}

// Пример с '?'

let accessAllowed;
let age = prompt('Сколько вам лет?', '');

if (age >= 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
alert(accessAllowed);


let accessAllowed;
let accessAllowed = age >= 18 ? true : false

accessAllowed = age > 18; // Само сравнение возвращает нам true или false

let age = prompt('Возраст?', 18);
let message = (age < 3) ? 'Здравствуй, малыш' : 
    (age < 18) ? 'Привет!' : 
    (age < 100) ? 'Здравствуйте!' : 
    'Какой необычный возраст!';
alert(message);

let question = prompt('Whats the js official name?'); // ЗАДАНИЕ
let message = (question === 'ECMAScript') ? alert('Thats right!') : alert('Wrong :c') // ЗАДАНИЕ

let number = prompt('Number?')
if (number > 0) {
    alert(1)
} else if (number < 0) {
    alert(-1)
} else if (number === 0) {
    alert(0)
}

let result; // Вид с '?'
result = (a + b < 4) ? 'Мало' : 'Много'
// || // 
let result; // Вид с 'if / else'
if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

let message; // Вид с 'if / else'
if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

let message; // Вид с '?'
message = (login === 'Сотрудник') ? 'привет' :
    (login === 'Директор') ? 'Здравствуйте' :
    (login === '') ? 'Нет логина' : ''
