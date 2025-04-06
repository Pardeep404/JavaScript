// Print numbers from 1 to 10
for (let index = 1; index <= 10; index++) {
    const element = index;
    console.log(element);
  }
  
  // Print numbers from 1 to 10 and check if the number is 5
  for (let index = 1; index <= 10; index++) {
    const element = index;
    if (element == 5) {
      console.log("5 is the best number");
    }
    console.log(element);
  }
  
  // Nested loop: Outer and Inner loop from 1 to 10
  for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
      console.log(`Inner loop value ${j}`);
    }
  }
  
  // Print multiplication table from 1 to 10
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
  
  // Loop through an array of superheroes
  let myArray = ["flash", "batman", "superman"];
  for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
  }
  
  // Loop from 1 to 20, stop the loop when i is 5
  for (let i = 1; i <= 20; i++) {
    if (i == 5) {
      console.log(`Detected 5`);
      break; // Exit loop when i is 5
    }
    console.log(i);
  }
  
  // Loop from 1 to 20, skip the value 5
  for (let i = 1; i <= 20; i++) {
    if (i == 5) {
      console.log(`Detected 5`);
      continue; // Skip current iteration when i is 5
    }
    console.log(i);
  }

//   node 05_Loop/01_forLoop.js