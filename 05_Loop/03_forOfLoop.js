// Using `for...of` with arrays
const arr = [1, 2, 3, 4, 5];
for (const element of arr) {
    // Logs each number in the array
    // console.log("Array element:", element);
}

const greeting = "Hello world!";
for (const element of greeting) {
    // Logs each character of the string
    // console.log("Character in greeting:", element);
}

// Working with Maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United state of America");
map.set("Fr", "France");
map.set("IN", "India"); // Duplicate key, will overwrite previous

// Looping through Map entries
for (const [key, value] of map) {
    console.log(`${key} :- ${value}`); // Logs each key-value pair in the map
}

// Objects can't be directly iterated with `for...of`
const myObject = {
    game1: "NFS",
    game2: "spiderman",
    game3: "Desert Strom"
}

// This will throw error: Objects are not iterable with for...of
// So use `Object.entries()` to make it iterable
for (const [key, value] of Object.entries(myObject)) {
    console.log(`${key} :- ${value}`); // Logs each key-value pair in the object
}

// node 05_Loop/03_forOfLoop.js