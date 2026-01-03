// Object define kiya jisme key–value pairs hain
const myObject = {
  js: "javascript",
  cpp: "C++",
  swift: "swift by apple",
};

// for...in loop object ke liye use hota hai
// yeh object ki keys par iterate karta hai
for (const key in myObject) {
  // key = js, cpp, swift
  // myObject[key] = unki respective values
  console.log(key, myObject[key]);
}

// Array define kiya
const programing = ["js", "rb", "py", "java", "cpp"];

// for...in array par lagane se index milta hai (0,1,2...)
// yaha sirf index print ho raha hai
for (const key in programing) {
  console.log(key);
}

// Same array dubara define ki
const programing1 = ["js", "rb", "py", "java", "cpp"];

// yaha index se value access ki ja rahi hai
// programing1[key] se actual element milega
for (const key in programing1) {
  console.log(programing1[key]);
}
