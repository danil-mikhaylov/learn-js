// Using new JS
"use strict";

// Type conversions

// Boolean
let value = true;
console.log("value =", value, "type =", typeof value); // value = true type = boolean

// Numerical conversions
value = +value;
console.log("value =", value, "type =", typeof value); // value = 1 type = number

// String conversions
value = String(value);
console.log("value =", value, "type =", typeof value); // value = 1 type = string

// Some examples of Number(...) conversion:
Number("123"); // 123
Number("123z"); // NaN
Number(true); // 1
Number(false); // 0
