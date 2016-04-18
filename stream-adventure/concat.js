// concat.js
// input: input stream from stdin
// output: input reversed and piped to stdout

var concat = require('concat-stream');

var transform = function(data) {
  var revStr = data.toString().split('').reverse().join('');
  console.log(revStr);
  return revStr;
};

process.stdin.pipe(concat(transform));
