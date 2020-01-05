function print(output) {
  this.div = document.getElementById('output');
  this.p = document.createElement('p');
  this.p.innerText = output;
  this.div.appendChild(p);
  return;
}
// let billion = 1000000000;
// let second_billion = 1e9;

// console.log(7.39e9);

// console.log(1e3 == 1 * 1000);
// console.log(1.23e6 == 1.23 * 1000000);

// let ms = 0.000001
// let second_ms = 1e-6;
// console.log(ms == second_ms, "It works!");

// // -3 делится на 1 с 3 нулями
// // 1e-3 = 1 / 1000 (=0.001)

// // -6 делится на 1 с 6 нулями
// // 1.23e-6 = 1.23 / 1000000 (=0.00000123)

// let num = 255;
// console.log( num.toString(2) ); // 11111111

// alert(123456..toString(36)); // 2n9c
// /*
//     123456.toString(36) -- error
//     (123456).toString(36) -- 2n9c
//     123456..toString(36) -- 2n9c
// */


// let num = 1.23456789;

// print( num.toFixed(3) ); // 1.235

// /* let */ num = 1;

// print( num.toFixed(5) ) // 1.00000

// print( 1e500 ) // Infinity

// print( 0.1 + 0.3 ) // 0.4

// print( 0.1 + 0.2 ) // 0.30000000000000004

// print( 0.1.toFixed(30) ) // 0.100000000000000005551115123126

// let sum = 0.1 + 0.2

// print( typeof (sum.toFixed(2)) ) // string!

// print( 9999999999999999 )

// print( isNaN('') ) // false

// print( isNaN(NaN) ); // true

// print( isFinite('15') ) // true, преобразуется число

// print( isFinite('str') ) // false, потому что специальное значение: NaN

// print( isFinite(Infinity) ) // false, потому что специальное значение: Infinity

// let num = Number( prompt("Number?") );

// // вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число
// print( isFinite(num) );

// print( parseInt('12px') ) // 12

// print( parseFloat('12.5cm') ) // 12.5

// print( parseInt('0xff', 16) ); // 255
// print( parseInt('ff', 16) ); // 255, без 0x тоже работает

// print( parseInt('2n9c', 36) ); // 123456

// print( Math.random() );

// print( Math.max(3, 5, -10, 0, 1) ); // 5
// print( Math.min(1, 2) ); // 1

// print( Math.pow(2, 10) ) // 1024

// let a = prompt('a?')
// let b = prompt('b?')

// function sum(a, b) {
//   return ( parseFloat(a) + parseFloat(b) ).toFixed(1);
// }
// print( sum(2, 3) )


// let a = +prompt("Введите первое число", "");
// let b = +prompt("Введите второе число", "");

// alert( a + b );


// let problemNumber = 6.35;

// print( problemNumber.toFixed(1) ) // 6.4? NO. We have 6.3

// print( Math.round(6.35 * 10) / 10) //

function readNumber() {
  let num;
  do {
    num = prompt('num?') // Выполнится хотя бы один раз
  } while ( !isFinite(num) ); // Пока это НЕ число, спрашивать число

  if (num === null || num === '') { // Если введена пустая строка, или нажата клавиша "Отмена"
    return null; // Возвращать null
  }
  return parseInt(num); // В ином же случае (когда введено число), возвращать это число
}

// print(`Number: ${readNumber()}`); // Вывести на экран результат функции readNumber();

// let i = 0;
// for (let j = 0;j < 51; j++) {
//   i += 0.2;
//   print(i);
// }

function randomWrong(a, b) {
  let rand = Math.random(); // Рандомное число от 0.01 до 0.99
  let diff = (b - a); // Здесь будет 4
  // print(rand, ' = rand') // 1) 0.01
  // print(diff, ' = diff') // 4
  return Math.round( (rand * diff) + a); // 1) 0.01 * 4 = 0.04, этого недостаточно, поэтому прибавляем min(a).
                            // 2) 0.99 * 4 = 3.96, этого также недостаточно, поэтому приабавляем min(a)
}

function randomRight(min, max) { 
  let rand = min - 0.5 + ( Math.random() * (max - min + 1 ));
  return Math.round(rand);
};

for (let i = 0; i < 100; i ++) {
  print( randomRight(1,5) )
};

