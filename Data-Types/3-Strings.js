// function sum(a, b) {
//   return a + b;
// }

// print(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// let GuestList = `Guests:
//   * John
//   * Pete
//   * Mary
//   `;
// print(GuestList);

// let guestList = "Guests: // Error: Unexpected token ILLEGAL
//   * John";

// let guestList = "Guests:\n * John\n * Pete\n * Mary";

// print(guestList);

// // перевод строки добавлен с помощью символа перевода строки
// let str1 = "Hello\nWorld";

// // многострочная строка, созданная с использованием обратных кавычек
// let str2 = `Hello
// World`;

// print(str1 == str2); // true

// // ©
// print( "\u00A9" );

// // Длинные юникодные коды
// // 佫, редкий китайский иероглиф
// print( "\u{20331}" );
// // 😍, лицо с улыбкой и глазами в форме сердец
// print( "\u{1F60D}" );

// print('I\'m the Walrus!') // I'm the Walrus!
// print( `I'm the Walrus!` ); // I'm the Walrus!
// print( "I'm the Walrus!" ); // I'm the Walrus!
// print( `The backslash: \\` ); // The backslash: \ (Если нам нужно добавить к строке "/")

// print("measdfasdfasdfasdow".length); // 19

// let str = `Hello!`;

// print(str[0]) // H
// print(str[1]) // e
// print(str.charAt(1)) // e

// for (let char of str) {
//   print(char)
// }

// let str = 'Hi';

// str[0] = 'h'; // ошибка
// alert( str[0] ); // не работает

// let str = 'Hi';

// str = 'h' + str[1]; // заменяем строку

// alert( str ); // hi
// let Interface = 'Interface'

// print(Interface.toUpperCase()); // INTERFACE
// print(Interface.toLowerCase()); // interface

// print(Interface.charAt(0).toLowerCase()); // i
// print(Interface) // Interface
// Interface = Interface[0].toLowerCase() + "nterFace"
// print(Interface) // interface


// let str = 'Widget with id';

// print( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
// print( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру

// print( str.indexOf("id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)

// // let str = 'Widget with id';

// print( str.indexOf('id', 2) );

// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа';

// let pos = 0;

// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   print( `Found here: ${foundPos}` );
//   pos = foundPos + 1;
// }

// let str = "Widget with id";
// if (str.indexOf("Widget")) {
//   print('There is a match (first case)'); // не работает
// }
// if (str.indexOf("Widget") != -1) {
//   print('There is a match (second case)'); // теперь работает
// }

// print( ~2 ); // -3, то же, что -(2+1)
// print( ~1 ); // -2, то же, что -(1+1)
// print( ~0 ); // -1, то же, что -(0+1)
// print( ~-1 ); // 0, то же, что -(-1+1)

// let str = "Widget";
// if (~str.indexOf("Widget")) { // Если в if "0", то он не исполняется. У нас получается, что ~ делается
//                               // "0", если его аргмуент -- (-1) То есть если совпадений нет, то if не исполнится.
//   print( 'Совпадение есть' ); // работает
// }

// print( "Widget with id".includes("Widget") ); // true

// print( "Hello".includes("Bye") ); // false

// print( "Midget".includes("id") ); // true
// print( "Midget".includes("id", 3) ); // false, поиск начат с позиции 3print

// print( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
// print( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"


// let str = "stringify";
// // 'strin', символы от 0 до 5 (не включая 5)
// print( str.slice(0, 5) );
// // 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
// print( str.slice(0, 1) );


// let str = "stringify";
// print( str.slice(2) ); // ringify, с позиции 2 и до конца


// let str = "stringify";

// // начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа
// print( str.slice(-4, -1) ); // gif


// let str = "stringify";

// // для substring эти два примера — одинаковы
// print( str.substring(2, 6) ); // "ring"
// print( str.substring(6, 2) ); // "ring"

// // …но не для slice:
// print( str.slice(2, 6) ); // "ring" (то же самое)
// print( str.slice(6, 2) ); // "" (пустая строка)


// let str = "stringify";
// // ring, получаем 4 символа, начиная с позиции 2
// print( str.substr(2, 4) );

// let str = "stringify";
// // gi, получаем 2 символа, начиная с позиции 4 с конца строки
// print( str.substr(-4, 2) );

// let str = '';

// for (let i = 65; i <= 220; i++) {
//   str += String.fromCodePoint(i);
// }
// alert( str );
// // ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// // ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

// print( 'Österreich'.localeCompare('Zealand') ); // -1

// let str = '123';
// print(str.repeat(5));


// function ucFirst(str) {
//   if (!str) return str;
//   let newStr = str.charAt(0).toUpperCase() + str.slice(1);
//   return newStr;
// }

// print( ucFirst('john') );


function checkSpam(str) {
  if (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')) {
    return true;
  } else {
    return false;
  }
}

print( checkSpam('buy ViAgRA now') );
print( checkSpam('free xxxxx') );
print( checkSpam("innocent rabbit") );


function truncate(str, maxlength) {
  let newStr;
  if (str.length <= maxlength) {
    newStr = str;
  } else {
    newStr = str.slice(0, maxlength - 1) + '...'
  }
  return newStr;
}

print( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
print( truncate("Всем привет!", 20) );


function extractCurrencyValue(str) {
  return parseInt(str.slice(1)); // Отрезаем первый символ, затем превращаем строку в число
}

print( extractCurrencyValue('$120') );
print(typeof extractCurrencyValue('$120') );