// websockets.js
// use websocket-stream module to write some browser code
// that prints "hello\n"

var fs = require('fs');
var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');

stream.write('hello\n');
