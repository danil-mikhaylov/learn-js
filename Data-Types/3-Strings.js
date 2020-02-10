function sum(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let GuestList = `Guests:
  * John
  * Pete
  * Mary
  `;
console.log(GuestList);

let guestList = "Guests: // Error: Unexpected token ILLEGAL":
* John";

let guestList = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList);

// перевод строки добавлен с помощью символа перевода строки
let str1 = "Hello\nWorld";

// многострочная строка, созданная с использованием обратных кавычек
let str2 = `Hello
World`;

console.log(str1 == str2); // true

// ©
console.log("\u00A9");

// Длинные юникодные коды
// 佫, редкий китайский иероглиф
console.log("\u{20331}");
// 😍, лицо с улыбкой и глазами в форме сердец
console.log("\u{1F60D}");

console.log("I'm the Walrus!"); // I'm the Walrus!
console.log(`I'm the Walrus!`); // I'm the Walrus!
console.log("I'm the Walrus!"); // I'm the Walrus!
console.log(`The backslash: \\`); // The backslash: \ (Если нам нужно добавить к строке "/")

console.log("measdfasdfasdfasdow".length); // 19

let str = `Hello!`;

console.log(str[0]); // H
console.log(str[1]); // e
console.log(str.charAt(1)); // e

for (let char of str) {
  console.log(char);
}

let str = "Hi";

str[0] = "h"; // ошибка
console.log(str[0]); // не работает

let str = "Hi";

str = "h" + str[1]; // заменяем строку

console.log(str); // hi
let Interface = "Interface";

console.log(Interface.toUpperCase()); // INTERFACE
console.log(Interface.toLowerCase()); // interface

console.log(Interface.charAt(0).toLowerCase()); // i
console.log(Interface); // Interface
Interface = Interface[0].toLowerCase() + "nterFace";
console.log(Interface); // interface

let str = "Widget with id";

console.log(str.indexOf("Widget")); // 0, потому что подстрока 'Widget' найдена в начале
console.log(str.indexOf("widget")); // -1, совпадений нет, поиск чувствителен к регистру

console.log(str.indexOf("id")); // 1, подстрока "id" найдена на позиции 1 (..idget with id)

let str = "Widget with id";

console.log(str.indexOf("id", 2));

let str = "Ослик Иа-Иа посмотрел на виадук";

let target = "Иа";

let pos = 0;

while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log(`Found here: ${foundPos}`);
  pos = foundPos + 1;
}

let str = "Widget with id";
if (str.indexOf("Widget")) {
  console.log("There is a match (first case)"); // не работает
}
if (str.indexOf("Widget") != -1) {
  console.log("There is a match (second case)"); // теперь работает
}

console.log(~2); // -3, то же, что -(2+1)
console.log(~1); // -2, то же, что -(1+1)
console.log(~0); // -1, то же, что -(0+1)
console.log(~-1); // 0, то же, что -(-1+1)

let str = "Widget";
if (~str.indexOf("Widget")) {
  // Если в if "0", то он не исполняется. У нас получается, что ~ делается
  // "0", если его аргмуент -- (-1) То есть если совпадений нет, то if не исполнится.
  console.log("Совпадение есть"); // работает
}

console.log("Widget with id".includes("Widget")); // true

console.log("Hello".includes("Bye")); // false

console.log("Midget".includes("id")); // true
console.log("Midget".includes("id", 3)); // false, поиск начат с позиции 3print

console.log("Widget".startsWith("Wid")); // true, "Wid" — начало "Widget"
console.log("Widget".endsWith("get")); // true, "get" — окончание "Widget"

let str = "stringify";
// 'string', символы от 0 до 5 (не включая 5)
console.log(str.slice(0, 5));
// 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
console.log(str.slice(0, 1));

let str = "stringify";
console.log(str.slice(2)); // stringify, с позиции 2 и до конца

let str = "stringify";

// начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа
console.log(str.slice(-4, -1)); // gif

let str = "stringify";

// для substring эти два примера — одинаковы
console.log(str.substring(2, 6)); // "ring"
console.log(str.substring(6, 2)); // "ring"

// …но не для slice:
console.log(str.slice(2, 6)); // "ring" (то же самое)
console.log(str.slice(6, 2)); // "" (пустая строка)

let str = "stringify";
// ring, получаем 4 символа, начиная с позиции 2
console.log(str.substr(2, 4));

let str = "stringify";
// gi, получаем 2 символа, начиная с позиции 4 с конца строки
console.log(str.substr(-4, 2));

let str = "";

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
console.log(str);
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

console.log("Österreich".localeCompare("Zealand")); // -1

let str = "123";
console.log(str.repeat(5));

function ucFirst(str) {
  if (!str) return str;
  let newStr = str.charAt(0).toUpperCase() + str.slice(1);
  return newStr;
}

console.log(ucFirst("john"));

function checkSpam(str) {
  if (
    str.toLowerCase().includes("viagra") ||
    str.toLowerCase().includes("xxx")
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

function truncate(str, maxlength) {
  let newStr;
  if (str.length <= maxlength) {
    newStr = str;
  } else {
    newStr = str.slice(0, maxlength - 1) + "...";
  }
  return newStr;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));

function extractCurrencyValue(str) {
  return parseInt(str.slice(1)); // Отрезаем первый символ, затем превращаем строку в число
}

console.log(extractCurrencyValue("$120"));
console.log(typeof extractCurrencyValue("$120"));