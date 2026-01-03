// -------- WHILE LOOP EXAMPLE --------

// index variable ko 0 se start kiya
let index = 0;

// jab tak index 10 se chhota ya barabar hai loop chalega
while (index <= 10) {
  // current index ki value print hogi
  console.log(`value of index is ${index}`);

  // har iteration ke baad index 1 se increase hoga
  index++;
}



// -------- ARRAY KE SATH WHILE LOOP --------

// superheroes ka array
let myArray = ["flash", "batman", "superman"];

// array index ke liye counter
let arr = 0;

// jab tak arr array ki length se chhota hai loop chalega
while (arr < myArray.length) {
  // array ke current index ki value print hogi
  console.log(`value is ${myArray[arr]}`);

  // next index pe move karne ke liye increment
  arr++;
}



// -------- DO WHILE LOOP --------

// score ko 11 se start kiya
let score = 11;

// do-while loop pehle code execute karta hai, phir condition check hoti hai
do {
  // score ki value print hogi (kam se kam ek baar zaroor)
  console.log(score);

  // score increase
  score++;
} while (score <= 10); // condition false hai, fir bhi ek baar run hua
