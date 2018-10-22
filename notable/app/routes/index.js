const noteRoutes = require('./note_routes');
module.exports = function(app, db) {
    noteRoutes(app, db);
}
module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        res.send('Hello')
    })
}
