// transform.js
// requires through2 module (npm install -g through2)
// input: contents from stdin
// output: input converted into uppercase

var through = require('through2');
var stream = through(write, end);

// write() function is called for every chunk of input
// we can do our transform here
function write(chunk, encoding, next) {
  var data = chunk.toString();
  this.push(data.toUpperCase());
  next();
};

// end() function is called when there's no further data in the
// buffer
function end (done) {
  this.push(null);
};

// pipe the input through the transform 'stream' all the way
// to the output
process.stdin.pipe(stream).pipe(process.stdout);
