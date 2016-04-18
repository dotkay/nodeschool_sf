// htmlStream.js
// write some html to stdin, convert all html into
// upper-case for elements with class 'loud' and pipe
// the html result to stdout

// trumpet is used to create transform stream from a css selector
var trumpet = require('trumpet');
var through = require('through2');
var fs = require('fs');

// create a transform stream
var tr = trumpet();

// get the html from input
fs.createReadStream(process.stdin).pipe(tr);

var trStream = through(write, end);

function write(chunk, encoding, next) {
  var data = chunk.toString().toUpperCase();
  this.push(data);
  next();
};

function end(done) {
  this.push(null);
};

// collect the elements with class name 'loud'
var loudStream = tr.select('.loud').createStream();

loudStream.pipe(trStream).pipe(process.stdout);
