/* 
Database(database)
collection(table)
document(column)
field(cell)
 */

//tut-81
// Inserting data in mongo db
use dataBase1;
db.items.insertOne({ name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98 })

db.items.insertMany([{ name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98 }, { name: "Moto 30s", price: 29000, rating: 3.5, qty: 133, sold: 598 }, { name: "Realme 80s", price: 129000, rating: 2.5, qty: 633, sold: 98, isBig: true }])

//tut-82
// Searching for data in mongo db
use dataBase1

// This query will return all the objects with rating equal to 3.5
db.items.find({ rating: 3.5 })
db.items.find({ rating: { $gte: 3.5 } })
db.items.find({ rating: { $gt: 3.5 } })
// And operator
db.items.find({ rating: { $gt: 3.5 }, price: { $gt: 4000 } })

db.items.find({ rating: { $lt: 3.5 }, price: { $gt: 114000 } })

db.items.find({
    $or: [{ rating: { $lt: 3.5 } }, { price: { $gt: 114000 } }]
})

//will show data with value 1, like rating in this e.g.
db.items.find({ rating: { $gt: 3.5 } }, { rating: 1 })
//will show data with value 1, like rating and price in this e.g.
db.items.find({ rating: { $gt: 3.5 } }, { rating: 1 }, { price: 1 })


//tut-83
show dbs 
use dataBase1
show collections

db.items.find({price: 22000})

// Deleting items from the Mongo Database
db.items.deleteOne({price: 22000})
// deleteOne will delete the first matching document entry in case of multi document match
db.items.deleteMany({price: 129000})

//tut-84
//Update data.
show dbs 
use dataBase1
show collections

db.items.find()
db.items.updateOne({name: "Moto 30s"}, {$set: {price: 2}})
//updates only one field in the document, which is price
db.items.find()
db.items.updateMany({name: "Moto 30s"}, {$set: {price: 3, rating: 1}})
//updates many field at a time in the document, which are price and rating


