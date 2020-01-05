// let arr = ["Я", "изучаю", "JavaScript"];

// arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент

// print( arr ); // осталось ["Я", "JavaScript"]


// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// arr.splice(0, 3, "Давай", "танцевать");

// print(arr)


let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// удалить 2 первых элемента
let removed = arr.splice(0, 2);

print( removed ); // "Я", "изучаю" <-- массив из удалённых элементов
