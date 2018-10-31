const http = require('http');
const app = require(./app.js)

const port = process.env.PORT || 666;

const server = http.createServer();

server.listen(port);
console.log('we are listening port ' + port);
