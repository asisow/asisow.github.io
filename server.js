const express = require('express');
<<<<<<< HEAD
const database = require(__dirname + '/Database/MongoDBconnector.js');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
//setting middleware
app.use(express.static(__dirname + '/')); //Serves resources from public folder

console.log('app.url')



app.get('/chess', function(req,res) {
    console.log(app.url);
    res.sendFile(__dirname + '/index.html');
})
=======
const db = require('./dbconnect.js');
const dbName = 'chess';
const collectionName = 'basePlacement'
const app = express();

app.use(express.static(__dirname + '/static'));


let port = 666;
app.listen(port);
console.log("we're on, on port " + port);

const chessScript = require('./static/chessScript');
const script = chessScript;
>>>>>>> c6880f3322e11bbd2b45e0a0865eff4e2113ac04

var placement = db.getChessPlacement(dbName, collectionName);
console.log(placement);

<<<<<<< HEAD
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
=======
app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
})
>>>>>>> c6880f3322e11bbd2b45e0a0865eff4e2113ac04
