"use strict";

// Here we learn about functional programming......

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // In ES5, default parammeters are like this. -  -  -

  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH125");
createBooking("Boing107", 3);
createBooking("DF457", 7);
createBooking("XZX998", undefined, 1000);
console.log(bookings);

//
const flight = "LH258";
const aj = {
  name: "Ajeet Kumar",
  passpoprt: 2563987415,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passpoprt === 2563987415) {
    // alert("Checked IN");
  } else {
    // alert("Wrong Passport");
  }
  //   console.log(passenger.name);
};
console.log(flight, aj);
checkIn(flight, aj);
console.log(flight, aj);

const newPassport = function (person) {
  person.passpoprt = Math.trunc(Math.random() * 1000000000000);
};

newPassport(aj);
console.log(aj);
checkIn(flight, aj);

// functions accepting callback functions

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};
// console.log(oneWord("Hello we are all right ."));

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  console.log(first, others);

  return [first.toUpperCase(), ...others].join(" ");
};

// console.log(
// upperFirstWord("ajeet and me are all good nice to meet you all...")
// );

const transformer = function (str, fn) {
  console.log(`ORIGINAL Str: ${str}`);
  console.log(`Transform Str: ${fn(str)}`);
};

transformer("Ajeet is good boy", oneWord);
transformer("Ajeet is nice man lol..", upperFirstWord);

const high5 = function () {
  console.log("🖐");
};
document.body.addEventListener("click", high5);

console.log(bookings);
bookings.forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}, `);
  };
};
const greetHey = greet("Hey");
greetHey("Ajeet");
greetHey("Mj");

greet("Hello")("Akash");

const arrowGreet = (greeting) => (name) => console.log(`${greeting} ${name}`);
arrowGreet("Ajeet")("hello");
arrowGreet("Hello78789845")("Mj");

// the call and apply method

// const book = function (flightNum, name) {
//   console.log(
//     `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//   );
//   this.bookings.push({
//     flight: `${this.iataCode}${flightNum}`,
//     name: `${name}`,
//   });
// };

const spicejet = {
  airline: "Spicefly",
  iataCode: "SXX",
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}. `
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name: `${name}`,
    });
  },
};

spicejet.book(151, "Janet");
spicejet.book(141, "John dorry");
console.log(spicejet);

// const airwings = {
//   name: "Air India",
//   iataCode: "AIR",
//   bookings: [],
//   book,
// };

// airwings.book(52, "Martha");
// airwings.book(79, "Alicia");

// console.log(airwings);

const airwings = {
  airline: "Air India",
  iataCode: "AIR",
  bookings: [],
};

const book = spicejet.book;

book.call(spicejet, 59, "Laila Majnu");
book.call(airwings, 214, "Jaya ");

console.log(spicejet);
console.log(airwings);

const jeetwings = {
  airline: "Aj Air Lines",
  iataCode: "Aj",
  bookings: [],
};

book.call(jeetwings, 99, "Suneo bba");
book.call(jeetwings, 199, "Nobita");
book.call(jeetwings, 29, "jiyana");

console.log(jeetwings);

// THE APPLY METHOD
const flightData = [58, "George Kutti"];
const flightData1 = [97, "Sarah mj"];
book.apply(jeetwings, flightData);

book.call(jeetwings, ...flightData1);

console.log(jeetwings);

// The bind method
const bookSPJ = book.bind(spicejet);
const bookAW = book.bind(airwings);
const bookJW = book.bind(jeetwings);
bookSPJ(94, "Ajeet kr");
console.log(spicejet);
bookAW(101, "abhimanyu");

const bookJW27 = book.bind(jeetwings, 27);
bookJW27("Computer ji");
console.log(jeetwings);

// bind method with event listner

jeetwings.planes = 300;
jeetwings.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// jeetwings.buyPlane();

document
  .querySelector(".plane")
  .addEventListener("click", jeetwings.buyPlane.bind(jeetwings));

// Partial Application means we can preset parameters

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.7, 230));

const addVAT = addTax.bind(null, 0.27);

console.log(addVAT(10002));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.27);
console.log(addVAT2(100));
console.log(addVAT2(10002));

// Immediately invoked Function Expression
const runOnce = function () {
  console.log(`This will run once.`);
};
runOnce();
(function () {
  console.log("This will never run again.");
})();
(() => console.log("This will also never run again."))();
