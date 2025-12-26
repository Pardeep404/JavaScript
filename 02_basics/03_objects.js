// singleton ❌ (object literal is NOT singleton)

// unique symbol (used as hidden key)
const mySym = Symbol();

// object literal
const JsUser = {
  name: "Pardeep",                 // normal key
  "full name": "Singh",            // space wali key (dot se access nahi hoti)
  [mySym]: "myKey1",               // symbol as key (computed property)
  age: 27,
  email: "pardeep@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// access methods
console.log(JsUser.email);         // dot notation
console.log(JsUser["email"]);      // bracket notation
console.log(JsUser["full name"]);  // bracket needed (space in key)
console.log(JsUser[mySym]);        // symbol key access

// Object.freeze(JsUser);           // freeze → no changes allowed

JsUser.email = "deepu@gmail.com";  // works only if not frozen
console.log(JsUser);

// adding methods
JsUser.greeting = function () {
  console.log("Hello js user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello js user, ${this.name}`); // this → same object
};

// function call (returns undefined, so console.log shows undefined)
JsUser.greeting();
JsUser.greetingTwo();
