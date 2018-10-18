var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
//setting middleware
app.use(express.static(__dirname + '/')); //Serves resources from public folder

app.get('/chess', function(req,res) {
    res.sendFile(__dirname + '/index.html');
})

app.get('/calendar', function (req, res) {
    res.sendFile(__dirname + '/Calendar/index.html');
});

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    console.log(req.body);
    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});