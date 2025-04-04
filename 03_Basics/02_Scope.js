// Global and Block Scope Demo
var c = 300;           // 'var' is function-scoped or globally scoped
let a = 100;           // 'let' is block-scoped

if (true) {
  let a = 10;          // New 'a' scoped to this block
  const b = 20;        // 'b' only accessible inside this block
  var c = 30;          // Re-declares global 'c' because 'var' is not block-scoped
  console.log("INNER: ", a); // Output: INNER: 10
}

console.log("OUTER a:", a); // Output: 100 (outer 'a' remains unchanged)
// console.log(b);         // Error: 'b' is not defined outside block
console.log("Global c:", c); // Output: 30 (value changed due to 'var')

// ------------------------------------------------------------

// Function Scope Demo
function one() {
  const username = "Pardeep"; // username is scoped to function 'one'

  function two() {
    const website = "Youtube"; // website is scoped to function 'two'
    console.log("From two():", username); // Output: Pardeep
  }

  // console.log(website); // Error: website is not accessible here
  two();
}

// one(); // Uncomment to run

// ------------------------------------------------------------

// Nested Block Scope Demo
if (true) {
  const username = "Pardeep";

  if (username === "Pardeep") {
    const website = "Youtube";
    console.log("BLOCK:", username + " " + website); // Output: Pardeep Youtube
  }

  // console.log(website); // Error: website is block-scoped
}

// console.log(username); // Error: username is not defined outside block

// ------------------------------------------------------------

// Function Declaration vs Function Expression

console.log("addone(5):", addone(5)); // Output: 6 (function declarations are hoisted)

function addone(num) {
  return num + 1;
}

// Function Expression
const addtwo = function (num) {
  return num + 1;
};

console.log("addtwo(5):", addtwo(5)); // Output: 6 (works after definition)

// node 03_Basics/Scope.js