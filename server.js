var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
//setting middleware
app.use(express.static(__dirname + '/')); //Serves resources from public folder
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var initialPlacement = [
    {piece: 'white p', placement: 'a2'},
    {piece: 'white p', placement: 'b2'},
    {piece: 'white p', placement: 'c2'},
    {piece: 'white p', placement: 'd2'},
    {piece: 'white R', placement: 'a1'}
]
let data = MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");

  var dbo = db.db('nyDB');
  dbo.createCollection('ChessPlacement', function (err, res) {
    if (err) throw err;
    console.log('collection created!');
  })

  dbo.collection('ChessPlacement').insertMany(initialPlacement, function(err, res) {
    if(err) throw err;
    console.log('Inserted ' + res.insertedCount + ' pieces');
  })
  MongoClient.connect(url, (err, db) => {

    if (err) throw err;

    db.listCollections().toArray((err, collections) => {

        if (err) throw err;

        console.dir(collections);

        db.close();
    });
});

  dbo.close;
})
var chessScript = require('./chessScript.js');
app.get('/chess', function(req,res) {
    res.sendFile(__dirname + '/index.html');
    for (let i = 0; i < 32; i += 1) {
        chessScript.drawPiece();
    }
})

app.get('/calendar', function (req, res) {
    res.sendFile(__dirname + '/Calendar/index.html');
});

app.post('/', function (req, res) {
    console.log('Post request recieved');
    // Connect to the db
    MongoClient.connect(url, function (err, db) {

         if(err) throw err;

         //Write databse Insert/Update/Query code here..

    });
    var name = req.body.firstName + ' ' + req.body.lastName;
    console.log(req.body);
    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});