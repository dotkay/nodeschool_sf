// httpClient.js
// send a http post request to http://localhost:8099 and
// pipe stdin into it.
// Further, pipe the response stream to stdout
//
// requires request (npm install request)


var request = require('request');

// send a http post request
var r = request.post('http://localhost:8099');

// pipe stdin into it and pipe the result to stdout
process.stdin.pipe(r).pipe(process.stdout);
