// Взаимодействие: console.log, prompt, confirm

console.log("Hello"); // Останавливает все скрипты

let isBoss = confirm("Ты здесь главный?"); // isBoss = true если "OK" нажата и равна false if "cancel" pr.
console.log(isBoss); // true, because "OK" is pressed

let age = prompt("Сколько тебе лет?", 100);
console.log(`Тебе ${age} лет!`); // Тебе 100 лет!
/*
  Если ничего не введено, то вернётся 100
  Если ничего не введено, вернётся null
 */
