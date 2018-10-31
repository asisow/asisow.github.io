const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/initialPlacement";

const chessScript = require('./static/chessScript');
const script = chessScript;
const figureView = "♕♔♗♘♖♙♛♚♝♞♜♟";

let basePlacement = [
    {type: 'p', position: 'a2'},
    {type: 'p', position: 'b2'},
    {type: 'p', position: 'c2'}
];

exports.initiateChessPlacement = (dbName, collectionName) => {
    MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {
    const db = client.db(dbName)
    const collection = db.collection(collectionName);
        if(err) {
            return console.log(err);
        }
        collection.insertMany(basePlacement, function(err, result) {
            if (err) {
                return console.log(err);
            }
        });
        client.close;
    })
};
exports.clearBoardToInitial = (dbName, collectionName) => {
    MongoClient.connect(url, {useNewUrlParser: true}, function(err, client){
        const db = client.db(dbName)
        const collection = db.collection(collectionName);
        if (err) throw err;

        collection.deleteMany({})
    })
}

exports.getChessPlacement = (dbName, collectionName) => {
    let resultArray = [];
    MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {
        if (err) throw err;
        const db = client.db(dbName)
        const collection = db.collection(collectionName);
        let cursor = collection.find();
        cursor.forEach(function(doc, err) {
            if (err) throw err;
            resultArray.push(doc);
            chessScript.drawPiece = (figureView[4], doc.position, doc.type + doc.cplor + 'piece');
        }), function() {
             db.close;
        }
    })
}

exports.makeAMoveRecord = [];