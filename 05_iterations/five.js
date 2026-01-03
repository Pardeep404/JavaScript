// Array of programming languages
const coding = ["js", "ruby", "python", "java", "cpp"];

// forEach with arrow function
// items → current element of array
coding.forEach((items) => {
  console.log(items); // prints each language
});

// Normal function
// items → current element
function print(items) {
  console.log(items); // prints each language
}

// Passing function reference to forEach
coding.forEach(print);

// forEach with 3 parameters
// items → current element
// index → position of element
// value → full array
coding.forEach((items, index, value) => {
  console.log(items, index, value);
});

// Array of objects
const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];

// forEach on array of objects
// items → each object in array
myCoding.forEach((items) => {
  console.log(items.languageName); // prints only language name
});
