let score = "33abs";

console.log(typeof score);
console.log(typeof (score));

let valueInNum = Number(score);
console.log(typeof valueInNum);
console.log(valueInNum);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isloggedIn = "Hi"

let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// ""=> false
// "Hitesh" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber)
console.log(typeof stringNumber)

// *********** Operations ***********

let value = 3
let negValue = -value
console.log(negValue);

console.log(2 + 2)
console.log(2 - 2)
console.log(2 * 2)
console.log(2 ** 2)
console.log(2 / 2)
console.log(2 % 2)

let str1 = "Hello"
let str2 = " Pardeep"

let str3 = str1 + str2;
console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(+true);
console.log(+"");

// node 01_Basics/03_ConversionOperation.js