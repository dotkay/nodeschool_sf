// filteredList.js

// The program accepts two command line arguments
// First: the directory whose files you want to list
// Second: the file extension that you want to filter
//         while listing the files

var fs = require('fs')
var path = require('path')
var filteredList = []

var filterFiles = function (dir, ext) {
	ext_name = '.' + ext
	// readdir has a callback function that provides
	// the 'list' (an array) of files in 'dir'
	
	fs.readdir(dir, function (err, list) {
		// the list could be filtered to pick out
		// only the files of interest
		// in this case we use path.extname to
		// get the file extensions of the files in
		// list and filter out those that match 
		// ext_name
		list.filter(function (el) { 
			if (path.extname(el) === ext_name) {
				filteredList.push(el)
				console.log(el)
			}
		})
	})
}

filterFiles(process.argv[2], process.argv[3])