// Создаём объект даты 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
let d = new Date(2012, 1, 20, 3, 12);
console.log(d);

// Показываем день недели
function getWeekDay(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]; // Массив дней недели

  return days[date.getDay()]; // getDays() даёт номер дня, соответствующему days
}

let date = new Date(2020, 2, 8); // 8 марта 2020 года
console.log(getWeekDay(date)); // ВС

// День недели в европейской нумерации
let date = new Date(2012, 0, 3); // 3 января 2012 года
function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    // день недели 0 (воскресенье) в европейской нумерации будет 7
    day = 7;
  }

  return day;
}
console.log(getLocalDay(date)); // вторник, нужно показать 2

// Какой день месяца был много дней назад?
function getDateAgo(date, days) {
  let dateCopy = new Date(date); // Создаём копиую даты, которую мы передали

  dateCopy.setDate(date.getDate() - days); // Отнимаем от dateCopy дни и записываем в dateCopy
  return dateCopy.getDate(); // Возвращаем дату из dateCopy
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)

// Вычисляем последнее число месяца
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 0)); // 31
console.log(getLastDayOfMonth(2012, 1)); // 29
console.log(getLastDayOfMonth(2013, 1)); // 28

// Функция, возвращающая количество секунд, прошедших с начала сегодняшнего дня
function getSecondsToday() {
  let now = new Date(); // Создаём дату "сейчас"

  // создаём объект с текущими днём/месяцем/годом
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // разница в миллисекундах
  return Math.round(diff / 1000); // получаем секунды
}

console.log(getSecondsToday());

// Функция, которая возвращает количество секунд до завтра
function getSecondsToTomorrow() {
  let now = new Date();

  // завтрашняя дата
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorrow - now; // разница в миллисекундах
  return Math.round(diff / 1000); // преобразуем в секунды
}

/*
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
 */
function formatDate(date) {
  let diff = new Date() - date; // разница в миллисекундах

  if (diff < 1000) {
    // меньше 1 секунды
    return "прямо сейчас";
  }

  let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

  if (sec < 60) {
    return sec + " сек. назад";
  }

  let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
  if (min < 60) {
    return min + " мин. назад";
  }

  // отформатировать дату
  // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    "" + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes()
  ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

  // соединить компоненты в дату
  return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
}

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
