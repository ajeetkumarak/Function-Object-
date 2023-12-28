"use strict";
// alert("hello world");
// if (js === "amazing") alert("very amezing programming language...");

//  js is a high level language, object-oriented, multi-paradigm programming language
// js provide dynamic effects and web application  in the browser
//  js  also run outside of web  browsers  i..e. it ''s  poossible  to  use javascript on a web server USINGG AA VEERY PPOPULAR TECHNNOLOGGYY CALLEDD nODE.JS which doess need anny bbrowser aad this alloww us to create so calleed backkeend applicaation which are simply aapplicaations that run oon a web serverr annd  innteractt wwith databbaasess annd stuuff like  thhatt
//  frontend aplliccattionns run on browsserrs

// variable is basically a box into which we store values

let js = "amazing";
console.log(45 + 85 + 986);
console.log("jonas");
console.log(12);

// variable names can only contain letter , number, underscores or dollar sign
//
// new is reserved keyword in javascript
//  let new = 41;
//  let function = "functionssss"
//  let name = "Ajeet Singh"
//

let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

// Datatypes
//  there are 07 types of datatypes
console.log(true);
let isAlive = true;
console.log(isAlive);

console.log(typeof isAlive);
console.log(typeof true);
console.log(typeof 90);
console.log(typeof "Aj");

isAlive = "Yes!";

console.log(isAlive);
console.log(typeof isAlive);

let me;
console.log(me, typeof me);

me = "MyPC";
console.log(me, typeof me);

console.log(typeof null);

// operators

const now = 2039;
const ageAj = now - 2018;
const ageMj = now - 2002;
console.log(ageAj, ageMj);

console.log(ageAj * 2, ageMj / 8, 2 ** 8);

const firstName = "Ajeet";
const lastname = "Kumar";
console.log(firstName, lastname);
console.log(firstName + " " + lastname);

let x = 10 + 9;
x += 20;
x *= 4;
x /= 5;
x++;
x--;
console.log(x);

//  comparison operators
console.log(ageAj < ageMj);
console.log(ageAj >= 18);

const isFullAge = ageAj >= 18;

console.log(now - 2002 > now - 2020);

const averageAge = (ageAj + ageMj) / 2;
console.log(averageAge);

//  strings and template literals
const firstPersonName = "Alicia Clarke";
const job = "acting";
const birthYear = "1998";

const mj =
  " I'm " +
  firstPersonName +
  ", a" +
  (now - birthYear) +
  " years old + job" +
  "!";
const Alicia = `${firstPersonName} is a character ${
  now - birthYear
} years old is doing ${job}`;

console.log(
  "Strings with \n\
       multiple lines \n\
       Thanks to js!"
);

const age = 19;
const isOldEnough = age >= 19;

if (isOldEnough) {
  console.log("You can start driving 🚗");
} else {
  const yearsLeft = 19 - age;
  console.log(`you are too young, Wait another ${yearsLeft} years...`);
}

const currentYear = 2009;
let century;
if (currentYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// type conversion
const inputYear = "1999";
console.log(inputYear + 11);

console.log(Number(inputYear), inputYear);
console.log(Number("Jonas"));
console.log(Number(inputYear) + 11);

console.log(String(24), 24);
console.log(typeof String(24), typeof 24);

// type coercion
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
console.log("I am " + String(23) + " years old");

console.log("25" - "10" - 12 + 21);
console.log("25" - "10" - 12);
console.log("23" * "5");
console.log("23" / "5");
console.log("29" > "23");

// \
let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(4 + 9 + 6 + "025");
console.log(4 + 9 + 6 + 25);

// Truthy and falsy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all:)");
} else console.log("You should get a job:(");

let height;
height = 0;
if (height) console.log("YAY! Height is defined~!");
else console.log("Height is undefined");

const number = 57;
if (number === 57)
  console.log(`You just became an adult:D (strict equality operator)`);
if (number == 57)
  console.log(`You just became an adult :D (loose equality operator)`);

// const favorite = prompt("What's your favority number? ");
// const favorite = Number(prompt("What's your favority number? "));

// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) console.log("Cool! 23 is an amazing number!");
// else if (favorite === 7) console.log("7 is also a Cool number");
// else if (favorite === 9) console.log("9 is the coolest number");
// else console.log("Cool Number! but not 9 or 7 or 23");

// if (favorite !== 23) console.log("Why not 23?");

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
console.log(!hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
if (shouldDrive) console.log("You should drive");
else console.log("You should not drive now!");

//  switch statement
const day = "Monday";

switch (day) {
  case "monday":
    console.log("Plan your Week");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Plan your Week");
    break;
  case "wednesday":
  case "thrusday":
    console.log("Go for counter meetup");
    break;
  case "friday":
    console.log("it's friday");
    break;
  case "saturday":
    console.log("it's saturday");
    break;
  case "sunday":
    console.log("It's Holidayyyyyy  !!!");
    break;
  default:
    console.log("Not a valid day !!  ;)");
}

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Ternary Operator
age >= 18
  ? console.log("You can drink wine..!")
  : console.log("Don't drink wine, you should drink cold drinks!");

const drink = age >= 18 ? "Wine" : "Cold Drinks";
console.log(drink);

let drink2;
if (age >= 18) drink2 = "wine";
else drink2 = "Cold drinks";

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "Wine" : "water or cold drinks"}`);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let hasQualified = false;
const passTest = true;

if (passTest) hasQualified = true;
if (hasQualified) console.log("I can drive now!");

// benefits of using "strict mode"
// const interface = "Audio"
// const private = 900
// const if = "gogsfgsfgsfk"

//  \\\\\\\||||||||||||||||||||||||||||\\\\\\\
//  functions
function logger() {
  console.log("it's a logger in console.");
}
logger(); //   calling or running or invoking the function

function cutPieces(fruits) {
  return fruits * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  console.log(
    "Apples: " + apples + "-->" + applePieces + " pieces",
    "Oranges: " + oranges + "--> " + orangePieces + " pieces"
  );
  // const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  const juice = `Juice with ${applePieces} pieces of ${apples} apples and ${orangePieces} pieces of ${oranges} oranges!!`;
  return juice;
}
fruitProcessor(2, 4);
console.log(fruitProcessor(5, 3));

const getJuice = fruitProcessor(5, 0);
console.log(getJuice);

//  Function declaration
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}
const age1 = calcAge1(1991);
console.log(age1);

// function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1992);

console.log(age1, age2);

// Arrow functions
const calcAge3 = (birthYear, firstName) => 2037 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const retirementYear = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retireAge = 60 - age;

  let retireStr;
  if (retireAge > 0) {
    retireStr = `${firstName} will retire after ${retireAge} years in ${
      2037 + retireAge
    }`;
  } else if (retireAge < 0) {
    // console.log(typeof retireAge, age);
    retireStr = `${firstName} was retired in ${2037 - Math.abs(retireAge)}`;
  } else {
    retireStr = `${firstName} will retire after this years !!`;
  }

  // return 2037 + retireAge;
  // return `${firstName} will retire after ${retireAge} years in ${
  //   2037 + retireAge
  // }`;
  return retireStr;
};
console.log(retirementYear(2000, "Aj"));
console.log(retirementYear(1998, "Tyler"));
console.log(retirementYear(1968, "Rahul"));
console.log(retirementYear(1977, "Mj"));

// Arrays
const friends = ["Mike", "Peter", "Dustin", "Eleven"];
console.log(friends);

const years = new Array(1998, 1987, 1996, 2020, 2023);
console.log(friends[0], friends[3]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[1] = "Eddy Munson";
console.log(friends);

const arrayMe = [firstName, "Kumar", 2037 - 2003, "programmer", friends];
console.log(arrayMe, arrayMe.length);

const ageArray = [
  calcAge1(years[0]),
  calcAge2(years[2]),
  calcAge3(years[years.length - 1]),
];
console.log(ageArray);
// Array operators

console.log(friends.push("sun"));
console.log(friends);
friends.unshift("Sherry");
console.log(friends.unshift("Alicia"));
console.log(friends);

const popped = friends.pop();
console.log(popped, friends);

const shifted = friends.shift();
console.log(shifted, friends);

console.log(friends.indexOf("Dustin"));
console.log(friends.indexOf("Ajeet "));

console.log(friends.includes("Dustin"));

const items = [1, 2, 3, 4, 5];
const sliced = items.slice(1, 3);
console.log(sliced, items);
const spliced = items.splice(2, 1, 25, 29);
console.log(spliced);
console.log(items);

const ajeet = {
  firstName: "Ajeet",
  lastName: "Kumar",
  birthYear: 2002,
  job: "programmer",
  friends: ["Maths", "Physics", "English"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - 1999;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "not"} driver's licence!!`;
  },
};
console.log(ajeet);

const nameKey = "Name";
console.log(ajeet["first" + nameKey]);
console.log(ajeet["last" + nameKey]);

// // const interestedIn = prompt(
// ("what do you know about AJ? Choose between firstName, lastName, age, job and friends");
// // );
// console.log(ajeet[interestedIn]);
// if (ajeet[interestedIn]) {
//   console.log(ajeet[interestedIn]);
// } else {
//   console.log(
//     "Wrong request. Choose between firstName, lastName, age, job and friends"
//   );
// }

ajeet.location = "Sasaram, IN";
ajeet["twitter"] = "@ajeet.441";
console.log(ajeet);

console.log(
  `${ajeet.firstName} has ${ajeet.friends.length} friends, and his best friend is called ${ajeet.friends[0]}.`
);

console.log(ajeet.calcAge());
console.log(ajeet["calcAge"]());
console.log(ajeet.calcAge());

console.log(ajeet.age);
ajeet.hasDriversLicense = false;
//
console.log(ajeet.getSummary());

for (let i = 1; i < 29; i++) {
  console.log("Hello World!!", i);
}

const ajArray = [
  "Ajeet",
  "Kumar",
  2037 - 1999,
  "teacher",
  ["Mike", "Parker", "Mj"],
  true,
];
const types = [];
for (let i = 0; i < ajArray.length; i++) {
  console.log(ajArray[i], typeof ajArray[i]);

  types[i] = typeof ajArray[i];

  // types.push(typeof ajArray[i]);
}
console.log(types);

const birthYears = [1999, 1978, 1984, 2004, 2010];
const ages = [];
for (let i = 0; i < birthYears.length; i++) {
  let age = 2037 - birthYears[i];
  ages.push(age);
}
console.log(ages);

// continue an break
// for (let i = 0; i < ajArray.length; i++) {
//   if (typeof ajArray[i] !== "string") continue;
//   console.log(ajArray[i], typeof ajArray[i]);
// }
// //
// for (let i = 0; i < ajArray.length; i++) {
//   if (typeof ajArray[i] === "number") break;
//   console.log(ajArray[i], typeof ajArray[i]);
// }
console.log(ajArray);
for (let i = ajArray.length - 1; i >= 0; i--) {
  console.log(i, ajArray[i]);
}

for (let ex = 1; ex < 4; ex++) {
  console.log(`--------- Starting exercise ${ex}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exwrcise ${ex}: Lift up Baby ${rep}`);
  }
}

let a = 1;
while (a <= 10) {
  console.log(`WHILE : Lifting dumbles ${a}`);
  a++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
