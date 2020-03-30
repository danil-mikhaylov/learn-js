function loadScript(src) {
  let script = document.createElement("script");
  script.src = src;
  document.head.append(script);
}

// Загрузит и выполнит скрипт
loadScript("/home/user/Desktop/test.js");
// код, написанный после вызова функции loadScript,
// не будет дожидаться полной загрузки скрипта
// ...

// Сейчас скрипт ещё не загрузился, поэтому функции ещё нет:
loadScript("/home/user/Desktop/test.js"); // в скрипте есть "function newFunction() {…}"

newFunction(); // такой функции не существует!

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);

  document.head.append("script");
}

loadScript("/my/script.js", function () {
  // эта функция вызовется после того, когда загрузится скрипт
  newFunction(); // теперь всё работает
  // ...
});

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
  (script) => {
    console.log(`Здорово, скрипт ${script.src} загрузился`);
    console.log(_); // функция, объявленная в загруженном скрипте
  }
);

// Если надо загрузить несколько (!) скриптов, то делаем так:
loadScript("/my/script.js", function (script) {
  console.log(`Здорово, скрипт ${script.src} загрузился, загрузим ещё один`);

  loadScript("/my/script2.js", function (script) {
    console.log(`Здорово, второй скрипт загрузился`);
  });
});

// 3 скрипта:
loadScript("/my/script.js", function (script) {
  loadScript("/my/script2.js", function (script) {
    loadScript("/my/script3.js", function (script) {
      // ...и так далее, пока все скрипты не будут загружены
    });
  });
});

// Обработка ошибок:
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () =>
    callback(new Error(`Не удалось загрузить скрипт ${src}`));

  document.head.append(script);
}

loadScript("/my/script.js", function (error, script) {
  if (error) {
    // обрабатываем ошибку
  } else {
    // скрипт успешно загружен
  }
});

// Пирамида вызовов:
loadScript("1.js", function (error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript("2.js", function (error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript("3.js", function (error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...и так далее, пока все скрипты не будут загружены (*)
          }
        });
      }
    });
  }
});

// Исправление пирамиды, но тоже плохой вариант:
loadScript("1.js", step1);

function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript("2.js", step2);
  }
}

function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript("3.js", step3);
  }
}

function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...и так далее, пока все скрипты не будут загружены (*)
  }
}
