// commandLine.js

var sum = 0
// you run this exercise as node commandLine.js arg1 arg2...
// var = 0: indicates the 'node' program
// var = 1: indicates this filename
// var = 2, ... are the commandline arguments
for (var i = 2; i < process.argv.length; i++) {
	sum += Number(process.argv[i])
}
console.log(sum)
