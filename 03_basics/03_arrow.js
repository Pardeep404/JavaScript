// ---------------- Object with method ----------------
const user = {
  username: "Pardeep",
  price: 999,

  // Normal function inside object → `this` points to the object
  wecomeMessage: function () {
    console.log(`${this.username} welcome to website`); // ✅ Access object property
    console.log(this); // ✅ Logs the entire object
  },
};

// Example usage (commented out):
// console.log(user.wecomeMessage());
// user.username = "Deepu";
// console.log(user.wecomeMessage());

// ---------------- Global scope `this` ----------------
console.log(this); 
// In browser: window object
// In Node.js or strict mode: {} or undefined

// ---------------- Normal function ----------------
function one() {
  let username = "Deepak";         // Local variable
  console.log(username);           // ✅ Logs local variable
  console.log(this.username);      // ❌ undefined, normal function `this` not bound
  // console.log(this)              // Optional: shows global object (or undefined in strict mode)
}
one();

// ---------------- Arrow function ----------------
const two = () => {
  let username = "Deepak";         // Local variable
  console.log(username);           // ✅ Logs local variable
  console.log(this.username);      // ❌ undefined, arrow function inherits `this` from parent scope
  // console.log(this)              // Optional: shows global object (or undefined)
};
two();

// ---------------- Arrow function returning object ----------------
// Must wrap object in parentheses () to return an object directly
const addTwo = (num1, num2) => ({ username: "Pardeep" });

console.log(addTwo(2, 3)); // ✅ { username: 'Pardeep' }

// ---------------- Notes ----------------
// 1. Object methods → `this` = object
// 2. Normal functions → `this` depends on how function is called (global or undefined in strict mode)
// 3. Arrow functions → inherit `this` from parent scope
// 4. Arrow function returning object → wrap object in () to avoid syntax confusion
