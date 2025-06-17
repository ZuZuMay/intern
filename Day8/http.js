var http = require('http');
var url = require('url');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});

  if (req.url.includes('?')) {
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
  }
  
  //browser display this text
   else {
    res.end('Hello World!');
  }
}).listen(8080);
//terminal display
console.log("Server is running on http://localhost:8080");
