// Array creation
const myArr = [0, 1, 2, 3, 4, 5];
const myHero = ["Shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr);        // [0, 1, 2, 3, 4, 5]
console.log(myArr[1]);     // 1 (index-based access)

// push → add at end
myArr.push(6);
console.log(myArr);        // [0, 1, 2, 3, 4, 5, 6]

// pop → remove from end
myArr.pop();
console.log(myArr);        // [0, 1, 2, 3, 4, 5]

// unshift → add at start
myArr.unshift(6);
console.log(myArr);        // [6, 0, 1, 2, 3, 4, 5]

// shift → remove from start
myArr.shift();
console.log(myArr);        // [0, 1, 2, 3, 4, 5]

// includes → true/false
console.log(myArr.includes(9)); // false
console.log(myArr.includes(5)); // true

// indexOf → index or -1
console.log(myArr.indexOf(5));  // 5

// join → array to string
console.log(myArr.join());      // "0,1,2,3,4,5"
console.log(typeof myArr.join()); // string

// slice vs splice
console.log("A", myArr);        // Original array

const myn1 = myArr.slice(1, 3); // copies (1 to 2)
console.log(myn1);              // [1, 2]
console.log("B", myArr);        // unchanged

const myn2 = myArr.splice(1, 3); // removes (1 to 3)
console.log(myn2);              // [1, 2, 3]
console.log("C", myArr);        // [0, 4, 5]
