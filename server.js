const express = require('express');
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

var placement = db.getChessPlacement(dbName, collectionName);
console.log(placement);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
})