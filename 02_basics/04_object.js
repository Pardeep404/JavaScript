// Creating objects
const tinderUser = {}; // Object literal
tinderUser.id = "123abc";
tinderUser.name = "Pardeep";
tinderUser.isLoggedIn = false;
console.log("Tinder User:", tinderUser);

// Nested objects
const regularUser = {
  email: "pardeep@gmail.com",
  fullname: {
    userfullname: {
      firstname: "dipu",
      lastname: "404",
    },
  },
};
console.log("Lastname:", regularUser.fullname.userfullname.lastname);

// Merging objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log("Merged with Object.assign:", obj4);

const obj5 = { ...obj1, ...obj2, ...obj3 };
console.log("Merged with spread operator:", obj5);

// Array of objects
const users = [
  { id: 1, name: "A1" },
  { id: 2, name: "A2" },
  { id: 3, name: "A3" },
  { id: 4, name: "A4" },
];
console.log("Second user name:", users[1].name);

// Object methods
console.log("Keys of tinderUser:", Object.keys(tinderUser));
console.log("Values of tinderUser:", Object.values(tinderUser));
console.log("Entries of tinderUser:", Object.entries(tinderUser));
console.log("Has property 'name'? :", tinderUser.hasOwnProperty("name"));
console.log(
  "Has property 'lastName'? :",
  tinderUser.hasOwnProperty("lastName")
);

// Object Destructuring Example

const course = {
  courseName: "MCA",
  price: "999",
  courseInstructor: "Aseem Khanna",
};

// Destructuring
const { courseInstructor } = course;
console.log(courseInstructor);

// Renaming during destructuring
const { courseInstructor: instructor } = course;
console.log(instructor);

// JSON Example
/*
{
  "name": "Pardeep",
  "courseName": "MCA",
  "price": 90000
}
*/
