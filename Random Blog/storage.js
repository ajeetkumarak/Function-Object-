console.log("hello back to you console , you are looking nice bro....");

//Add a keyvalue inside localstorage
localStorage.setItem("Name", "harry");
localStorage.setItem("Name2", "ajeet");
localStorage.setItem("Name3", "abhi");

// localStorage.clear();     //clears the entire localstorage

let name = localStorage.getItem("Name2");
console.log(name);

// Retrive an item from localstorage
let Aame = localStorage.getItem("Name5");
console.log(Aame);

// if we want to remove only one item from localstorage then we.......
// clear a particular keyvalue pair..
localStorage.removeItem("name");

// we cannot add arrays in localstorage
// We overcome this problem as follows.....
let imparray = ["code", "learn", "again code", "practice"];
localStorage.setItem("codechef", imparray);
// it save in form of string in localstorage
// so to store these , we use jsao.stringyfy or json.parse....
localStorage.setItem("codechef", JSON.stringify(imparray));

// now..
Aame = localStorage.getItem("codechef");
console.log(Aame);
console.log(typeof Aame);

// in console, we see that it print as string
//  therefore we use...json.parse to ....get as array in console

Aame = JSON.parse(localStorage.getItem("codechef"));
console.log(Aame);
console.log(typeof Aame); //it will be Array.
// now we can use all methods of array here in localstorage.

//sessionstorage...
sessionStorage.setItem("Sessionname", "Ash ketchum");
sessionStorage.setItem("Sessionwater", "misty");
sessionStorage.setItem("Sessionrock", JSON.stringify(imparray));

console.log(
  `"Do not wait: the time will never be 'just right'.Start where you stand, and work with whatever tools you may have at your command and better tools will be found as you go along"`
);

// object oriented programming..., Object literals & Constructors..
console.log(
  "*+*+*+*+*++-*/*-++-*/*-+-*/*-+object oriented programming..., Object literals & Constructors."
);

let car = {
  name: "toyota 200",
  topspeed: 2000,
  run: function () {
    console.log("car is running .");
  },
};
console.log(car);

// creating constructors for car
function Generalcar(givenname, givenspeed) {
  this.name = givenname;
  this.topspeed = givenspeed;
  this.run = function () {
    console.log(`${this.name} is running.`);
  };
  this.analyze = function () {
    console.log(
      `this car is slower by ${300 - this.topspeed}Km/h than Mercedes`
    );
  };
}
car1 = new Generalcar("Nissan", 180);
car2 = new Generalcar("altomaruti", 290);
car3 = new Generalcar("Mercedes", 300);
console.log(car2, car1, car3);

console.log(car2.analyze(), car1.analyze(), car3.analyze());

// Object prototypes
console.log(".............Object prototypes.............");
//object literals
let obj = {
  name: "ajeet",
  chain: "code with me",
  address: "Mars",
};
console.log(obj);

function Obj(givenname) {
  this.name = givenname;
}

Obj.prototype.getName = function () {
  return this.name;
};
Obj.prototype.setName = function (newName) {
  this.name = newName;
};
let obj2 = new Obj("Ajeet");
obj2 = new Obj("kumarajeet");
console.log(obj2);
console.log(obj2.toString());

// here we introduce a new method i.e. setName in it's  prototypes
obj2.setName("abhimanubilash")
console.log(obj2)