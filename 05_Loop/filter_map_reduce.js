// Looping through languages using forEach (forEach doesn't return any value)
const languages = ["js", "ruby", "java", "python", "cpp"];

const forEachResult = languages.forEach((lang) => {
  console.log(lang); // Logs each language in the array
  return lang; // This return is ignored by forEach
});
console.log("Result from forEach (undefined):", forEachResult); // forEach always returns undefined

// Filtering numbers greater than 5 from the array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter((num) => {
  return num > 5;
});
console.log("Numbers greater than 5:", filteredNumbers);

// Filtering books based on genre and edition
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
];

// Filter books that are Non-Fiction and have edition >= 2000
const selectedBooks = books.filter((book) => {
  return book.genre === "Non-Fiction" && book.edition >= 2000;
});
console.log("Filtered Non-Fiction books (edition >= 2000):", selectedBooks);

// Transforming an array using map and chaining operations
const baseNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const transformedNumbers = baseNumbers
  .map((num) => num * 10)      // Multiply each number by 10
  .map((num) => num + 1)       // Add 1 to each result
  .filter((num) => num > 44);  // Filter numbers greater than 44

console.log("Transformed numbers > 44:", transformedNumbers);

// Reducing an array to sum all numbers
const sumArray = [1, 2, 3];

const totalSum = sumArray.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log("Sum of all numbers:", totalSum);

// Calculating total price from a shopping cart using reduce
const shoppingCart = [
  { itemName: "JS Course", price: 2999 },
  { itemName: "Python Course", price: 5999 },
  { itemName: "C++ Course", price: 12999 },
];

const totalCartValue = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log("Total cart value:", totalCartValue);

// node 05_Loop/filter_map_reduce.js