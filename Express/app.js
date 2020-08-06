const express = require("express")     //Will return a function
const app = express()
const port = 80;


app.get("/", (req, res) => {
    res.send("This is my first express app");//in htlm page, we can pass whole url here
}); 
app.listen(port,()=>{
    console.log(`This express app has been started on port: ${port}`)
});


/*
ppostman will help us to monitor all requests and resposes.nod
*/