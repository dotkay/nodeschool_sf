// staticHtml.js

var path = require('path')
var express = require('express')
var app = express()

var port = process.argv[2]
var staticFilePath = process.argv[3]

// use the express static middleware
app.use(express.static(staticFilePath || path.join(__dirname, 'public')))
app.get('/', function(req, res) {
	res.end('index.html')
}).listen(port)