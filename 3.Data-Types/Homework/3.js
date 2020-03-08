// Делаем первый символ заглавным
function ucFirst(str) {
  if (!str) return str; // Если строка = false (пустая), то вернуть её же и выйти из функции
  // Новая = Первый большой символ старой + оставшаяся часть старой
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(ucFirst("john")); // John

// Если есть 'viagra' || 'xxx', то вернуть true, иначе -- false
function checkSpam(str) { // Принимаем строку в качестве аргумента
  if ( // Если маленькая строка содержит:
    str.toLowerCase().includes("viagra") ||
    str.toLowerCase().includes("xxx")
  ) {
    return true; // Возвращаем true, соответственно
  } else {
    return false; // Иначе false
  }
}

console.log(checkSpam("buy ViAgRA now")); // true
console.log(checkSpam("free xxxxx")); // true
console.log(checkSpam("innocent rabbit")); // false

// Обрезаем строку, если она содержит больше, чем задано maxLength
function truncate(str, maxlength) { // Принимаем строку и максимальный размер строки
  let newStr; // Создаём новую строку, которую и будем возвращать
  if (str.length <= maxlength) { // Если длина текущей меньше, чем максимальная длина
    return str; // То просто возвращаем строку, так как всё у нас хорошо
  } else { // Иначе
    // Старая строка, отсечённая по maxlength - 1 + троеточие
    return str.slice(0, maxlength - 1) + "...";
  }
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)); // Вот, что мне хотело...
console.log(truncate("Всем привет!", 20)); // Всем привет!

// Выделяем число
function extractCurrencyValue(str) {
  return parseInt(str.slice(1)); // Отрезаем первый символ, затем превращаем строку в число
}

console.log(extractCurrencyValue("$120")); // 120
console.log(typeof extractCurrencyValue("$120")); // number
