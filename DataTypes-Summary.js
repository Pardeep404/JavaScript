// Primitive
// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

let str = "Pardeep"
let num = 7
let isLoggedIn = false
let outSideTemp = null
let myAge = undefined
let id = Symbol('123')
let anotherId = Symbol('123')
let money = 7834768476476476476476478478478478n
console.table([typeof str, typeof num, typeof isLoggedIn, typeof outSideTemp, typeof myAge, typeof id, typeof anotherId, id === anotherId, typeof money])

// Reference (Non primitive)
// Array, Objects, Functions

let arr = ["pardeep", "deepu", "deepak"];
let obj = { FName: "pardeep", SName: "deepu", TName: "deepak" }
let fun = function () {
    console.log("hello, World!")
}
console.table([typeof arr, typeof obj, typeof fun])

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non - Primitive)

let myYoutubeName = "pardeepdotcom"

let anothername = myYoutubeName
anothername = "Pardeep404"

console.table([myYoutubeName, anothername])


let userOne = {
    email: "pardeep@gmal.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "pardeep@google.com"

console.table([userOne, userTwo])

// node DataTypes-Summary.js