var url = require('url');
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var file = "." + q.pathname;

    fs.readFile(file, function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('Page not found'); //without return it will not explicity display the text to screen
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

