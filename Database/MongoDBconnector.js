const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
var initialPlacement = [
    {piece: 'white p', placement: 'a2'},
    {piece: 'white p', placement: 'b2'},
    {piece: 'white p', placement: 'c2'},
    {piece: 'white p', placement: 'd2'},
    {piece: 'white p', placement: 'e2'},
    {piece: 'white p', placement: 'f2'},
    {piece: 'white p', placement: 'g2'},
    {piece: 'white p', placement: 'h2'}

]
console.log('MongoDBconnector imported');
module.exports insertData = MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;

    var dbo = db.db('myDB');
    dbo.createCollection('ChessPlacement', function (err, res) {
        if (err) throw err;
        console.log('collection created!');
    })

    dbo.collection('ChessPlacement').insertMany(initialPlacement, function(err, res) {
      if(err) throw err;
      console.log('Inserted ' + res.insertedCount + ' pieces');
    })};
    dbo.close;
})
