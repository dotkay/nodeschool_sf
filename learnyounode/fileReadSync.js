// fileReadSync.js

var fs = require('fs')

// The path to the file to be read is given as the first
// command-line argument, which is actually process.argv[2]
// The first argument is node (process.argv[0]) and the
// second is the file name of this program - fileReadSync.js
// (process.argv[1]

// toString() on process.argv[2] converts the argument into a 
// string. I think process.argv returns a string and so this 
// is actually not required

var data = fs.readFileSync(process.argv[2].toString())
// Again, .toString() converts the data into a string
// split(x) splits the string using the marker 'x' and
// fills the resulting pieces in an array whose length
// is obtained by .length()
var num_lines = data.split('\n').length - 1
console.log(num_lines)
