// httpGetSize.js

var http = require('http')
var urlAddr = process.argv[2]
var data = ''
var size = 0

http.get(urlAddr, function(res) {
	res.on('error', function(err) {
		console.log(err)
	});
	res.on('data', function(chunk) {
		/*
		convert to string using toString()
		or set the encoding to 'utf8'
		*/
		data += chunk.toString()
		size += chunk.toString().length
	});
	res.on('end', function() {
		console.log(size)
		console.log(data)
	})
})