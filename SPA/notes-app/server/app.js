let express = require('express');
let app = express();
port = 666;

app.listen(port);
console.log('Server on port ' + port + ' has started')

app.get('/', (req, res) => {
	res.send('Hello world');
});
