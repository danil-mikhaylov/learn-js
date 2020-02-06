const foo = { name: "tom", age: 30, nervous: false };
const bar = { name: "dick", age: 40, nervous: false };
const baz = { name: "harry", age: 50, nervous: true };

console.log(foo);
console.log(bar);
console.log(baz);

// Computed property names
console.log({ foo, bar, baz });
console.log("%c My friends", "color: orange; font-size: 20px;");

// console.table(...);
console.table([foo, bar, baz]);

// console.time(...);
console.time("looper");

let i = 0;
while (i < 10000000) {
  i++;
}

console.timeEnd("looper"); // looper: 6.576ms

// function args

const turtle = {
  name: "Bob",
  legs: 4,
  shell: true,
  type: "amphibious",
  meal: 10,
  diet: "berries"
};

// BAD CODE
function feed(animal) {
  return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
}

// GOOD CODE

function feedRight({ name, meal, diet }) {
  return `Feed ${name} ${meal} kilos of ${diet}`;
}

function feedRightSecond(animal) {
  const { name, meal, diet } = animal;
  return `Feed ${name} ${meal} kilos of ${diet}`;
}

const horse = {
  name: "Topher 🐴",
  size: "large",
  skills: ["jousting", "racing"],
  age: 7
};

// 'Bad String Code 💩'

let bio =
  horse.name +
  " is a " +
  horse.size +
  " horse skilled in " +
  horse.skills.join(" & ");

// 'Good String Code ✅'

const { name, size, skills } = horse;

bio = `${name} is a ${size} skilled in ${skills.join(" & ")}`;

console.log(bio);

// Objects

const pikachu = { name: "Pikachu 🐹" };
const stats = { hp: 40, attack: 60, defense: 45 };

// 'Bad Object Code 💩'

pikachu["hp"] = stats.hp;
pikachu["attack"] = stats.attack;
pikachu["defense"] = stats.defense;

// OR

const lvl0 = Object.assign(pikachu, stats);
const lvl1 = Object.assign(pikachu, { hp: 45 });

// 'Good Object Code ✅'

const lvl10 = { ...pikachu, ...stats };
const lvl11 = { ...pikachu, hp: 45 };

// Arrays

let pokemon = ["Arbok", "Raichu", "Sandshrew"];

// 'Bad Array Code 💩'

pokemon.push("Bulbasaur");
pokemon.push("Metapod");
pokemon.push("Weedle");

// 'Good Array Code ✅'

// Push
pokemon = [...pokemon, "Bulbasaur", "Metapod", "Weedle"];

