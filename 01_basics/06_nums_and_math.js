// ================= Numbers =================

const score = 400;

const balance = new Number(7000000);

// Number → String operations
// console.log(balance);
// console.log(typeof balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toString().split(""));
// console.log(balance.toFixed(2));          // 7000000.00
// console.log(balance.toLocaleString());    // 7,000,000
// console.log(balance.toLocaleString("en-IN")); // 70,00,000


// ================= Maths =================

console.log(Math);                 // Math object
console.log(Math.abs(-4));          // 4
console.log(Math.round(4.4));       // 4
console.log(Math.round(4.6));       // 5
console.log(Math.ceil(4.2));        // 5
console.log(Math.floor(4.2));       // 4
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.max(1, 2, 3, 4, 5)); // 5

// Random numbers
console.log(Math.random());              // 0 to <1
console.log(Math.random() * 10 + 1);     // 1 to <11
console.log(Math.floor(Math.random() * 9) + 1); // 1 to 9 ✅
