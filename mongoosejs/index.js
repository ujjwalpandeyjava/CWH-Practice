//Mongoose simply means nodejs database program/web app

/*  mongodb = database
    mongo = client (like shell, compass, nodejs, pythone app, web app, etc.)
    mongod = process (without it database is kind of off.)
    mongoose package to connect mongodb with nodejs app and mongod. (Libarary) give us ability to add validation (schema)
*/

// getting-started.js (index.js) file where database code is written or connected.

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/database1', { useNewUrlParser: true, useUnifiedTopology: true });
// It connects nodejs app to mongodb with the help of mongoose and mongod.

const db = mongoose.connection; //line which connect literally.
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    // console.log("We are connected.")
});
/*
    Schema: Everything in Mongoose starts with a Schema. Each schema maps to a
            MongoDB collection and defines (controls) the shape of the documents within that collection.

*/
//Using Mongoose in NodeJs
//NOw read from moongose documentations.

const kittySchema = new mongoose.Schema({
    fName: String,
    lName: String
});//We define the schema only once.


// NOTE: Methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
    const greeting = this.fName ? "Meow name is " + this.fName : "I don't have a name";
    console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);//Final compiled schema, we will create objects of it to enter values.
//This line will also create a new collection in mentioned database with it's pural version. e.g. Kitten- kittens.
//Check database for confirmation.

var myKittenobj = new Kitten({ fName: 'Taken', lName: ' sets' }); //Passed values to get entered in database
var myKittenobj2 = new Kitten({ fName: 'Manisha', lName: ' pandey' });
var myKittenobj3 = new Kitten({ fName: 'Tanisha', lName: ' pandey' });

// console.log(myKittenobj);
// console.log("direct call" + myKittenobj.fName + myKittenobj.lName);
// myKittenobj.speak();
//Till now not added in database.

/* 
//Now we will add data in database.with the help of save method.
myKittenobj.save(function (err, myKittenobj) {
    if (err) return console.error(err);
    myKittenobj.speak();
});
myKittenobj2.save(function (err, k) {
    if (err) return console.error(err);
    k.speak();
});
myKittenobj3.save(function (err, k) {
    if (err) return console.error(err);
    k.speak();
});//It will get saved as mentioned in the mentioned database and a new collection which is pural of name given to model.(e.g. Kitten here)
 */

//Find operation in mongoose/nodejs app.
Kitten.find({ fName: 'Manisha' }, function (err, Kittens) {
    if (err) return console.error(err);
    console.log(Kittens);
});
Kitten.find({ fName: 'Tanisha' }, function (err, Kittens) {
    if (err) return console.error(err);
    console.log(Kittens);
});
Kitten.find({ fName: 'Taken' }, function (err, Kittens) {
    if (err) return console.error(err);
    console.log(Kittens);
});