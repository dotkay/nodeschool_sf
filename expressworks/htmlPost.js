// htmlPost.js

var express = require('express')
var app = express()

// we will use a module called 'body-parser'
// specifically, we will use the middleware
// 'urlencoded' from this module
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded( { extended: false } ))

var port = process.argv[2]

app.post('/form', function(req, res) {
	var rev_str
	// we are collecting the value of 'str' from
	// the form
	// in the HTML form, it would appear as:
	// <form><input name="str"/></form>
	if (!req.body) return res.sendStatus(400)
	rev_str = req.body.str.split('').reverse().join('')
	// this should be req.send(...). I guess the send()
	// also ends the req (which has to be ended!). 
	res.end(rev_str)
}).listen(port)
