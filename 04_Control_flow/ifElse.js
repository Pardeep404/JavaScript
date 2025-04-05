// User login status
const isUserloggedIn = true;

// Temperature check
const temperature = 41;

if (temperature === 40) {
    console.log("Temperature is exactly 40 (less than 50)");
} else {
    console.log("Temperature is greater than 40");
}

console.log("This will always execute");

// Comparison Operators:
// <, >, <=, >=, ==, !=, ===, !==

// Score check for power assignment
const score = 200;

if (score > 100) {
    let power = "fly";
    console.log(`User power inside block: ${power}`);
}

// The below line will throw a ReferenceError if uncommented 
// because 'power' is block scoped
// console.log(`User power outside block: ${power}`); // Uncommenting this will cause error

// Balance based conditional checks
const balance = 1000;

// Inline if statement (not recommended for multiple actions)
if (balance > 500) {
    console.log("Balance is greater than 500"); 
    console.log("Executing test2 block");
}

if (balance < 500) {
    console.log("Balance is less than 500");
} else if (balance < 750) {
    console.log("Balance is less than 750");
} else if (balance < 900) {
    console.log("Balance is less than 900");
} else {
    console.log("Balance is less than 1200");
}

// User access conditions
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// All three conditions must be true to allow course purchase
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
} else {
    console.log("User not allowed to buy course due to one or more failed conditions");
}

// At least one login method must be true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in successfully via Google or Email");
}

// node 04_Control_flow/ifElse.js