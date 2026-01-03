// ======================= for...of =======================
// for...of iterable cheezon par chalta hai
// (Array, String, Map, Set)

// ---------- Array ----------
const arr = [1, 2, 3, 4, 5];

// yahan i = direct value (1,2,3...)
for (const i of arr) {
  console.log(i); // output: 1 2 3 4 5
}

// ---------- String ----------
const greeting = "Hello World!";

// string bhi iterable hoti hai
// i = har ek character
for (const i of greeting) {
  console.log(i); // H e l l o   W o r l d !
}

// ---------- Map ----------
const map1 = new Map();

// Map key-value pair store karta hai
// duplicate key allow nahi hoti (IN overwrite ho jayega)
map1.set("IN", "India");
map1.set("USA", "United States Of America");
map1.set("Fr", "France");
map1.set("IN", "India"); // duplicate key → overwrite

// Map par for...of lagane par [key, value] milta hai
for (const [key, value] of map1) {
  console.log(key, value);
}

// ---------- Map keys() ----------
const map2 = new Map();
map2.set("IN", "India");
map2.set("USA", "United States Of America");
map2.set("Fr", "France");

// sirf keys chahiye
for (const key of map2.keys()) {
  console.log(key); // IN, USA, Fr
}

// ---------- Map values() ----------
const map3 = new Map();
map3.set("IN", "India");
map3.set("USA", "United States Of America");
map3.set("Fr", "France");

// sirf values chahiye
for (const value of map3.values()) {
  console.log(value); // India, United States..., France
}

// ❌ Map par for...in ka use nahi hota
// for...in object ke liye hota hai, Map ke liye nahi
for (const value in map3) {
  console.log(value); // output nahi aayega
}

// ======================= for...in =======================
// for...in Object par chalta hai
// keys return karta hai

const myObj1 = {
  name: "Pardeep",
  age: 27,
  class: "MCA",
};

// yahan i = key (name, age, class)
for (const i in myObj1) {
  console.log(i);           // key
  console.log(myObj1[i]);   // value
}

// ❌ Object par for...of kaam nahi karta
const myObj2 = {
  name: "Pardeep",
  age: 27,
  class: "MCA",
};

// for (const [key, value] of myObj2) {
//   console.log(key, value);
// }
// ❌ Error aayega kyunki object iterable nahi hota

// ======================= SHORT SUMMARY =======================
// for...of → values (Array, String, Map)
// for...in → keys (Object)
// Map → for...of ✔️ | for...in ❌
// Object → for...in ✔️ | for...of ❌
