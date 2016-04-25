// decrypt.js
// decrypt the data from input (process.argv[2]) and
// stream the result to stdout

var crypto = require('crypto');
var stream = crypto.createDecipher('aes256', process.argv[2]);
(process.stdin).pipe(stream).pipe(process.stdout);
