//Good practice of nodejs backend.

const express = require("express")
const app = express()//Must two lines for express.

/* syntex
const hostname = 'localhost'
const port = 3000;  //Can use 80 so that we don't have to specify the port no.
app.get('/', () => {
    //Codes to be exceuted on this link click.
});
app.listen(hostname, port, () => {
    console.log(`Serves has been started on :- http://${hostname}:${port}/`)
});
//and work done. Express is used in scalable projects.
 */

 
const path = require("path");
const host = "localhost";
const port = 80;


// Static files Serving [ express.static('folderName') ]
app.use('/static', express.static('static'));

// Set the template engine as pug, Now on calling index.pug file will be rendered as HTML.
app.set('view engine', 'pug');                      //now can use .pug files. for showing html files. whithout mentioning extension.
// Set the views directory
app.set('views', path.join(__dirname, 'viewsFolderOfPug'));
// or
//  app.set('view','/viewsFolderOfPug');

/* 
PUG:- At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. 
This approach makes it easier to design an HTML page.
Some popular template engines that work with Express are Pug, Mustache, and EJS. 
*/

//Showing .pug files (pug file endpoint)
app.get('/indexPug', function (req, res) {
    res.render('indexPug', { title: 'Hey', message: 'Hello Pug file here...' })
})

app.get("/demo", (req, res) => {
    res.render('demo', { title: 'Hey Pandey', message: 'Hello there and thanks for telling me how to use pubG!' });
});


//Home page
app.get("/", (req, res) => {
    res.send("This is home page by express.")//will show ih the body of the html page.
});
//About page
app.get("/about", (req, res) => {
    res.send("This is about page by express. with get method.")
});
app.post("/about", (req, res) => {
    res.send("This is about page by express. with post method.")
});

/* //working contact get page
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
