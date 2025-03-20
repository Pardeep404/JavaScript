// node 01_Basics/05_String.js

console.log("String Methods Demonstration");

let newString = new String("Pardeep H2O"); // Creating a string object
let str = "Singh"; // Another string

console.log("Original String:", newString);
console.log("Length:", newString.length); // Get length of string

// String methods with explanations
console.log("Character at index -5:", newString.at(-5)); // Supports negative indexing
console.log("Character at index 3:", newString.charAt(3)); // Returns character at index
console.log("UTF-16 Code Unit at index 1:", newString.charCodeAt(1)); // Returns UTF-16 value
console.log("Unicode Code Point at index 6:", newString.codePointAt(6)); // Unicode point
console.log("Concatenation:", newString.concat(" ", str)); // Combines two strings
console.log("Ends with 'p'?:", newString.endsWith("p")); // Checks ending substring
console.log("Includes 'deep'?:", newString.includes("deep")); // Checks if substring exists
console.log("Last Index of '':", newString.lastIndexOf("")); // Finds last occurrence
console.log("Locale Compare:", str.localeCompare(newString)); // Compare strings locale-wise
console.log("Match 'deep':", newString.match("deep")); // Find a match in string

// Regular expression matching
let text = "apple, banana, apple, orange";
let regex = /apple/g;
console.log("Match All 'apple':", [...text.matchAll(regex)]); // Returns all matches

// Padding and repetition
console.log("Pad End (10, '*'):", newString.padEnd(10, "*"));
console.log("Pad Start (10, '*'):", newString.padStart(10, "*"));
console.log("Repeat String 3 times:", newString.repeat(3));
console.log("Replace 'Pardeep' with 'Deepu':", newString.replace("Pardeep", "Deepu"));
console.log("Replace all 'e' with 'D':", newString.replaceAll("e", "D"));
console.log("Search 'eep':", newString.search("eep"));

// Slicing the string
console.log("Slice (-6, -1):", newString.slice(-6, -1));
console.log("Slice (1, -4):", newString.slice(1, -4));
console.log("Slice (2 to end):", newString.slice(2));

// Splitting the string
console.log("Split each character:", newString.split(""));
let csv = "apple,banana,grape,orange";
console.log("Split by comma:", csv.split(","));
console.log("Split first 3 elements:", csv.split(",", 3));

// Checking start of a string
console.log("Starts with 'P'?:", newString.startsWith("P"));
console.log("Starts with 'P' at index 0?:", newString.startsWith("P", 0));
console.log("Starts with 'P' at index 2?:", newString.startsWith("P", 2));
console.log("Starts with 'p'?:", newString.startsWith("p"));
console.log("Starts with '.doc'?:", newString.startsWith(".doc"));

// Case conversion
console.log("To Locale Lower Case:", newString.toLocaleLowerCase());
console.log("To Locale Upper Case:", newString.toLocaleUpperCase());
console.log("To Lower Case:", newString.toLowerCase());
console.log("To Upper Case:", newString.toUpperCase());

// Number to string conversion
let num = 123;
let newNum = num.toString();
console.log("Type of num:", typeof num);
console.log("Type of newNum:", typeof newNum);

// Trimming whitespace
let fruits = "   oranges   ";
console.log("Trim:", fruits.trim());
console.log("Trim End:", fruits.trimEnd());
console.log("Trim Start:", fruits.trimStart());

// Value of string
console.log("Value of newString:", newString.valueOf());
