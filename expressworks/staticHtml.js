// staticHtml.js

var path = require('path')
var express = require('express')
var app = express()

var port = process.argv[2]

// using the static files in public directory
// or use the static files provided by process.argv[3]
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
app.get('/', function(req, res) {
	res.end(index.html)
}).listen(port)