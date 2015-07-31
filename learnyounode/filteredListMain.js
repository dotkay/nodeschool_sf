// filteredListMain.js

var fs = require('fs')
var path = require('path')

var dir = process.argv[2].toString()
var ext = process.argv[3].toString()

var flist = require('./filteredListModule.js')

/* the included module gives is a function whose
   callback gives us err or the list in the success
   case. Since we did 'callback(null, list)' in the
   module file, we are passing the function that takes
   a pair (e, lst) and retrieve the list. If we had 
   done 'callback(list)' in the module function, we 
   would just have the callback signature 
       function(lst) { ... }
*/
flist(dir, ext, function(e, lst) {
	lst.forEach(function (el) { console.log(el) })
})
