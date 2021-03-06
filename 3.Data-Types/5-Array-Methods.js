let arr = ["Я", "изучаю", "JavaScript"];

arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент

console.log(arr); // осталось ["Я", "JavaScript"]

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

arr.splice(0, 3, "Давай", "танцевать");

console.log(arr);

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// удалить 2 первых элемента
let removed = arr.splice(0, 2);
console.log(removed); // "Я", "изучаю" <-- массив из удалённых элементов

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

companies.forEach(company => {
  console.log(company.name);
});

// filter

// Get 21 and older

let canDrink = [];

for (let i = 0; i < ages.length; i++) {
  // [33, 54, 21, 44, 61, 45, 25, 64, 32]
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}

let canDrink = ages.filter(age => {
  // [33, 54, 21, 44, 61, 45, 25, 64, 32]
  if (age >= 21) {
    return true;
  }
});

const canDrink = ages.filter(age => age >= 21); // [33, 54, 21, 44, 61, 45, 25, 64, 32]

// Filter retail companies

const retailCompanies = companies.filter(company => {
  if (company.category === "Retail") {
    return true;
  }
});

const retailCompanies = companies.filter(
  company => company.category === "Retail"
);

// Get 80s companies

const eightiesCompanies = companies.filter(
  company => company.start >= 1980 && company.start < 1990
);

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(
  company => company.end - company.start >= 10
);

// map

// Create array of company names

const testMap = companies.map(function(company) {
  return `${company.name} [${company.start} - ${company.end}]`;
});

const testMap = companies.map(
  company => `${company.name} [${company.start} - ${company.end}]`
);

const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);

console.log(ageMap);

// sort

// Sort companies by start year

const sortedCompanies = companies.sort(function(c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

// Sort ages

const sortedAges = ages.sort((a, b) => (b > a ? 1 : -1));
const sortedAgesSimple = ages.sort((a, b) => a - b);
console.log(sortedAgesSimple);

// Reduce

let ageSum = 0;

for (let age of ages) {
  ageSum += age;
}

const ageSum = ages.reduce(function(total, age) {
  return total + age;
}, 0);

const ageSum = ages.reduce((total, age) => total + age, 0);

// Get total years for all companies

const totalYears = companies.reduce(function(total, company) {
  return total + (company.end - company.start);
}, 0);

const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

console.log(totalYears);

// Combine methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((total, currentAge) => total + currentAge, 0);

console.log(combined);

// Creating random array

const randomArray = creatingRandomArray(10);
function creatingRandomArray(count) {
  let array = [];
  for (let i = 0; i < count; i++) {
    array.push(Math.round(Math.random() * 100));
  }
  return array;
}

// Creating filtered sorted (perfect) random array

const perfectRandomArray = randomArray
  .filter(num => num > 5 && num < 95)
  .sort((a, b) => a - b);

// Get the sum of the elements of randomArray

const sumRandomArray = randomArray.reduce(
  (total, currentNumber) => total + currentNumber
);

// Get the sum of the elements of perfectRandomArray

const sumPerfectRandomArray = perfectRandomArray.reduce(
  (total, currentNumber) => total + currentNumber
);

console.log(sumRandomArray > sumPerfectRandomArray);

const number = [1, -1, 2, 3];

const items = number
  .filter(num => num >= 0)
  .map(num => ({ value: num }))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value);
console.log(items);

let arr = ["Я", "изучаю", "JavaScript"];

arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент

console.log(arr); // осталось ["Я", "JavaScript"

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
arr.splice(0, 3, "Давай", "танцевать");
console.log(arr); // Давай,танцевать,прямо,сейчас

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
let removed = arr.splice(0, 3, "Давай", "танцевать");
console.log(removed); // ["Я", "изучаю", "JavaScript"]

let arr = ["Я", "изучаю", "JavaScript"];
arr.splice(2, 0, "сложный", "язык");
console.log(arr); // ["Я", "изучаю", "сложный", "язык", "JavaScript"]

let arr = [1, 2, 5];
// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
arr.splice(-1, 0, 3, 4);
console.log(arr); // 1,2,3,4,5

let arr = ["t", "e", "s", "t"];
let slicedArray = arr.slice(1, 3);
console.log(slicedArray); // ["e", "s"]

let arr = [1, 2];
console.log(arr.concat([3, 4])); // [1, 2, 3, 4]
console.log(arr.concat(3, 4)); // [1, 2, 3, 4]

let arr = [1, 2];

let arrayLike = {
  0: "что-то",
  length: 1
};

console.log(arr.concat(arrayLike)); // 1,2,[object Object]

/*
arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.
arr.lastIndexOf(item, from) — то же самое, но ищет справа налево.
arr.includes(item, from) — ищет item, начиная с индекса from, и возвращает true, если поиск успешен.
 */

const arr = [NaN];
console.log(arr.indexOf(NaN)); // -1 (должен быть 0, но === проверка на равенство не работает для NaN)
console.log(arr.includes(NaN)); // true (верно)

let names = "Вася, Петя, Маша";

let arr = names.split(", ");

for (let name of arr) {
  console.log(`Сообщение получат: ${name}.`); // Сообщение получат: Вася (и другие имена)
}

let arr = "Вася, Петя, Маша, Саша".split(", ", 2);

console.log(arr); // Вася, Петя