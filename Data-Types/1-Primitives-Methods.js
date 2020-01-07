'use strict';

let str = 'Привет';
console.log(str.toUpperCase());

let n = 1.234567;
console.log(n.toFixed(3));
let str = 'Привет';

str.test = 5; // Создаётся объект-обёртка, но он удаляется

alert(str.test); // => undefined
