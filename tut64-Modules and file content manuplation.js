//Built in modules.
//Mdules are external code return by others which we want to use like a library or class.

/* const fs = require("fs");
let text = fs.readFileSync("externalFile.txt", "utf-8");
text = text.replace("material", "new materials");

console.log("The content of the file is: ")
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("newFile2.txt", text); */

const fs = require("fs")
/*//Already present file reading
    const text = fs.readFileSync("externalFile.txt", "utf-8")
    console.log("\nFrom text \n" +text) 
        //Content replacing. and file creating
    let text2 = fs.readFileSync("externalFile.txt","utf-8")
    console.log("\nFrom text2 \n" +text2 +"\n")           //file 1 old content
        //Replacing
    text2 = text2.replace("material","Changed")     //Will change only first one.
    console.log("From new file \n" +text2)           //file 2's new content before adding in new file (don't know created or not created)

    console.log("Creating new file.....")
    fs.writeFileSync("newFile2.txt",text2 +" created with code")    
        //Creates new file with data text2 in it, if file exit delete old and create new one.
    console.log("File created.") 
*/