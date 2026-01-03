// ================= Array forEach Example =================

// Array of programming languages
const coding = ["js", "ruby", "python", "java", "cpp"];

// forEach sirf loop chalata hai, kuch return nahi karta
const value = coding.forEach((item) => {
  console.log(item); // har item print hoga
  return item; // ❌ ye return kaam nahi karega (forEach ignore karta hai)
});

// forEach ka return hamesha undefined hota hai
console.log(value); // undefined


// ================= filter vs forEach Example =================

// Number array
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter → condition true hogi toh new array banega
const filteredNums = myNums.filter((num) => {
  return num >= 4 && num <= 8;
});
console.log(filteredNums); // [4,5,6,7,8]


// Same kaam using forEach
const newNums = [];

myNums.forEach((num) => {
  // condition check
  if (num >= 4 && num <= 8) {
    newNums.push(num); // manually push karna padta hai
  }
});

console.log(newNums); // [4,5,6,7,8]


// ================= Real Data Example (Books) =================

// Books data (objects ka array)
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// Sirf Fiction genre ki books
const fictionBooks = books.filter((bk) => bk.genre === "Fiction");
console.log(fictionBooks);

// 2000 ke baad publish hui books
const modernBooks = books.filter((bk) => {
  return bk.publish > 2000;
});
console.log(modernBooks);

// History genre + 2000 se pehle publish hui books
const userBooks = books.filter((bk) => {
  return bk.publish <= 2000 && bk.genre === "History";
});
console.log(userBooks);
