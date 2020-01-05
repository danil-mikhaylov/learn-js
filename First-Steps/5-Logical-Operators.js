// ИСПОЛЬЗОВАНИЕ НОВОГО js
'use strict';

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

result(a || b); // a ИЛИ b

alert( null || 2 || undefined ); //2
alert( alert(1) || 2 || alert(3) ); // Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.


let hour = 9;
if (hour < 10 || hour > 18) { 
  alert( 'Офис закрыт.' );
}

alert( 1 || 0 ); // 1
alert( true || 'no matter what' ); // true
alert( null || 1 ); // 1 (первое истинное значение)
alert( null || 0 || 1 ); // 1 (первое истинное значение)
alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)

let currentUser = null;
let defaultUser = "John";
let name = currentUser || defaultUser || "unnamed";
alert( name ); // выбирается "John" – первое истинное значение

let x;
true || (x = 1); // '||' проверяет: а первый - true? -да, значит x != 1;
alert(x); // undefined, потому что (x = 1) не вычисляется

let x;
false || (x = 1); // Здесть 1-й аргумент - false, => будет исполняться второй
alert(x); // 1

result(a && b); // a И b

alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // 1, а затем undefined, так как alert возвращает undefined

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

if (1 && 0) { // вычисляется как true && false
    alert( "не сработает, так как результат ложный" );
}

// Если первый операнд истинный,
// И возвращает второй:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

let x = 1;
(x > 0) && alert( 'Greater than zero!' ); // alert() сработает, только если x > 1, замена if'a

let x = 1;
if (x > 0) {
  alert( 'Greater than zero!' );
}

result = !value; // НЕ
alert( !true ); // false
alert( !0 ); // true

alert( null || 2 && 3 || 4 ); // 3, 1 - ничего, считается второй аргумент. Если &&, то выводится последний результат.


age = alert('enter your age');
if (!(age >= 14 && age <= 90)) {
    print('Вы входите в диапозог')    
}

age = alert('enter your age');
if (age >= 14 && age <= 90) {
    print('Вы входите в диапозог')    
}

if (-1 || 0) alert( 'first' ); // first, т.к. (-1) != false
if (-1 && 0) alert( 'second' ); // nothing
if (null || -1 && 1) alert( 'third' ); // Там считается второй аргумент в И, а если один из аргументов И равен 1, значит пишем его.

let login;
let password;
login = prompt('enter login');
if (login === 'Админ') {
    password = prompt('enter password')
    if (password == 'Я главный') {
        alert('Здравствуйте')
    } if (password != 'Я главный' && password != null) {
        alert('Неверный пароль')
    } if (password === '' || password === null) {
        alert('Отменено')        
    }
} else if (login != 'Админ') {
    if (login === '' || login == null) {
        alert('Отменено')
    } else {
        alert('Я вас не знаю')
    }
}

// Тут сначала идёт проверка логина, если логин != админ, выводится "Я вас не знаю". Если логин = админ, то проверяется пароль. 
// Если пароль неверный, то выводится "Неверный пароль". Если пароль верный, то выводится "Здравствуйте"

