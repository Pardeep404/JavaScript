// if

// <, >, <=, >=, ==, !=, ===, !==, &&, ||

const tempearture = 41;

if (tempearture < 50) {
  console.log("Tempearture less then 50");
} else if (tempearture > 50) {
  console.log("Tempearture greater then 50");
} else {
  console.log("Enter Tempearture");
}

if (2 < 3) {
  console.log("Condition one True");
}
if (2 <= 3) {
  console.log("Condition Two True");
}
if (3 > 2) {
  console.log("Condition Three True");
}
if (3 >= 2) {
  console.log("Condition Four True");
}
if (2 == 3) {
  console.log("Condition five True");
} else {
  console.log("Condition five False");
}
if (2 !== 3) {
  console.log("Condition Six True");
} else {
  console.log("Condition Six False");
}
if (2 === 2) {
  console.log("Condition Seven True");
} else {
  console.log("Condition Seven False");
}
if (2 === "2") {
  console.log("Condition Eight True");
} else {
  console.log("Condition Eight False");
}
if (2 === 2 && 3 === 3) {
  console.log("Condition Nine True");
}
if (2 === 2 && 3 === 4) {
  console.log("Condition Ten True");
} else {
  console.log("Condition Ten false");
}
if (2 === 2 || 3 === 3) {
  console.log("Condition Eleven True");
}
if (2 === 2 || 3 === 4) {
  console.log("Condition Twelve True");
} else {
  console.log("Condition Twelve false");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? undefined ?? 30
val1 = 10 ?? 20 ?? 30;

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");
