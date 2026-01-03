// Original array: 1 se 10 tak numbers
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 👉 map() use case:
// Har element par +10 add karna
const addedTen = myNumers.map((num) => {
  // num + 10 return karega
  return num + 10;
});
console.log(addedTen); // [11,12,13,14,15,16,17,18,19,20]

// 👉 Chaining (map → map → filter)
const newNums = myNumers
  .map((nums) => {
    // Step 1: Har number ko 10 se multiply
    return nums * 10;
  })
  .map((nums) => {
    // Step 2: Har multiplied value me +1 add
    return nums + 1;
  })
  .filter((nums) => {
    // Step 3: Sirf wahi values rakho
    // jo 40 se badi ho aur 80 se choti ho
    return nums > 40 && nums < 80;
  });

console.log(newNums); // Final filtered result
