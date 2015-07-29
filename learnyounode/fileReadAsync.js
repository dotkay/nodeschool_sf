// fileReadAsync.js

var fs = require('fs')
var num_lines = 0

// fs.readFile has callback function with the signature
// function callback (err, data) { ... }
// data contains the read data from the file if the read
// is successful
fs.readFile(process.argv[2], function (err, data) {
	if (err)
		console.log(err)
	else {
		num_lines = data.toString().split('\n').length - 1
		console.log(num_lines)
	}
})