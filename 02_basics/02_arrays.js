// 1️⃣ push() → array ke andar array add hota hai (nested)
marvel_heros.push(dc_heros);
// ["Thoe","Ironman","Spiderman", ["Superman","Batman","Flash"]]

// 2️⃣ concat() → new flat array return karta hai
const all_heros = marvel_heros.concat(dc_heros);
// ["Thoe","Ironman","Spiderman","Superman","Batman","Flash"]

// 3️⃣ spread (...) → best & modern way
const all_new_heros = [...marvel_heros, ...dc_heros];
// ["Thoe","Ironman","Spiderman","Superman","Batman","Flash"]


// 4️⃣ flat() → nested array ko single array banata hai
another_array.flat(Infinity);
// [1,2,3,4,5,6,7,8,9,10,11,12]


// 5️⃣ Array.isArray() → check array hai ya nahi
Array.isArray("Pardeep"); 
// false


// 6️⃣ Array.from() → iterable ko array banata hai
Array.from("Pardeep"); 
// ["P","a","r","d","e","e","p"]

Array.from({ name: "Pardeep" }); 
// []  ❌ (object iterable nahi hai)


// 7️⃣ Array.of() → values se array banata hai
Array.of(score1, score2, score3);
// [100, 200, 300]
