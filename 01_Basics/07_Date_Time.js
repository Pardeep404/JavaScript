// Create a new Date object
let myDate = new Date();

// Local date and time methods
console.log("Day of the month:", myDate.getDate());            
console.log("Day of the week (0=Sunday, 6=Saturday):", myDate.getDay());             
console.log("Current Year:", myDate.getFullYear());        
console.log("Current Hour:", myDate.getHours());           
console.log("Current Milliseconds:", myDate.getMilliseconds());    
console.log("Current Minutes:", myDate.getMinutes());         
console.log("Current Month (0=Jan, 11=Dec):", myDate.getMonth());           
console.log("Current Seconds:", myDate.getSeconds());        
console.log("Timestamp (ms since Jan 1, 1970):", myDate.getTime());            
console.log("Timezone Offset (minutes from UTC):", myDate.getTimezoneOffset());  

// UTC date and time methods
console.log("UTC Day of the month:", myDate.getUTCDate());         
console.log("UTC Day of the week (0=Sunday, 6=Saturday):", myDate.getUTCDay());          
console.log("UTC Year:", myDate.getUTCFullYear());     
console.log("UTC Hour:", myDate.getUTCHours());        
console.log("UTC Milliseconds:", myDate.getUTCMilliseconds()); 
console.log("UTC Minutes:", myDate.getUTCMinutes());      
console.log("UTC Month (0=Jan, 11=Dec):", myDate.getUTCMonth());       
console.log("UTC Seconds:", myDate.getUTCSeconds());      

// Modify the date
console.log("Set day to 22, new timestamp:", myDate.setDate(22));          

// Date formatting methods
console.log("Readable Date String:", myDate.toDateString());       
console.log("ISO Date Format:", myDate.toISOString());        
console.log("JSON Date Format:", myDate.toJSON());             
console.log("Localized Date String:", myDate.toLocaleDateString()); 
console.log("Localized Date & Time:", myDate.toLocaleString());     
console.log("Localized Time String:", myDate.toLocaleTimeString()); 
console.log("Full Date-Time String:", myDate.toString());           
console.log("Time Part Only:", myDate.toTimeString());       
console.log("UTC Date-Time String:", myDate.toUTCString());  

// Additional methods
console.log("Timestamp using valueOf():", myDate.valueOf());            
console.log("Current Unix Timestamp (seconds):", Math.floor(Date.now() / 1000)); 
