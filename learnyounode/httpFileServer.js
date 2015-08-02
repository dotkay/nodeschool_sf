// httpFileServer.js

var http = require('http')
var fs = require('fs')

// the first argument to the program
// provides the port to listen to
var port = process.argv[2]
// the second argument to the program
// provides the file to be served
var file = process.argv[3]

var server = http.createServer(function (req, res) {

	// creates a readable stream and opens the file
	// as a readable stream
	var readStream = fs.createReadStream(file)
	
	// wait until the readable stream is valid
	readStream.on('open', function () {
		// pipe the readable stream as response to the client
		readStream.pipe(res)
	})
	// handle errors if you want to
	// readStream.on('error', function (err) { ... })
});

server.listen(port)

