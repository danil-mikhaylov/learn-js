// Interaction: alert, prompt, confirm

console.log("Hello"); // stops scripts

let isBoss = confirm("Ты здесь главный?"); // isBoss = true if "OK" is pressed and equals to false if "cancel" pr.
console.log(isBoss); // true, because "OK" is pressed

let age = prompt("Сколько тебе лет?", 100);
console.log(`Тебе ${age} лет!`); // Тебе 100 лет!
/*
  If 100 is entered, then 100 will be returned.
  If nothing is entered, then 'null' will be returned.
 */