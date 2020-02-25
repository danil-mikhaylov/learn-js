// Using new JS
"use strict";

// Типы преобразований

// Boolean
let value = true;
console.log("value =", value, "type =", typeof value); // value = true type = boolean

// Числовые преобразования
value = +value;
console.log("value =", value, "type =", typeof value); // value = 1 type = number

// Строковые преобразования
value = String(value);
console.log("value =", value, "type =", typeof value); // value = 1 type = string

// Примеры Number(...) преобразований:
Number("123"); // 123
Number("123z"); // NaN
Number(true); // 1
Number(false); // 0
