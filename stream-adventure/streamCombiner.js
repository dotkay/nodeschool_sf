// streamCombiner.js
// input: new-line separated JSON list of science-fiction genres and books
// output: a module that returns a readable/writable stream, turning the input
//         into a specific format: a new-line separated JSON lines of genres,
//         each with a 'books' array containing all the books in the genre
//         Also Gzip the output stream before returning
/*
  input:
   {"type":"genre","name":"cyberpunk"}
   {"type":"book","name":"Neuromancer"}
   {"type":"book","name":"Snow Crash"}
   {"type":"genre","name":"space opera"}
   {"type":"book","name":"A Deepness in the Sky"}
   {"type":"book","name":"Void"}

  yields output:
    {"name":"cyberpunk","books":["Neuromancer","Snow Crash"]}
    {"name":"space opera","books":["A Deepness in the Sky","Void"]}
*/


var combine = require('stream-combiner');
var through = require('through2');
var split = require('split');
var zlib = require('zlib');

module.exports = function () {
  var thro = through(write, end);
  var currData;

  function write(data, encoding, next) {

    // if there's no book data to read...
    if (data.length === 0) return next();

    // if there's book data, parse the data
    var row = JSON.parse(data);
    // check if the read line is of type 'genre'
    if (row.type === 'genre') {
      if (currData) {
        this.push(JSON.stringify(currData) + '\n');
      }
      currData = { name: row.name, books: []};
    }
    // check if the read line is of type 'book'
    if (row.type === 'book') {
      currData.books.push(row.name);
    }

    // as usual, call the next..
    next();
  }

  function end(done) {
    if (currData) {
      this.push(JSON.stringify(currData) + '\n');
    }
    done();
  }
  // split () - splits the stream to break on new lines
  // thro - passes the stream thro a magical tube transforming it
  //        as per the write() and end() functions above
  // Gzip - Gzip the output - as required by the output spec
  return combine(split(), thro, zlib.createGzip());
}

/*
Notes:

The `stream-combiner` module creates a pipeline from a list of streams,
returning a single stream that exposes the first stream as the writable side and
the last stream as the readable side like the `duplexer` module, but with an
arbitrary number of streams in between. Unlike the `duplexer` module, each
stream is piped to the next. For example:

    var combine = require('stream-combiner');
    var stream = combine(a, b, c, d);

will internally do `a.pipe(b).pipe(c).pipe(d)` but the `stream` returned by
`combine()` has its writable side hooked into `a` and its readable side hooked
into `d`.

As in the previous LINES adventure, the `split` module is very handy here. You
can put a split stream directly into the stream-combiner pipeline.
Note that split can send empty lines too.

*/
