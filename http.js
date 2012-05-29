/**
* Http server example + Module
* 
* test > http://localhost:8080/?q=world
*
*/
var http = require('http');
var h = require('./hello_parser');

http.createServer(function (req, res) {
  h.parse(req, function(value) {
    res.end("hello " + value);
  });
}).listen(8080, "127.0.0.1");

console.log("Server running at http://127.0.0.1:8080");