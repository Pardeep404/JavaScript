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
// sayMyName();


// Function without return (result = undefined)
function addTwoNumbersLog(number1, number2) {
  console.log(number1 + number2);
}
// addTwoNumbersLog(2, 3);


// Function with return
function addTwoNumbers(number1, number2) {
  return number1 + number2;
  // console.log("Hello"); // ❌ unreachable code
}

const result = addTwoNumbers(2, 3);
console.log(result);


// Nested functions example
function func1() {
  function func2() {
    function func3() {
      return "Hello func3";
    }
    return func3();
  }
  return func2();
}

console.log(func1());


// Login message function with default parameter
function loginUserMessage(username = "dipu") {
  if (!username) {
    console.log("Please Enter Username");
  }
  return `${username} just logged in`;
}

const userInfo = loginUserMessage();
console.log(userInfo);
