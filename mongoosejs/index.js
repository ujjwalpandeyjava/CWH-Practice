/*
    Mongodb = database
    mongod = process to let database used by any tech
    mongoose =  A library to let nodejs app use monog database.
    powershell = one of the tech to use mongo database.
    Different tech which can use 'noSQL' monogo database:- powershell of pc, mongoose, python libraies, java app lib, etc.
*/

// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/database1', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("WE are connected!!")
});

//(Createda a schema.) Helps us to define the database what to enter and what to restricts.
const kittySchema = new mongoose.Schema({
    name: String
});


// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
    const greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
}


//Constant (we created a model.)
const Kitten = mongoose.model('Kitten', kittySchema);
//Name of collection is the pural form of name given to object in the database mentioned while connecting.


//Different objects to save in database.
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

//Saves
//must use new object for every object.
fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
});
silence.save(function (err, s) {
    if (err) return console.error(err);
    s.speak();
});



//Find in the collection
Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
});

//Finding with a callback: can be function, value, obj,  anything.
Kitten.find({ name: /^fluff/ }, callback);
