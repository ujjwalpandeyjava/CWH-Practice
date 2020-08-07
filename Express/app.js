const express = require("express")      //Imported express module, Will return a function
const app = express()                   //constant app will run on express
const port = 80;
const path = require("path");
const fs = require("fs");

//Added later for static files 
//Static files are those files which are available to public to download without login.
//for serving static files, they view everything without processing. like chrome shortcut 'ctr+u'

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get("/", (req, res) => {
    res.send("This is my first express app");//in htlm page, we can pass whole url here
});
//example use in url 
app.get("/about", (req, res) => {
    res.send("This is my get method of about page in  express app");//in htlm page, we can pass whole url here
});
//example
app.post("/about", (req, res) => {
    res.send("This is my post method of about page in  express app");//in htlm page, we can pass whole url here
});
//example to get content from the server. entered by user.
//every entered value is saved on the attribute name.
app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age


    let outputToWrite = `the name of the client is ${name}, ${age} years old`
    fs.writeFileSync('output.txt', outputToWrite)//new file an contentcomm
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);

})
// START THE SERVER
app.listen(port, () => {
    console.log(`This express app has been started on port: ${port}`)
});
/*
use nodmon to restart server automatic
postman will help us to monitor all requests and resposes.nod
*/