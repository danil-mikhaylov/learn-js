// Comparison operators

console.log(1 > 2); // true
console.log(2 == 1); // false
console.log(2 != 1); // true

console.log("2" > 1); // true
console.log("01" == 1); // true

let a = 0;
console.log(Boolean(a)); // false
let b = "0";
console.log(Boolean(b)); // true
console.log(a == b); // true!

console.log(0 == false); // true
console.log("" == false); //true

// "===" - Comparison without type conversions

console.log(0 === false); // false, as different types are compared
console.log(null == undefined); // true
console.log(null === undefined); // false
