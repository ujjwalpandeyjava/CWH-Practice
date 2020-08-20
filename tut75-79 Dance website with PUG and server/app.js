const express = require("express")
const app = express()
const path = require('path')
const port = 3000;

//EXPRESS SPECIFIC STUFF/CONFIGRITION
app.use('/static', express.static('static')); 
//app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded())                   //To get data fom the page and add mongo database.

//PUG SPECIFIC STUFF
app.set('view engine', 'pug');       //now can use .pug files. for showing html files. whithout mentioning extension.
app.set('views', path.join(__dirname, '/view'));// Set the views directory



//END POINTS
app.get("/", (req, res) => {
    res.render('Index'); //to send pug file. feel free to use pug as it can contain both html and pug files.
});
app.get("/index", (req, res) => {
    res.render('Index');
});
app.get("/apply", (req, res) => {
    res.render('apply');//to send html file use:- send file(__dirname+'fileName')
});
app.get("/class_info", (req, res) => {
    res.render('class_info');
});
app.get("/Contact", (req, res) => {
    res.render('Contact');
});



//START THE SERVER.
app.listen(port, (req, res) => {
    console.log(`Serves has been started on :- localhost:${port} `)
    // const honstname = '127.0.0.1';    console.log(`Serves has been started on :- http://${hostname}:${port}/`))
});