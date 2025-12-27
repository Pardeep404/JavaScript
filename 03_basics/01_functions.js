// ================= BASIC FUNCTION =================

// Function to print name
function sayMyName() {
  console.log("P");
  console.log("a");
  console.log("r");
  console.log("d");
  console.log("e");
  console.log("e");
  console.log("p");
}
sayMyName();


// ================= ADDITION FUNCTIONS =================

// Function without return (sirf console me result)
function addTwoNumbersLog(number1, number2) {
  console.log(number1 + number2);
}
addTwoNumbersLog(2, 3);

// Function with return (value ko store/use kar sakte ho)
function addTwoNumbersReturn(number1, number2) {
  return number1 + number2;
}

const additionResult = addTwoNumbersReturn(2, 3);
console.log(additionResult);


// ================= NESTED FUNCTIONS =================

// Nested function example (return chaining)
function outerFunction() {
  function middleFunction() {
    function innerFunction() {
      return "Hello func3";
    }
    return innerFunction();
  }
  return middleFunction();
}

console.log(outerFunction());


// ================= LOGIN MESSAGE =================

// Default parameter + validation
function loginUserMessage(username = "dipu") {
  if (!username) {
    console.log("Please Enter Username");
  }
  return `${username} just logged in`;
}

const userInfo = loginUserMessage();
console.log(userInfo);


// ================= CART PRICE FUNCTIONS =================

// Case 1: Single item price
function calculateCartSingleItem(price) {
  return price;
}
console.log(calculateCartSingleItem(2));


// Case 2: Extra arguments ignored
function calculateCartIgnoreExtra(price) {
  return price;
}
console.log(calculateCartIgnoreExtra(100, 200, 300));


// Case 3: Rest operator – all prices as array
function calculateCartAllItems(...prices) {
  return prices;
}
console.log(calculateCartAllItems(100, 200, 300));


// Case 4: Fixed charges + remaining items
function calculateCartWithCharges(fixedCharge1, fixedCharge2, ...itemPrices) {
  return itemPrices;
}
console.log(calculateCartWithCharges(100, 200, 300, 400));


// ================= OBJECT HANDLING =================

// User object
const userData = {
  username: "Pardeep",
  price: 100,
};

// Object handled with return
function handleUserReturn(anyUser) {
  return `Username is ${anyUser.username} and price is ${anyUser.price}`;
}
console.log(handleUserReturn(userData));

// Object handled with console.log
function handleUserLog(anyUser) {
  console.log(
    `Username is ${anyUser.username} and price is ${anyUser.price}`
  );
}

handleUserLog({
  username: "Dipu",
  price: 200,
});


// ================= ARRAY HANDLING =================

// Array example
const priceArray = [200, 300, 400, 500];

// Return second value
function getSecondValueReturn(arr) {
  return arr[1];
}
console.log(getSecondValueReturn(priceArray));

// Log second value
function getSecondValueLog(arr) {
  console.log(arr[1]);
}

getSecondValueLog([100, 700, 600]);
