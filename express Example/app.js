//Good practice of nodejs backend.

const http = require("http")    //server services
const fs = require("fs")        //File services
const express = require("express")
const path = require("path");
const app = express()
const host = "localhost";
const port = 80;


// For serving static files
app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))

// Our pug demo endpoint
app.get("/demo", (req, res) => {
    res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
});


//File serving
let contact = fs.readFileSync('./contact.html') //File to read


//Express codes to navigate and send recieve data to from a targeted page.
app.get("/", (req, res) => {
    res.send("This is home page by express.")//will show ih the body of the html page.
});
app.get("/about", (req, res) => {
    res.send("This is about page by express. with get method.")
});
//trying.
app.post("/about", (req, res) => {
    res.send("This is about page by express. with post method.")
});
/* //working
 app.get("/contact", (req, res) => {
    res.end(contact);
    //res.send("This is Contact page by express. with get method.").end(contact)
    //Can't send to things.
});
 */
app.post("/contact", (req, res) => {
    res.send("This is Contact page by express. with post method.")
});

app.listen(port, (req, res) => {
    console.log(`Serves has been started on :- localhost:${port} `)
    // const honstname = '127.0.0.1';    console.log(`Serves has been started on :- http://${hostname}:${port}/`))
});
