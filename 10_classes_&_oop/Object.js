// Ye function number ko 5 se multiply karta hai
function multipleBy5(num) {
  return num * 5;
}

// Function bhi JS me object hota hai, isliye hum usme custom property add kar sakte hain
multipleBy5.power = 2;

// Function call kar rahe hain, output aayega 25
console.log(multipleBy5(5));

// Function ki custom property ko access kar rahe hain
console.log(multipleBy5.power);

// Prototype check kar rahe hain (by default empty object hota hai)
console.log(multipleBy5.prototype);


// Constructor function jo user create karega
function createUser(username, score) {
  // Yahan par username assign karna chahiye (yahan thoda logical bug hai)
  this.username = username;

  // Score ko object ki property bana rahe hain
  this.score = score;
}

// Prototype method: score ko 1 se increase karega
createUser.prototype.increment = function () {
  this.score++;
};

// Prototype method: current score print karega
createUser.prototype.printMe = function () {
  console.log(`Price is ${this.score}`);
};

// new keyword se naya object create ho raha hai
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

// Dono objects apna-apna score print karenge
chai.printMe();
tea.printMe();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/