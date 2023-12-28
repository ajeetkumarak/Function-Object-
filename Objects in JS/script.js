"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Meriona",
  location: "New Delhi, IN",
  categories: ["Italian", "South", "Vegetarian", "Organic"],
  starterMenu: ["GArlic Bread", "Salad", "Focaccia", "Bruschetta"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // openingHours: openingHours,  we use ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order delivered! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon);
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri);

if (restaurant && restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
if (restaurant && restaurant.openingHours && restaurant.openingHours.fri)
  console.log(restaurant.openingHours.fri.open);

//with optional chaining

console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours?.fri?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  // console.log(day);
  // const open = restaurant.openingHours[day]?.open || "closed";
  const open = restaurant.openingHours[day]?.open ?? "closed";

  console.log(open);
  if (open === "closed") {
    console.log(` on ${day}, we are closed..`);
  } else {
    console.log(`On ${day}, we open at ${open}`);
  }
}
// OPtional chaining on methods

console.log(restaurant.order?.(0, 2) ?? "Methods does not exists");
console.log(restaurant.orderRisotto?.(0, 2) ?? "Methods does not exists");

// optional chaining on Arrays

const users = [{ name: "Jonas", email: "hello.outlook.io" }];
console.log(users[0]?.name ?? "User array empty");

if (users.length > 0) console.log(users[0].name);
else console.log("User array empty");
//

restaurant.orderPizza("onion", "mushroom", "chillies", "tomatoes", "masale");
restaurant.orderDelivery({
  time: "22:30",
  address: "via del sea, 22",
  mainIndex: 1,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "marine drive mumbai, IN",
  starterIndex: 1,
});
//
// const ingredients = [
//   prompt("Let's make pasta! ingredients 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);
//
// objects
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: "Martin Luther",
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);
restaurantCopy.name = "Maria Gold Hotel";
console.log(restaurantCopy.name, restaurant.name);

//
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//
//
//
//
const array = [4, 5, 8, 9, 10];
const badArr = [1, 2, array[0], array[1], array[2]];
console.log(badArr);
console.log(...array);
const newArr = [1, 2, 3, ...array];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, "Momose", "Samosa"];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(allMenu);

//
const str = "Ajeet Kumar";
console.log(...str);
const letters = [...str, " ", "s."];
console.log(letters);
//
//
//
//
//SPREAD, because of RIGHT side of assignment operator(=)
const numbers = [12, 25, 36, 69, ...[8, 9, 5, 2]];

// REST Pattern, because of LEFT side of assignment operator(=)
const [num1, num2, ...others] = [9, 8, 7, 4, 5, 20];
console.log(num1, num2, others);
const [...anothers] = [...numbers];
console.log(anothers);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//
//
// for objects
// const { fri, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
//
// functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(4, 5, 8);
add(4, 5, 8, 9, 6, 23, 1);
add(78, 12, 5, 2, 6, 3);
const n = [12, 23, 56, 45, 50];
add(...n);
//

//
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
console.log(a, b);

const [x, y, z] = arr;
console.log(x, y, z);

const [first, , second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// console.log(temp);
// main = secondary;
// secondary = temp;
// console.log(temp);
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));
const [starter, mainCorse] = restaurant.order(2, 1);
console.log(starter, mainCorse);

const nested = [2, 4, 5, [8, 9, 10]];
const [i, , , j] = nested;
console.log(i, j);
const [p, , , [q, , r]] = nested;
console.log(p, q, r);

// Short Circuiting
console.log("----OR----");

console.log(5 || "Ajeet");
console.log(undefined || "");
console.log(true || "");
console.log(undefined || null);
console.log(undefined || 0 || "" || "hello" || 8 || 0 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
// NULLISH Coalescing Operator
// if restaurant.numGuests = 0
const guests = restaurant.numGuests ?? 10;
console.log(guests);

console.log("----AND----");
console.log(0 && "Ajeet");
console.log(7 && "Ajeet");
console.log("Hello" && 8 && null && "jonas");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach", "garlic", "bread");
}
restaurant.orderPizza &&
  restaurant.orderPizza("mushrooms", "spinach", "garlic", "bread");

const menuItems = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menuItems) console.log(item);

console.log(arr);
for (const element of arr) console.log(element);
for (const element of arr.entries()) {
  console.log(element);
}
console.log([...arr.entries()]);
for (const [i, element] of arr.entries()) {
  console.log(`index ${i}: ${element}`);
}

for (const item of menuItems.entries()) {
  console.log(`${item[0] + 1}: ${item[1]} `);
}
for (const [i, item] of menuItems.entries()) {
  console.log(`${i + 1} : ${item}`);
}

//Properties NAMES

const properties = Object.keys(openingHours);
console.log(properties);
console.log(`We are open on ${properties.length} days..`);

let openStr = `We are open on ${properties.length} days: `;
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Properties Values
const values = Object.values(openingHours);
console.log(values);

for (const value of values) {
  console.log(value);
  console.log(`open: ${value.open}`, `close: ${value.close}`);
}

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(x);
  console.log(`On ${key} we open at  ${open} and close at ${close} `);
}

// sets
const ordersSet = new Set(["Pasta", "Pizza", "Risotto", "Pizza", "Risotto"]);
console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Dorito"));
console.log(ordersSet.add("Dorito"));

ordersSet.add("garlic Bread");
console.log(ordersSet.add("mushroom"));

ordersSet.delete("Dorito");
// ordersSet.clear();
console.log(ordersSet);

// looping over sets
for (const order of ordersSet) console.log(order);
// examples
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = new Set(staff);
console.log(staffUnique);

// conversion of set into array
const unique = [...new Set(staff)];
console.log(unique);

//
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("Ajeet Kumar").size);

// Maps
const rest = new Map();
rest.set("name", "Classico SSM");
rest.set(1, "Durga Mandir, ssm");
console.log(rest.set(2, "Bihar, IN"));

rest
  .set("categories", ["Italian", "South", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :)")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

//
const time = 22;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
console.log(rest.delete(2));
console.log(rest);

//
const ar = [1, 2];
// rest.set([1, 5], "Test");
rest.set(ar, "Test");
console.log(rest);
console.log(rest.size);

rest.set(document.querySelector(".container"), "Heading");
// console.log(rest.get([1, 5]));
console.log(rest.get(ar));
console.log(rest);

//
const question = new Map([
  ["question", "What is the best programming language in the world ?"],
  [1, "C++"],
  [2, "Javascript"],
  [3, "Java"],
  ["correct", 3],
  [true, "Correct :)"],
  [false, "Try Again :("],
]);
console.log(question);

console.log(Object.entries(openingHours));

//conerting object to maps
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// iteration on maps
for (const hour of hoursMap) console.log(hour);
for (const [key, value] of hoursMap) console.log(key, value);
for (const [key, { open, close }] of hoursMap) console.log(key, open, close);

//
console.log(question.get("question"));
for (const [key, value] of question) {
  // console.log(typeof key);
  if (typeof key === "number") {
    console.log(`${key}: ${value}`);
  }
}
const answer = 3;
// const answer = Number(prompt("Your answer.. .."));
// const answer = question.get(Number(prompt("Your answer.. ..")));
console.log(answer);
console.log(question.get(question.get("correct") === answer));

// conversion map back to Array
const mapToArray = [...question];
console.log(mapToArray);
// methods on arrays are : ---
console.log([...question.entries()]);
console.log([...question.keys()]);
// console.log([mapToArray.keys()]);
// console.log([...question.values()]);
console.log(...[mapToArray.keys()]);

//  Strings
const airline = "TAP Air India";
const plane = "A373";

console.log(plane[0]);
console.log(plane[2]);
console.log(airline[4]);

console.log(airline.length);
console.log("B767".length);

console.log(airline.indexOf("i"));
console.log(airline.lastIndexOf("i"));
console.log(airline.indexOf("Air"));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log(
      `You get middle seat in our plane ${plane} of ${airline} airline.`
    );
  } else {
    console.log(`You got lucky :)`);
  }
};
checkMiddleSeat("11B");
checkMiddleSeat("25C");
checkMiddleSeat("34E");
checkMiddleSeat("3E");

console.log(new String("Ajeet"));
console.log(typeof new String("Ajeet"));
console.log(typeof new String("Ajeet").slice(-2));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = "jOnAS";
const passengerUpper = passenger.toLocaleUpperCase();
console.log(passengerUpper);

const passengerLower = passenger.toLocaleLowerCase();
console.log(passengerLower);

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing emails
const email = "hello@aj.io";
const loginEmail = "   Hello@js.IO  \n";
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(trimmedEmail, normalizedEmail === email, normalizedEmail);

// replacing
const priceGB = "299,97€";
const priceUS = priceGB.replace("€", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to barding door 21. Boarding door 21!!";
console.log(announcement.replaceAll("door", "gate"));
// const abc = "      Ajeet Kumar  \n";
// const bcd = abc.toLowerCase().trim();
// console.log(bcd);
console.log("abc".replace("ab", "de"));

console.log(announcement.replace(/door/g, "gate"));

// Boolean
const plane1 = "Airbus A321neo";
console.log(plane1.includes("321"));
console.log(plane1.includes("A321"));
console.log(plane1.includes("eo"));
console.log(plane1.includes(321));

console.log(plane1.startsWith("A321e"));

if (plane1.startsWith("Airbus") && plane1.endsWith("neo")) {
  console.log("Part of the NEW Airbus Family");
}

// practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("gun") || baggage.includes("knife")) {
    console.log("You are NOT allowed to board.. ");
  } else console.log("Welcome aboard");
};

checkBaggage("Socks and Camera and it's accerories");
checkBaggage("Got some smacks and a gun for protection");
checkBaggage("I have a laptop, some food and a pocket Knife");

//
console.log("a+ very+good+morning+boys".split("+"));
console.log("Ajeet Kumar is on web.".split(" "));

const [firstName, lastName, , , place] = "Ajeet Kumar is on Web.".split(" ");
console.log(firstName, lastName, place);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);
console.log(`- - - -  -- - - - - - - - -  - -  -  - - `);
const capitalizeName = function (name) {
  const newName = [];

  const nameArray = name.split(" ");
  // console.log(nameArray);
  for (const element of nameArray) {
    const firstLetter = element[0].toUpperCase();
    const correctName = firstLetter + element.slice(1);
    // console.log(correctName);
    newName.push(correctName);
  }
  // console.log(newName);
  console.log(newName.join(" "));
};
capitalizeName("Jessica ann smith davis");
capitalizeName("ajeet kumar singh");

const capitalizeMe = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  // console.log(namesUpper);
  console.log(namesUpper.join(" "));
};

capitalizeMe("Jessica ann smith davis");
capitalizeMe("ajeet kumar singh");

// Padding
const message = "Go to gate 22";
console.log(message.padStart(29, "+"));
console.log("Ajjeet".padStart(29, "+"));

console.log(message.padEnd(21, "*f"));
console.log("ajeet".padEnd(30, "&"));

const maskCreditCard = function (number) {
  // const str = String(number);
  const str = number + "";
  const lastDigits = str.slice(str.length - 4);
  console.log(lastDigits);
  const mask = lastDigits.padStart(str.length, "*");
  console.log(mask);
};
maskCreditCard(5812365478925840);
maskCreditCard(5859494564621044);

// Repeat
const messageWeather = "Bad Weather... All Departures Delayed....";
console.log(messageWeather.repeat(10));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛫".repeat(n)}. . . `);
};
planesInLine(11);
planesInLine(15);
planesInLine(5);
