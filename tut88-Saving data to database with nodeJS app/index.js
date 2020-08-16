const http = require("http");;
const express = require('express');
const app = express();
const fs = require("fs");
const hostname = "localhost";
const port = 3000;


//pages tp navigate.
let index = fs.readFileSync('./index.html') //File to read
let contact = fs.readFileSync('./contact.html') //File to read
let services = fs.readFileSync('./services.html') //File to read
let about = fs.readFileSync('./about.html') //File to read


//Navigations.
app.get('/', (req, res) => {res.end(index);
    // req.send("This is Contact page by express. with get method.");
});
app.get('/index', (req, res) => {res.end(index);
    req.send("This is Contact page by express. with get method.");
});
app.get('/services', (req, res) => {res.end(services);
    req.send("This is Contact page by express. with get method.");
});
app.get('/about', (req, res) => {res.end(about);
    req.send("This is Contact page by express. with get method.");
});
app.post('/contact', (req, res) => {re
    res.end(contact);



    req.send("This is Contact page by express. with post method.");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

