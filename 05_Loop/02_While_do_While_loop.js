// While loop: Print even numbers from 0 to 10
let i = 0;
while (i <= 10) {
  console.log(`Current even number is: ${i}`); // Console message
  i = i + 2; // Increment by 2
}

// While loop: Loop through an array
let myArray = ["flash", "batman", "superman"];
let arr = 0;
while (arr < myArray.length) {
  console.log(`Superhero: ${myArray[arr]}`); // Console message
  arr++; // Move to next element
}

// Do-while loop: Print score from 1 to 10
let score = 1;
do {
  console.log(`Score is: ${score}`); // Console message
  score++; // Increment score
} while (score <= 10);

// Do-while loop: This will run once even if condition is false
let score2 = 11;
do {
  console.log(`Score is: ${score2}`); // Console message
  score2++; // Will run once even though 11 > 10
} while (score2 <= 10);


// node 05_Loop/02_While_do_While_loop.js