// let myName = "Pardeep      ";

// console.log(myName.trim().length);
// console.log(myName.truelength);

let myHero = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`spider poer is ${this.spiderman}`);
  },
};

Object.prototype.pardeep = function () {
  console.log(`Pardeep is present in all objects`);
};

Array.prototype.heyPardeep = function () {
  console.log(`Pardeep says hello`);
};

// heroPower.pardeep()
// myHero.pardeep();
// myHero.heyPardeep();
// heroPower.heyPardeep()

// inheritance

const user = {
  name: "Pardeep",
  email: " google@gmail.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "Deepu           "

String.prototype.truelength = function(){
    console.log(`${this}`); 
    console.log(`True lenght is: ${this.trim().length}`);
}

anotherUserName.truelength()