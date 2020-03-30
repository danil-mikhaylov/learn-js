/** Анимация круга с помощью колбэка
 * Есть код для анимации появления круга
 * Нужно добавить сообщение, когда круг достигнет апогея роста
 * В том решении showCircle(cx, cy, radius) рисовала круг, но способа узнать, что всё готово, не было
 * Добавить колбэк showCircle(cx, cy, radius, callback), который выполним, когда анимация будет завершена
 */
// showCircle(150, 150, 100, div => {
//   div.classList.add('message-ball');
//   div.append("Hello, world!");
// });

  function showCircle(cx, cy, radius, callback) {
    let div = document.createElement("div");
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + "px";
    div.style.top = cy + "px";
    div.className = "circle";
    document.body.append(div);

    setTimeout(() => {
      div.style.width = radius * 2 + "px";
      div.style.height = radius * 2 + "px";
    }, 0);
    callback(div);
  }
