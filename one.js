// -------------------- for loop examples --------------------

// Array declaration
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Loop to multiply each element by 2
for (let index = 0; index < myArr.length; index = index + 1) {
  const element = myArr[index] * 2; // element ko 2 se multiply
  // console.log(element); // output print (commented)
}

// Simple loop to check value 5
for (let i = 0; i < myArr.length; i++) {
  const element = myArr[i];
  if (element == 5) {
    // console.log("5 is best number"); // condition true hone par
  }
  // console.log(element); // har element print
}

// break example (loop yahin stop ho jayega jab 5 mile)
for (let i = 0; i < myArr.length; i++) {
  const element = myArr[i];
  if (element == 5) {
    // console.log("5 is best number");
    break; // loop terminate
  }
  // console.log(element);
}

// continue example (5 skip ho jayega)
for (let i = 0; i < myArr.length; i++) {
  const element = myArr[i];
  if (element == 5) {
    // console.log("5 is best number");
    continue; // next iteration
  }
  // console.log(element);
}

// -------------------- Star pattern (increasing) --------------------
for (let i = 0; i < 10; i++) {
  let star = "";
  for (let j = 0; j <= i; j++) {
    star += "*"; // star add hota ja raha hai
  }
  // console.log(star);
}

// -------------------- Star pattern (decreasing) --------------------
for (let i = 10; i >= 1; i--) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  // console.log(star);
}

// -------------------- Nested loop example --------------------
for (let i = 0; i < myArr.length; i++) {
  const element = myArr[i];
  // console.log(`Outer Loop => ${element}`);

  for (let j = 0; j < myArr.length; j++) {
    const element = myArr[j];
    // console.log(`Inner Loop => ${element}`);
  }
}

// -------------------- String array loop --------------------
let myArray = ["flash", "batman", "superman"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element); // array ke heroes print
}

// -------------------- Practice Topics --------------------

// Star patterns (*, pyramid, triangle)
// Number patterns (1 2 3, 123, 121)
// Loop output predict karo (JS/C/Java)
// Even–odd numbers print
// Prime numbers print
// Fibonacci series
// Factorial
// Reverse number / string
// Array elements print (normal & reverse)
// Nested loop pattern output
