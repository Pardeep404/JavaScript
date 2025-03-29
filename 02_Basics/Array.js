// Creating an array
const myArr = [0, 1, 2, 3, 4, 5, 6];
console.log("Original Array:", myArr); // Output: [0, 1, 2, 3, 4, 5, 6]
console.log("Type of myArr:", typeof myArr); // Output: object (Arrays are a type of object in JavaScript)
console.log("Array Length:", myArr.length); // Output: 7 (length of array)
console.log("Element at index 2:", myArr[2]); // Output: 2 (Accessing element at index 2)

// Adding elements
myArr.push(7); // Adds 7 at the end
console.log("After push(7):", myArr);

// Removing elements
myArr.pop(); // Removes the last element
console.log("After pop():", myArr);

// Adding at the beginning
myArr.unshift(8); // Adds 8 at the start
console.log("After unshift(8):", myArr);

// Removing from the beginning
myArr.shift(); // Removes the first element
console.log("After shift():", myArr);

// Checking for element existence
console.log("Includes 9?:", myArr.includes(9)); // Output: false (9 is not in the array)
console.log("Index of 9:", myArr.indexOf(9)); // Output: -1 (9 is not found)

// Converting array to string
const newArr = myArr.join(); // Joins elements into a string with commas
console.log("Original Array after join():", myArr); // Original array remains unchanged
console.log("Joined String:", newArr); // Output: "0,1,2,3,4,5,6"

// Slicing (returns a portion of the array)
console.log("Slice(0,3):", myArr.slice(0, 3)); // Output: [0, 1, 2] (extracts first three elements)
console.log("Original Array after slice():", myArr); // Original array remains unchanged

// Splicing (removes elements and modifies the array)
console.log("Splice(0,3):", myArr.splice(0, 3)); // Removes first three elements
console.log("Modified Array after splice():", myArr); // Modified array

// Merging arrays
const marvals_hero = ["ironMan", "Captain America", "Hulk"];
const dc_hero = ["Batman", "Flash", "Superman"];

// Using push (Incorrect approach, adds array as a single element)
marvals_hero.push(dc_hero);
console.log("After push(dc_hero):", marvals_hero); // Output: ["ironMan", "Captain America", "Hulk", ["Batman", "Flash", "Superman"]]

// Using concat (Correct way to merge arrays)
const anotherArr = marvals_hero.concat(dc_hero);
console.log("Using concat():", anotherArr); // Output: New merged array

// Using spread operator (Recommended approach)
const newAnotherArr = [...marvals_hero, ...dc_hero];
console.log("Using spread operator:", newAnotherArr);

// Handling multi-dimensional arrays
const multiDimensionalArray = [1, 2, 3, 4, [5, 6, 7, [8, 9, 0]]];
console.log("Flattened Array:", multiDimensionalArray.flat(Infinity)); // Flattens the array completely

// node 02_Basics/Array.js