// httpServer.js
// input: http request
// output: send request stream as upper-case response to POST requests

var http = require('http');
var through = require('through2');
var fs = require('fs');

var stream = through(write, end);

// write() function is called for every chunk of input
// we can do our transform here
function write(chunk, encoding, next) {
  this.push(chunk.toString().toUpperCase());
  next();
};

// end() function is called when there's no further data in the
// buffer
function end(done) {
    this.push(null);
};

var httpServer = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(stream).pipe(res);
  }
}).listen(process.argv[2]);
