// ========================== Number Methods in JavaScript ==========================
console.log("🔹 JavaScript Number Methods");

// 1️⃣ Declaring a simple number variable
let simpleNumber = 100;
console.log("Simple Number:", simpleNumber);

// 2️⃣ Creating a number object using the Number constructor
let numberObject = new Number(200);
console.log("Number Object:", numberObject);

// 3️⃣ Converting the number object to a string
console.log("String Representation:", numberObject.toString());

// 4️⃣ Converting the number object to exponential notation
console.log("Exponential Notation (Default):", numberObject.toExponential());
console.log("Exponential Notation (2 decimal places):", numberObject.toExponential(2));
console.log("Exponential Notation (5 decimal places):", numberObject.toExponential(5));

// 5️⃣ Formatting the number object to a fixed number of decimal places
console.log("Fixed Notation (Default):", numberObject.toFixed());
console.log("Fixed Notation (2 decimal places):", numberObject.toFixed(2));

// 6️⃣ Declaring a large number for locale formatting
let largeNumber = 100000000;
console.log("Locale String (Default):", largeNumber.toLocaleString());
console.log("Locale String (Indian Format):", largeNumber.toLocaleString("en-IN"));

// 7️⃣ Using toPrecision() to format numbers with significant digits
let preciseNumber = 123.87;
console.log("Precision (3 significant digits):", preciseNumber.toPrecision(3));
console.log("Precision (4 significant digits):", preciseNumber.toPrecision(4));

// 8️⃣ Displaying JavaScript's max and min safe integer values
console.log("Max Safe Integer:", Number.MAX_SAFE_INTEGER);
console.log("Max Value:", Number.MAX_VALUE);
console.log("Min Safe Integer:", Number.MIN_SAFE_INTEGER);
console.log("Min Value:", Number.MIN_VALUE);

// ========================== Math Methods in JavaScript ==========================
console.log("\n🔹 JavaScript Math Object:", Math);

console.log("\n🔹 Rounding Methods");

// 9️⃣ Rounding to the nearest integer
console.log("Rounded (4.5):", Math.round(4.5));  // 5
console.log("Rounded (4.4):", Math.round(4.4));  // 4

// 🔟 Rounding up & down
console.log("Ceiling (4.4):", Math.ceil(4.4));   // 5
console.log("Floor (4.4):", Math.floor(4.4));   // 4

// 1️⃣1️⃣ Removing the decimal part (truncation)
console.log("Truncated (4.4):", Math.trunc(4.4));  // 4

console.log("\n🔹 Absolute, Power, and Root Methods");

// 1️⃣2️⃣ Absolute value
console.log("Absolute Value (-10):", Math.abs(-10));  // 10

// 1️⃣3️⃣ Power function (x^y)
console.log("2 raised to the power 3:", Math.pow(2, 3));  // 8

// 1️⃣4️⃣ Square & Cube root
console.log("Square Root of 225:", Math.sqrt(225));  // 15
console.log("Cube Root of 27:", Math.cbrt(27));  // 3

console.log("\n🔹 Random Number Generation");

// 1️⃣5️⃣ Generating random numbers
console.log("Random Number (0-1):", Math.random());
console.log("Random Integer (1-10):", Math.floor(Math.random() * 10) + 1);

console.log("\n🔹 Min & Max Methods");

// 1️⃣6️⃣ Finding min & max values
console.log("Minimum Value:", Math.min(1, 2, 3, 4, 5, 6, 7));  // 1
console.log("Maximum Value:", Math.max(1, 2, 3, 4, 5, 6, 7));  // 7

// node 01_Basics/06_Number_Math.js