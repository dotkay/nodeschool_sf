// transformLines.js
// input: input from stdin
// output: output to stdout with even-numbered lines from input
// transformed to upper-case
// use split() and through2

var split = require('split');
var through = require('through2');
var stream = through(write, end);

lineNo = 0;
// write() function is called for every chunk of input
// we can do our transform here
function write(chunk, encoding, next) {
  var data = chunk.toString();
  if (lineNo == 0 || lineNo % 2 == 0) { // even numbered lines
    this.push(data.toLowerCase() + '\n');
  }
  else { // odd numbered lines
    this.push(data.toUpperCase() + '\n');
  }
  lineNo++;
  next();
};

// end() function is called when there's no further data in the
// buffer
function end(done) {
  this.push(null);
};

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
