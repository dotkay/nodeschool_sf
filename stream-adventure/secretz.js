// secretz.js
// input: an encrypted gzipped tar file piped through stdin
// output: print a hex-coded md5 hash of the file contents followed
//         by a single space followed by the filename, then a newline

var crypto = require('crypto');
var tar = require('tar');
var zlib = require('zlib');
var concat = require('concat-stream');

var parser = tar.Parse();
// - tar.Parse() function emits 'entry' events for each file
//   in the tar input.
// - Each 'entry' object is a readable stream of the file contents
//   of the tar archive
// - entry.type - is the kind of file ('File', 'Directory', etc)
// - entry.path - is the file path
parser.on('entry', function (e) {
  if (e.type != 'File') return;
  var fpath = e.path;
  var f = crypto.createHash('md5', { encoding : 'hex'});
  e.pipe(f).pipe(concat(function(hash) {
    console.log(hash + ' ' + fpath);
  }));
});

var cipher = process.argv[2];
var passphrase = process.argv[3];
process.stdin
  .pipe(crypto.createDecipher(cipher, passphrase))
  .pipe(zlib.createGunzip())
  .pipe(parser)
