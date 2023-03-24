var http = require('http');
var dt = require('./myfirstModule');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello there!');
    res.write('The current date & time are: ' + dt.myDateTime());
    res.end();
}).listen(8080);