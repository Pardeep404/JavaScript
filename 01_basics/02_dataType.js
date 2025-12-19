"use strict";

// Variables
let name = "Pardeep"; // string
let age = 27; // number
let isLoggedIn = true; // boolean
let state = null; // null
let city; // undefined
let favFruits = ["banana", "orange", "kivi", "strawberry"]; // array
let gym = { // object
  monday: "Chest",
  tuesday: "back",
  wednesday: "Shoulder",
  thurday: "bicepes & tricepes",
  friday: "forarms & abs",
  saturday: "legs",
  sunday: "rest",
};

// Data types
// number => 2 to power 53
// bigint => large integers
// string => ""
// boolean => true/false
// null => standalone empty value
// undefined => variable declared but no value
// symbol => unique identifier
// object => arrays, objects

// Checking types
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof state); // object (special JS behavior)
console.log(typeof city); // undefined
console.log(typeof favFruits); // object
console.log(Array.isArray(favFruits)); // true
console.log(typeof gym); // object
console.log(Array.isArray(gym)); // false

// Summary table
console.table([
  typeof name,
  typeof age,
  typeof isLoggedIn,
  typeof state,
  typeof city,
  typeof favFruits,
  Array.isArray(favFruits),
  typeof gym,
  Array.isArray(gym),
  Array.isArray(gym),
]);
