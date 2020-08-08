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
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
});

app.get("/", (req, res) => {
    req.send("This is home age by express.")

});
app.get("/about", (req, res) => {
    req.send("This is about page by express. with get method.")
});
app.get("/about", (req, res) => {
    req.send("This is about page by express. with post method.")
});

app.listen(port, (req, res) => {
    console.log(`Serves has been started on :- localhost:${port} `)
    // const honstname = '127.0.0.1';    console.log(`Serves has been started on :- http://${hostname}:${port}/`))
});
