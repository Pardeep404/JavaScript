// Function to print name letter by letter
function printName() {
    console.log("P");
    console.log("a");
    console.log("r");
    console.log("d");
    console.log("e");
    console.log("e");
    console.log("P");
  }
  
  printName();
  
  // Function to add two numbers and return the result
  function sumTwoNumbers(num1, num2) {
    return num1 + num2;
  }
  
  const sumResult = sumTwoNumbers(9, 9);
  console.log("Sum of 9 and 9:", sumResult);
  
  // Function to log in a user with a default username
  function loginUser(username = "deep") {
    if (username === undefined) {
      console.log("Please enter a username");
      return;
    }
    return `${username} just logged in`;
  }
  
  console.log(loginUser("Deepak"));
  console.log(loginUser("Deepu"));
  
  // Function to calculate total cart price using rest parameters
  function getCartPrices(...num1) {
    return num1;
  }
  
  console.log("Cart Prices:", getCartPrices(2, 5, 8));
  
  // Function to return only remaining cart prices after first two values
  function getRemainingCartPrices(val1, val2, ...num1) {
    return num1;
  }
  
  console.log("Remaining Cart Prices:", getRemainingCartPrices(2, 5, 8, 6, 9));
  
  // Object representing a user
  const user = {
    username: "pardeep",
    price: 199,
  };
  
  // Function to handle and print object properties
  function handleUserObject(anyObject) {
    console.log(`Username: ${anyObject.username}, Price: ${anyObject.price}`);
  }
  
  handleUserObject(user);
  
  // Array representing some values
  const myArr = [200, 400, 5000];
  
  // Function to return the first value of an array
  function getFirstArrayValue(arr) {
    return arr[0];
  }
  
  console.log("First Array Value:", getFirstArrayValue(myArr));
  

//   node 03_Basics/Function.js