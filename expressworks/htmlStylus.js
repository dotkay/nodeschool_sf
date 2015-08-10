// htmlStylus.js

var path = require('path')
var express = require('express')
var app = express()
var stylus = require('stylus')

var port = process.argv[2]

var staticFilePath = process.argv[3]

// use the express static middleware
app.use(express.static(staticFilePath || path.join(__dirname, 'public')))

// use the stylus middleware along with express
// src: is the location of the *.styl files 
// dest: is the the location of the compiled files (*.styl -> *.css)
app.use(stylus.middleware({ debug: true,
							src: (staticFilePath || path.join(__dirname, 'public')),
							dest: (staticFilePath || path.join(__dirname, 'public'))
						  }))

app.get('/', function(req, res) {
	req.end('index')
}).listen(port)

// TODO: test the above without using nodeschool's test infrastructure
//       to understand if the .css files are properly generated from .styl files
//       in the proper locations