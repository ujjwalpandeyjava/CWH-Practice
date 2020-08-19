const express = require("express")
const app = express()
const path = require('path')
const host = "localhost";
const port = 80;
const fs = require('fs');

//EXPRESS SPECIFIC STUFF/CONFIGRITION
app.use('/static', express.static('static'));
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine', 'pug');       //now can use .pug files. for showing html files. whithout mentioning extension.
app.set('views', path.join(__dirname, 'viewsFolderOfPug'));// Set the views directory
// or
//  app.set('view','/viewsFolderOfPug');


//ENDPOINTS
app.get('/', function (req, res) {
    res.render('indexPug', { title: 'Hey this is PUG.', message: 'Hello Pug file here...' })
});



app.get('/indexHTML', function (req, res) {
    const baseContent = 'Hello this is base content in pug file from parameters.';
    const parameters = { "title": 'HTHM in PUG', "base": baseContent };
    res.render('indexHTML', parameters);        // res.send('To send simple msg and render for fullfledge data.')
});



app.post('/indexHTML', function(req, res){
    console.log(req.body)//watch console log to see which data is recieved., values come with name attributes not with id or class.
    let name = req.body.name;
    let email = req.body.email;
    let address = req.body.address;
    let desc = req.body.desc;

    let data = `Food ordered by ${name} will be delivered at ${address}, ${desc}.\nAn recipt has been sent to ${name}'s mail id: ${email}.\n`
    fs.writeFileSync('DeliveryData.txt', data,function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    fs.appendFileSync('AllDeliveryData.txt', data,function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

    let para1 = { 'messege': 'Your data has been submitted succesfully.     '}
    res.render('indexHTML', para1);
});






app.get('/formSubmitted', function (req, res){
    res.send('<h1>Data has been submitted.</h1>')
    //codes to get data and submit in database.
});
app.get("/demo", (req, res) => {
    res.render('demo', { title: 'Hey Pandey', message: 'Hello there and thanks for telling me how to use pubG!' });
});


//START THE SERVER.
app.listen(port, (req, res) => {
    console.log(`Serves has been started on :- localhost:${port} `)
    // const honstname = '127.0.0.1';    console.log(`Serves has been started on :- http://${hostname}:${port}/`))
});
