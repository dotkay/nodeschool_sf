// httpJsonApiServer.js

var http = require('http')
var url = require('url')

// the first argument to the program
// provides the port to listen to
var port = process.argv[2]


var getTime = function(date) {
	return ( { 'hour' : date.getHours(),
			   'minute' : date.getMinutes(),
			   'second' : date.getSeconds()
			 })
}

var getUnixTime = function(date) {
	return ( { 'unixtime' : date.getTime() })
}

var server = http.createServer(function (req, res) {
	
	// check if it's a GET request
	if (req.method === 'GET') {
		
		// variable to collect the query string
		var result = ''
		// variable to hold the date
		var d = ''
	
		// get the url object to parse different
		// properties of the object (like pathname, query, etc.)
		// the second parameter is 'parseQueryString' which is
		// set to true as we want to parse the query
		// urlObj would look something like:
		//    { protocol: ...,
		//      auth: ...,
		//      host: ...,
		//      hostname: ...,
		//      port: ...,
		//      query: { iso: '...' },
		//      pathname: '/api/...',
		//      path: '/api/...?iso:'...',
		//      href: '/api/...?iso:'...' 
		//    }
		var urlObj = url.parse(req.url, true)
	
		// check if the pathname is '/api/parsetime'
		if (urlObj.pathname === '/api/parsetime') {

			// the query string has a property 'iso' whose
			// value is the date/time
			// urlObj.query would be something like
			// { iso: '....' }
			result = urlObj.query.iso
			// convert the result into date format
			d = new Date(result)
			// convert the date to extract what we want
			result = getTime(d)
			
		}
		
		// check if the pathname is '/api/unixtime'
		if (urlObj.pathname === '/api/unixtime') {
			result = urlObj.query.iso
			d = new Date(result)
			result = getUnixTime(d)
		}
	
		// lets convert the result into JSON format and
		// send it out as response to the client
		if (result) {
			res.writeHead(200, { 'Content-Type': 'application/json' })
			res.end(JSON.stringify(result))
		}
		// in case of failure, send 404 error msg
		else {
			res.writeHead(404)
			res.end()
		}
		
	}

}) 

server.listen(port)