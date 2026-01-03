// Array of numbers
const myNums = [1, 2, 3, 4, 5];

// reduce() use ho raha hai total sum nikalne ke liye
// acc (accumulator) = previous sum
// currval = current value jo array se aa rahi hai
// 0 initial value hai acc ki
const myTotal = myNums.reduce((acc, currval) => {
  console.log(`acc: ${acc} and currval: ${currval}`); 
  // har step par acc + currval ho raha hai
  return acc + currval;
}, 0);

// Final total sum print hoga
console.log("Total of myNums:", myTotal);

// ---------------- Shopping Cart Example ----------------

// Shopping cart array jisme items aur unki prices hain
const shoppingCart = [
  {
    ItemName: "JavaScript",
    price: 1000,
  },
  {
    ItemName: "Data Science Course",
    price: 12000,
  },
  {
    ItemName: "Python",
    price: 2000,
  },
];

// reduce() se total price calculate kar rahe hain
// acc = total price ab tak
// items = current cart item
const priceToPay = shoppingCart.reduce((acc, items) => {
  // acc me current item ki price add ho rahi hai
  return acc + items.price;
}, 0);

// Final amount jo user ko pay karna hai
console.log("Total price to pay:", priceToPay);
