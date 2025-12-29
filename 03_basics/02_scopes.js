// 'let' and 'const' are block-scoped
// 'var' is function-scoped (or global-scoped if not inside a function)

if (true) {
  let a = 10;      // Accessible only inside this if block
  const b = 20;    // Accessible only inside this if block
  var c = 30;      // Accessible outside the block
}

// console.log(a); // ❌ Error: a is not defined (block-scoped)
// console.log(b); // ❌ Error: b is not defined (block-scoped)

console.log(c);    // ✅ Output: 30 (var is not block-scoped)
