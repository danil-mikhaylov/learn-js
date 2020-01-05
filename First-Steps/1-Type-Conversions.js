// ИСПОЛЬЗОВАНИЕ НОВОГО js
'use strict';

// ПРЕОБРАЗОВАНИЯ ТИПОВ

let value = true;
console.log('value =', value, 'type =',typeof(value)); // value = true type = boolean

value = +value // Числовое преоборазовние
console.log('value =', value, 'type =',typeof(value)); // value = 1 type = number

value = String(value) // Строковое преоброзование
console.log('value =', value, 'type =',typeof(value)); // value = 1 type = string

Number('123') // 123    
Number('123z') // NaN
Number(true) // 1
Number(false) // 0




