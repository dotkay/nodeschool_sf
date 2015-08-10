// htmlQuery.js

var express = require('express')
var app = express()

var url = require('url')

var port = process.argv[2]

app.get('/search', function(req, res) {
	var urlParts = url.parse(req.url, true)
	var query = urlParts.query
	res.end(JSON.stringify(query))
}).listen(port)


/*
Actual solution: very simple!

app.get('/search', function(req, res){
  var query = req.query
  res.send(query)
})
*/