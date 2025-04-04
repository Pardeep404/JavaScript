// Object with method using 'this'
const user = {
    username: "Pardeep",
    price: 999,
  
    wecomeMessage: function () {
      // 'this' refers to the current object
      console.log(`${this.username}, welcome to website`); // Output: Pardeep, welcome to website
      console.log(this); // Logs the user object
    },
  };
  
  user.wecomeMessage();           // Calls the method
  user.username = "sam";         // Updates username
  user.wecomeMessage();          // Output: sam, welcome to website
  
  // ------------------------------------------------------------
  
  // Global 'this' (in Node.js will be empty object `{}`, in browser it refers to window)
  console.log(this); // Output: {} (in Node.js)
  
  // ------------------------------------------------------------
  
  // Function with 'this' (normal function - not inside object)
  function chai1() {
    let username = "Pardeep";
    console.log(this.username); // Output: undefined (this does not refer to function scope)
  }
  chai1();
  
  // Function expression
  const chai2 = function () {
    let username = "Pardeep";
    console.log(this.username); // Output: undefined
  };
  chai2();
  
  // Arrow function – does not have its own 'this'
  const chai3 = () => {
    let username = "Pardeep";
    console.log(this.username); // Output: undefined (inherits 'this' from parent scope)
  };
  chai3();
  
  // ------------------------------------------------------------
  
  // Arrow function with implicit return
  const addTwo1 = (num1, num2) => num1 + num2;
  console.log(addTwo1(3, 4)); // Output: 7
  
  // Arrow function with explicit return using parentheses
  const addTwo2 = (num1, num2) => (num1 + num2);
  console.log(addTwo2(3, 4)); // Output: 7
  
  // Arrow function returning object – must wrap object in parentheses
  const addTwo3 = (num1, num2) => ({ username: "Pardeep" });
  console.log(addTwo3(3, 4)); // Output: { username: 'Pardeep' }
  

  // node 03_Basics/03_Arrow.js