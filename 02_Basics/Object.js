// Creating an empty object (Singleton example)
const tinderUser = {};

// Adding properties to the object
tinderUser.id = "123abc";
tinderUser.name = "deepu";
tinderUser.isLoggedIn = false;

console.log("Tinder User Object:", tinderUser);

// Nested object example
const regularUser = {
    email: "pardeep@gmail.com",
    fullname: {
        userfullname: {
            first: "pardeep",
            lastname: "Singh"
        }
    }
};

// Accessing nested properties
console.log("Regular User First Name:", regularUser.fullname.userfullname.first);

// Merging multiple objects
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

// Using spread operator to merge objects
const obj4 = {...obj1, ...obj2, ...obj3};
console.log("Merged Object:", obj4);

// Array of user objects
const user = [
    { id: 1, email: "pardeep.com" },
    { id: 2, email: "deepu.com" },
    { id: 3, email: "singh.com" },
    { id: 4, email: "test.com" },
];

// Accessing properties of an array object
console.log("User 2 Email:", user[1].email);

// Object methods
console.log("Keys of Tinder User:", Object.keys(tinderUser));
console.log("Values of Tinder User:", Object.values(tinderUser));
console.log("Entries of Tinder User:", Object.entries(tinderUser));

// Object literals and symbols
const mySym = Symbol("Key1");

const JsUser = {
    name: "Pardeep",
    "Full Name": "Pardeep Singh",
    [mySym]: "myKey1", // Using a symbol as a key
    age: 18,
    location: "Faridabad",
    email: "pardeep@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
};

// Modifying object properties
JsUser.email = "pardeep@chatGpt.com";
// Object.freeze(JsUser); // Uncommenting this will prevent further modifications
JsUser.email = "pardeep@gmail.com"; // This change won't take effect if object is frozen

// Adding methods to object
JsUser.Greeting = function() {
    console.log("Hello JS");
};

JsUser.GreetingTwo = function() {
    console.log(`Hello User ${this.name}`);
};

// Calling object methods
console.log("Greeting Output:");
JsUser.Greeting();
console.log("Personalized Greeting Output:");
JsUser.GreetingTwo();

// Object destructuring
const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Deepak"
};

// Accessing object properties directly using destructuring
console.log("Course Instructor:", course.courseInstructor);
const { courseInstructor } = course;
console.log("Destructured Course Instructor:", courseInstructor);

const { courseInstructor: instructor } = course;
console.log("Renamed Destructured Instructor:", instructor);


// node 02_Basics/Object.js