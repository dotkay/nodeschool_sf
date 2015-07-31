// httpGet.js

var http = require('http')
var urlAddr = process.argv[2]

var data = ''

http.get(urlAddr, function(res) {
	res.on('error', function(err) {
		console.log(err)
	})
	res.on('data', function(chunk) {
		// using toString() to encode the data as a string
		// an alternate way is to set the encoding
		//         res.setEncoding('utf8')
		// appending '\n' to print the data one per line
		data += chunk.toString() + '\n'
	})
	res.on('end', function() {
		console.log(data)
	})
})

