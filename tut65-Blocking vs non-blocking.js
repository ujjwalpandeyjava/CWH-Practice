//Synchronous or blocking 
const fs = require("fs")
// -line by line execution
let text1 = fs.readFileSync("externalFile.txt", "utf-8");

console.log(text1 +"\nThis is Synchrolous...")

//Asynchronous or non-blocking 
let text2 = fs.readFile("externalFile.txt", "utf-8", (error, data) => { console.log(error, data) });
console.log("This is Asynchrolous...")