var app = require('express').createServer(),
	    io = require('socket.io').listen(app)
	    fs = require('fs');

app.listen(3000);

exports.root = '.';
console.log('Started server on port 3000');

app.get('/', function (req, res) {
  console.log(__dirname + '/index.html');
  res.sendfile(__dirname + '/index.html');
});

// file is included here:
// eval(fs.readFileSync('kafka.js') + '');
eval(fs.readFileSync('kafka_node.js') + '');
