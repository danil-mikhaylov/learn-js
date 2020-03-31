// promise.then(f1, f2);
/** Промисы: сравните then и catch
 * Являются ли фрагменты кода ниже эквивалентными?
 * Ведут ли они себя одинаково во всех обстоятельствах, для всех переданных им обработчиков?
 */

promise.then(f1).catch(f2); // Если ошибка происходит в f1, она передаётся в catch(f2)
promise.then(f1, f2); // Если ошибка произойдёт в f1, то она останется необработанной
