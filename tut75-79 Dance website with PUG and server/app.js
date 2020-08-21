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
    res.render('apply', { 'title': 'Apply in Pandey Dance Academy.com' });//to send html file use:- send file(__dirname+'fileName')
});
app.post("/apply", (req, res) => {
    console.log(req.body)//watch console log to see which data is recieved., values come with name attributes not with id or class.
    let name = req.body
    // write code to use data entered by user.

    res.render('apply', { 'title': 'Apply in Pandey Dance Academy.com' });//to send html file use:- send file(__dirname+'fileName')
});
app.get("/class_info", (req, res) => {
    res.render('class_info');
});
app.get("/Contact", (req, res) => {
    res.render('Contact', { 'title': 'Contact-Paney Dance Academy.com' });
});
app.post("/Contact", (req, res) => {
    console.log(req.body)//watch console log to see which data is recieved., values come with name attributes not with id or class.
    let name = req.body
    // write code to use data entered by user.
    res.render('Contact', { 'title': 'Contact-Paney Dance Academy.com' });
});



//START THE SERVER.
app.listen(port, (req, res) => {
    console.log(`Serves has been started on :- localhost:${port} `)
    // const honstname = '127.0.0.1';    console.log(`Serves has been started on :- http://${hostname}:${port}/`))
});