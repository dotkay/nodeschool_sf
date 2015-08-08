// expressJade.js

// var path = require('path')
var express = require('express')
var app = express()

var port = process.argv[2]

// set the path to 'views' 
// 'views' contains the html jade templates
// we set it to path.join(__dirname, 'templates')
// using the app.set()
// app.set('views', path.join(__dirname, 'templates'))
// this is very similar to setting the path to 'public'
// folder in staticHtml.js (Ex.2.)

// app.set('views', path.join(__dirname, 'templates'))
// here, we will just use the jade file provided by 
// nodeschool - which is available via process.argv[3]
app.set('views', process.argv[3])

// we also set the template engine to jade which is available
// in the path provided by process.argv[3] or the path.join(...)
app.set('view engine', 'jade')

app.get('/home', function(req, res) {
	// index is the name of the jade file (index.jade)
	res.render('index', { date: new Date().toDateString() })
	// toDateString() converts date into a human readable
	// format, removing the time part of it
}).listen(port)