const name = "Pardeep";
let age = 27;
var city = "Faridabad";
favColor = "Black";
console.table([name, age, city, favColor]);

// name = "Deepu"; // not allowed

age = 28;
city = "Delhi";
console.table([age, city]);

let fun = function () {
  var lastName = "Singh";
};
fun()
// console.log([lastName]);//var is function scoped

if(true){
    var lastName = "Singh";
}
// console.log(lastName);//but var is not block scoped

// console.log(courses);//var Hoisted → undefined
var courses = "MCA"
courses = "PHD" //Re-declare allowed
console.log(courses)


/*
🔹 var

Definition:
var function-scoped hota hai, block-scoped nahi, aur hoisting ke kaaran unpredictable bugs create karta hai.

Points:

Function-scoped

Block scope nahi (if/for ignore)

Hoisted → undefined

Re-declare allowed

Global object ka part banta hai

🔹 let

Definition:
let block-scoped variable hai jo re-assign ho sakta hai aur safer, predictable behavior deta hai.

Points:

Block-scoped

Re-assign allowed

Re-declare not allowed

Hoisted but TDZ (ReferenceError)

Modern JS preferred

🔹 const

Definition:
const block-scoped constant hai jiska reference change nahi ho sakta.

Points:

Block-scoped

Re-assign ❌

Re-declare ❌

Object/Array mutate ho sakta hai

Sabse safe default

Use const by default, let when value changes, and avoid var due to scope and hoisting issues.
*/
