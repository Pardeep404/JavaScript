// 'let' and 'const' are block-scoped
// 'var' is function-scoped (or global-scoped if not inside a function)

if (true) {
  let a = 10; // Accessible only inside this if block
  const b = 20; // Accessible only inside this if block
  var c = 30; // Accessible outside the block
}

// console.log(a); // ❌ Error: a is not defined (block-scoped)
// console.log(b); // ❌ Error: b is not defined (block-scoped)

console.log(c); // ✅ Output: 30 (var is not block-scoped)

// ---------------- Function Scope & Lexical Scope ----------------
function one() {
  const username = "Pardeep"; // parent scope

  function two() {
    const website = "youtube"; // child scope
    console.log(username);     // ✅ child can access parent variables
  }

  // console.log(website); // ❌ Error: website is block-scoped to two()
  two();
}
// one();

// ---------------- Block Scope ----------------
if (true) {
  const username = "Pardeep";

  if (username === "Pardeep") {
    const website = "youtube";
    console.log(username); // ✅ accessible here
  }

  // console.log(website); // ❌ Error: block-scoped
}
// console.log(username); // ❌ Error: block-scoped

// ---------------- Hoisting (Important) ----------------

// ✅ Works because function declarations are hoisted
console.log(addOne(5)); // Output: 6
function addOne(num) {
  return num + 1;
}

// ❌ Error because function expressions are NOT hoisted
console.log(addaTwo(6)); // ReferenceError
const addaTwo = function (num) {
  return num + 1;
};
