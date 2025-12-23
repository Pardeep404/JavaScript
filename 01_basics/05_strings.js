const name = "Pardeep";
const age = 27;

// Template literal (recommended)
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

// String object
const game = new String("Dipu");

// Prototype methods
console.log(game.__proto__);

// Basic string operations
console.log(game.length);          // Length of string
console.log(game.charAt(2));       // Character at index 2
console.log(game.indexOf("p"));    // Index of 'p'
console.log(game.toUpperCase());   // Uppercase
console.log(game.toLocaleLowerCase()); // Lowercase
console.log(game.includes("D"));   // Check character

// Extracting string parts
console.log(game.slice(0, 4));     // "Dipu"
console.log(game.slice(-5, 4));    // "" (start > end)
console.log(game.substring(0, 4)); // "Dipu"

// String modification
console.log(game.trim());          // No effect (no spaces)
console.log(game.replace("D", "P")); // Replace character

// Convert to array
console.log(game.split());         // ["Dipu"]
console.log(Array.isArray(game.split())); // true

// Repeat string
console.log(game.repeat(9));
