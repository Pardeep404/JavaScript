// Array of programming languages
const coding = ["js", "c++", "ruby", "python", "java", "swift"];

// Using forEach to iterate and log each element
coding.forEach((element) => {
  console.log("Language:", element);
});

// Another way using arrow function again
coding.forEach((element) => {
  console.log("Again:", element);
});

// Defining a function to pass to forEach
function printMe(item){
  console.log("Printed from function:", item);
}

// Passing function as callback to forEach
coding.forEach(printMe);

// forEach with access to item, index, and entire array
coding.forEach((item, index, arr) => {
  console.log("Item:", item, "Index:", index, "Array:", arr);
});

// Array of objects
const myCoding = [
  {
    name: "Pardeep",
    lastName: "Singh"
  },
  {
    name: "Deepu",
    lastName: "verma"
  },
  {
    name: "Deepak",
    lastName: "kumar"
  },
];

// Using forEach to access and print full name from each object
myCoding.forEach((item) => {
  console.log(`${item.name} ${item.lastName}`); // Logs full name
});

// node 05_Loop/05_forEachLoop.js