// let arr = ["Я", "изучаю", "JavaScript"];

// arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент

// print( arr ); // осталось ["Я", "JavaScript"]


// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// arr.splice(0, 3, "Давай", "танцевать");

// print(arr)

// git works

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// // удалить 2 первых элемента
// let removed = arr.splice(0, 2);
// print( removed ); // "Я", "изучаю" <-- массив из удалённых элементов


const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// forEach

// for (let i = 0; i < companies.length; i++) {
//   console.log( companies[i] );
// }

// companies.forEach( (company) => {
//   console.log(company.name);
// });

// filter

// Get 21 and older

// let canDrink = [];

// for (let i = 0; i < ages.length; i++) { // [33, 54, 21, 44, 61, 45, 25, 64, 32]
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// };

// let canDrink = ages.filter( (age) => { // [33, 54, 21, 44, 61, 45, 25, 64, 32]
//   if (age >= 21) {
//     return true;
//   }
// });

// const canDrink = ages.filter( age => age >= 21 ); // [33, 54, 21, 44, 61, 45, 25, 64, 32]

// Filter retail companies

// const retailCompanies = companies.filter( (company) => {
//   if (company.category === 'Retail') {
//     return true;
//   }
// });

// const retailCompanies = companies.filter( company => company.category === 'Retail' );

// // Get 80s companies

// const eightiesCompanies = companies.filter( company => company.start >= 1980 && company.start < 1990);

// // Get companies that lasted 10 years or more

// const lastedTenYears = companies.filter( company => (company.end - company.start) >= 10 );

// map

// Create array of company names

// const testMap = companies.map( function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map( company => `${company.name} [${company.start} - ${company.end}]`);

// const ageMap = ages
//   .map( age => Math.sqrt(age) )
//   .map( age => age * 2 );

// console.log(ageMap);

// sort

// Sort companies by start year

// const sortedCompanies = companies.sort( function(c1,c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const sortedCompanies = companies.sort( (a, b) => (a.start > b.start ? 1 : -1) );
console.log(sortedCompanies);

// Sort ages

const sortedAges = ages.sort( (a, b) => (b > a ? 1 : -1) );
console.log(sortedAges);