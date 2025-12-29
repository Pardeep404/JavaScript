// ---------------- IIFE Examples ----------------

// Normal function IIFE
(function one() {
  console.log("DB CONNECTED"); // ✅ Runs immediately
})();

// Arrow function IIFE
(() => {
  console.log("DB CONNECTED again"); // ✅ Runs immediately
})();

// IIFE with parameters
((name) => {
  console.log(`My name is ${name}`); // ✅ Accepts argument
})("Deepu");
