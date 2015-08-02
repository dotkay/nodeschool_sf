// timeServer.js

var net = require('net')

// port to listen to is provided as the
// first argument to our program
var port = process.argv[2]

// carving out a function to prefix the month, dates, 
// with 0
function zeroPrefix(i) {
	return (i < 10) ? ('0' + i) : i; 
}

// another function to form the date and time
function getDate() {
	var date = new Date()
	var yy = date.getFullYear()
	// for some weird reason getMonth() returns 1 less :-(
	var mm = zeroPrefix(date.getMonth() + 1)
	var dd = zeroPrefix(date.getDate())
	var h = zeroPrefix(date.getHours())
	var m = zeroPrefix(date.getMinutes())
	return (yy+'-'+mm+'-'+dd+' '+h+':'+m)
}

var server = net.createServer(function (conn) {
	conn.end(getDate() + '\n');
})
server.listen(port);