// duplexer.js
// program to spawn a process from `cmd` string and
// returning a duplex stream join stdin and stdout of
// the spawned process

var duplexer = require('duplexer2');
var spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
  // spawning a child process
  var child = spawn(cmd, args);
  // return the duplex stream
  return duplexer(child.stdin, child.stdout);
};
