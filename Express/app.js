const express = require("../node_modules/express")     //Will return a function
const app = express()
const port = 80;


app.get("/", (req, res) => {
    res.send("This is my first express app");
}); 
app.listen(port,()=>{
    console.log(`This express app has been started on port: ${port}`)
});


/*
ppostman will help us to monitor all requests and resposes.nod
*/