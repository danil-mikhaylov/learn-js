// Выводит число каждую секунду, начиная от from до to
function printNumbers(from, to) {
  let result = from; // Изначально ставим result = from
  let timerId = setInterval(() => {
    // Ставим интервал (повторяется каждый timeout
    console.log(result); // Выводим наш результат
    if (result === to) {
      // Если дошли до конца
      clearInterval(timerId); // То убираем интервал
    } else {
      result++; // Увеличиваем реузльтат
    }
  }, 1000); // timeout = 1 sec
}

// Выводит число каждую секунду, начиная от from до to
function printNumbers(from, to) {
  let result = from; // Изначально ставим result = from
  let timerId = setTimeout(function run() {
    console.log(result);
    if (result < to) {
      setTimeout(run, 1000);
    }
    result++;
  }, 1000);
}

printNumbers(1, 10);

// Когда будет запланирована функция и что покажет console.log()?
let i = 0;

setTimeout(() => console.log(i), 100); // 100000000

// предположим, что время выполнения этой функции >100 мс
for (let j = 0; j < 100000000; j++) {
  i++;
}
