// httpUpperCaseServer.js

var http = require('http')
var fs = require('fs')
var map = require('through2-map')

// the first argument to the program
// provides the port to listen to
var port = process.argv[2]

var server = http.createServer(function (req, res) {

	// check if the req is a POST request
	// we're interested only in POST requests for this
	// exercise
	if (req.method === 'POST') {
		// the map is from through2-map module 
		req.pipe(map (function (chunk) {
			return chunk.toString().toUpperCase()
			// we just pipe the result (uppercased) as response
			// to the client
		})).pipe(res)
	}	
});

server.listen(port)

