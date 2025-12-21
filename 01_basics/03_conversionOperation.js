let score = "Pardeep";

// Checking the type of variable
// console.log(typeof score)
// console.log(typeof(score))

// Converting string to number
let valueInNumber = Number(score);
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// Conversion results:
// "33"     => 33
// "33abc"  => NaN
// true     => 1
// false    => 0

let isLoggedIn = "Pardeep";

// Converting value to boolean
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)

// Boolean conversion rules:
// 1         => true
// 0         => false
// ""        => false
// "pardeep" => true

let someNumber = 33;

// Converting number to string
let stringNumber = String(someNumber);
// console.log(stringNumber);          // "33"
// console.log(typeof stringNumber);   // string

// ************* Operations *************

let value = 3;
let negValue = -value;
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1 = "Hello";
let str2 = " Pardeep";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(((3 + 4) * 5) % 3);

console.log(+true);
console.log(+"");

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
