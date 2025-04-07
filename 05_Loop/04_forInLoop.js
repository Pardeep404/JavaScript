// Object with language shortcuts
const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple",
  };
  
  // Looping through keys in the object using `for...in`
  for (const key in myObject) {
    // Logs: key shortcut is for corresponding value
    console.log(`${key} shortcut is for ${myObject[key]}`);
  }
  
  // Array of programming language shortcuts
  const programing = ["js", "rb", "py", "java", "cpp"];
  
  // Looping through array indexes using `for...in`
  for (const key in programing) {
    // Logs: each element from the array
    console.log(programing[key]);
  }

//   node 05_Loop/04_forInLoop.js