const myDate = new Date(); // current date & time

// Date format methods
// myDate.toString()            → full date + time
// myDate.toDateString()        → readable date
// myDate.toISOString()         → ISO format (UTC)
// myDate.toJSON()              → JSON date
// myDate.toLocaleDateString()  → local date
// typeof myDate                → "object"


// Custom date (YEAR, MONTH, DAY)
// ⚠️ Month is 0-based (0 = Jan, 9 = Oct)
const myCreateData = new Date(1998, 9, 18);

console.log(myCreateData);                    // Date object
console.log(myCreateData.toDateString());     // Sun Oct 18 1998
console.log(myCreateData.toLocaleDateString());// 18/10/1998

// Timestamps
console.log(Date.now());                      // milliseconds
console.log(Math.floor(Date.now() / 1000));   // seconds

// Get methods
console.log(myCreateData.getDate());           // 18
console.log(myCreateData.getDay());            // 0 (Sunday)
console.log(myCreateData.getFullYear());       // 1998
console.log(myCreateData.getHours());          // hour (0–23)
console.log(myCreateData.getMonth());          // 9 (October)
