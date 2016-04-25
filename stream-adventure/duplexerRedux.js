// duplexerRedux.js
// given a readable stream - a 'counter' as the first
// argument to the exported function which returns
// a duplex stream with 'counter' as the readable.
// input stream is a 2-character country field, like "US", "GB", etc.
// count the number of unique country codes
var duplex = require('duplexer2');
var through = require('through2').obj;

module.exports = function (counter) {

  // the 'counts' object to collect the country counts
  var counts = {};
  var inputStream = through(write, end);
  return duplex({objectMode: true}, inputStream, counter);

  // write and end functions of through (write, end);
  function write (data, _, next) {
    counts[data.country] = (counts[data.country] || 0) + 1;
    next();
  }

  function end(done) {
    counter.setCounts(counts);
    done();
  }

};
