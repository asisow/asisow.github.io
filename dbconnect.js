const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/initialPlacement";

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
            console.log(result);
        });
        client.close;
    })
};
exports.clearBoardToInitial = (dbName, collectionName) => {
    MongoClient.connect(url, {useNewUrlParser: true}, function(err, client){
    const db = client.db(dbName)
    const collection = db.collection(collectionName);
    if(err) {
            return console.log(err);
        }
    collection.deleteMany({})
    })
}

exports.getChessPlacement = (dbName, collectionName) => {
    MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {
    if (err) throw err;
    const db = client.db(dbName)
    const collection = db.collection(collectionName);
    console.log(collection);
    })
}

module.exports.test = 'Oops!';