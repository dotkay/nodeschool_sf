// meetPipe.js
// input: a file as a first argument
// output: stream the input to stdout using pipe

var fs = require('fs');
// process.argv[2] is the argument
// ([2] because [0] is node, [1] is this program's name)
fs.createReadStream(process.argv[2]).pipe(process.stdout);
