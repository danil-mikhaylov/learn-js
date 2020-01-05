'use strict'

// Инструкции разделяются точками с запятой:
alert('Привет'); alert('Мир');

// Точка с запятой не требуется после блоков кода {…} и синтаксических 
// конструкций с ними, таких как, например, циклы:
function f() {
  // после объявления функции необязательно ставить точку с запятой
}
for(;;) {
  // после цикла точка с запятой также необязательна
}

// Переменные
// let 
// const - константа, т.е. изменению не подлежит
// var - устаревший способ, подробности позже

/*

Имя переменной может включать:
Буквы и цифры, однако цифра не может быть первым символом.
Символы $ и _ используются наряду с буквами.
Иероглифы и символы нелатинского алфавита также допустимы, но обычно не используются.

Всего существует 7 типов данных:
number для целых и вещественных чисел,
string для строк,
boolean для логических значений истинности или ложности: true/false,
null – тип с единственным значением null, т.е. «пустое значение» или «значение не существует»,
undefined – тип с единственным значением undefined, т.е. «значение не задано»,
object и symbol – сложные структуры данных и уникальные идентификаторы; их мы ещё не изучили.

Оператор typeof возвращает тип значения переменной, с двумя исключениями:
typeof null == "object" // ошибка в языке
typeof function(){} == "function" // именно для функций

Взаимодействие с посетителем:

prompt(question, [default])
Задаёт вопрос question и возвращает то, что ввёл посетитель, либо null,
если посетитель нажал на кнопку «Отмена».

confirm(question)
Задаёт вопрос question и предлагает выбрать «ОК» или «Отмена». 
Выбор возвращается в формате true/false.

alert(message)
Выводит сообщение message.
Все эти функции показывают модальные окна, они останавливают выполнение кода 
и не позволяют посетителю взаимодействовать со страницей,
пока не будет дан ответ на вопрос.

let userName = prompt("Введите имя", "Алиса");
let isTeaWanted = confirm("Вы хотите чаю?");
alert( "Посетитель: " + userName ); // Алиса
alert( "Чай: " + isTeaWanted ); // true

Операторы:

Простые * + - /, а также деление по модулю % и возведение в степень **.

alert( '1' + 2 ); // '12', строка
alert( 1 + '2' ); // '12', строка

Условный оператор:
Единственный оператор с тремя параметрами: cond ? resultA : resultB.
Если условие cond истинно, возвращается resultA, иначе – resultB.

Логические операторы:
Логические И &&, ИЛИ || используют так называемое «ленивое вычисление» и возвращают значение,
на котором оно остановилось (не обязательно true или false).
Логическое НЕТ ! конвертирует операнд в логический тип и возвращает инвертированное значение.

Сравнение
Проверка на равенство == значений разных типов конвертирует их в число (за исключением null и undefined,
которые могут равняться только друг другу), так что примеры ниже равны:

alert( 0 == false ); // true
alert( 0 == '' ); // true

Циклы:

// 1
while (condition) {
  ...
}

// 2
do {
  ...
} while (condition);

// 3
for(let i = 0; i < 10; i++) {
  ...
}

Переменная, объявленная в цикле for(let...),
видна только внутри цикла. Но мы также можем опустить let и переиспользовать существующую переменную.

Директивы break/continue позволяют выйти из цикла/текущей итерации.
Используйте метки для выхода из вложенных циклов.

labelName: for (;;) { // Вид метки цикла
//    ...
}

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Значение на координатах (${i}, ${j})`);
        if (!input) break outer; // если пустая строка или Отмена, то выйти из обоих циклов
        // do stuff
    }
}

Конструкция «switch»

Конструкция «switch» может заменить несколько проверок if.
При сравнении она использует оператор строгого равенства ===.

let age = prompt('Сколько вам лет?', 18);

switch (age) {
  case 18:
    alert("Так не сработает"); // результатом prompt является строка, а не число

  case "18":
    alert("А так сработает!");
    break;

  default:
    alert("Любое значение, неравное значению выше");
}

Функции:

1. Function Declaration: функция в основном потоке кода
function sum(a, b) {
  let result = a + b;

  return result;
}

2. Function Expression: функция как часть выражения
let sum = function(a, b) {
  let result = a + b;

  return result;
};

3. Стрелочные функции:

// выражение в правой части
let sum = (a, b) => a + b;

// многострочный код в фигурных скобках { ... }, здесь нужен return:
let sum = (a, b) => {
  // ...
  return a + b;
}

// без аргументов
let sayHi = () => alert("Привет");

// с одним аргументом
let double = n => n * 2;

У функций могут быть локальные переменные: т.е. объявленные в теле функции. 
Такие переменные видимы только внутри функции.
У параметров могут быть значения по умолчанию: function sum(a = 1, b = 2) {...}.
Функции всегда что-нибудь возвращают. Если нет оператора return, результатом будет undefined.

*/

