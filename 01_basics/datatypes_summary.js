// Primitive Data Types

let userName = "Pardeep";
let userAge = 26;
let isLoggedIn = true;
let accountBalance = null;
let userCity;
let uniqueId = Symbol("id");
let bigNumber = 12345678901234567890n;

console.log(userName, typeof userName);           // string
console.log(userAge, typeof userAge);             // number
console.log(isLoggedIn, typeof isLoggedIn);       // boolean
console.log(accountBalance, typeof accountBalance); // object (JS bug)
console.log(userCity, typeof userCity);           // undefined
console.log(uniqueId, typeof uniqueId);           // symbol
console.log(bigNumber, typeof bigNumber);         // bigint


// Reference (Non-Primitive) Data Types

let favoriteFruits = ["Apple", "Banana", "Mango"];
let userProfile = {
    name: "Pardeep",
    age: 26,
    role: "Frontend Developer"
};

function calculateTotal(price, tax) {
    return price + tax;
}

console.log(favoriteFruits, typeof favoriteFruits); // object
console.log(userProfile, typeof userProfile);       // object
console.log(calculateTotal, typeof calculateTotal); // function


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive) → copy by value (Stack Memory)

let originalUserName = "Pardeep";
let copiedUserName = originalUserName; // value copy hoti hai

copiedUserName = "Aman";

console.log(originalUserName, typeof originalUserName); // "Pardeep" string
console.log(copiedUserName, typeof copiedUserName);     // "Aman" string


// Heap (Non-Primitive) → copy by reference (Heap Memory)

let originalUserProfile = {
  name: "Pardeep",
  age: 26,
  role: "Frontend Developer"
};

let referencedUserProfile = originalUserProfile; // same reference

referencedUserProfile.name = "Aman";

console.log(originalUserProfile, typeof originalUserProfile);   // object (changed)
console.log(referencedUserProfile, typeof referencedUserProfile); // object
