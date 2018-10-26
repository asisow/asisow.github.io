const express = require('express');
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
