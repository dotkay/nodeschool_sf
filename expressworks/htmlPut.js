// htmlPut.js

var path = require('path')
var express = require('express')
var app = express()

var port = process.argv[2]

app.put('/message/:id', function(req, res) {
	var idee = req.params.id
	// createHash: is the kind of hash algo to be applied
	// update: is the data on which hash is to be computed
	// digest: output format
	res.end(require('crypto')
			.createHash('sha1')
			.update(new Date().toDateString() + idee)
			.digest('hex'))
}).listen(port)