// filteredListModule.js

var fs = require('fs')
var path = require('path')
var filteredList = []

module.exports = 

	function (dir, ext, callback) {
		var ext_name = '.' + ext;
		fs.readdir(dir, function(err, list){
			/* readdir uses the anonymous callback
			   function that provides us with the list
			   of files when the function completes 
			 */
			 
			 /* since it's an async function call, 
			    the only way we can access the data
				is through a callback function. This
				was better understood by the following
				discussion in Stackoverflow:
				http://bit.ly/1SmfcFk
			*/
			if (err) { callback(err) }
			else { 
				list.filter(function (el) {
					if (path.extname(el) === ext_name)
						filteredList.push (el)
				})
			/* we the callback function contains the
			   data we need - the list. We just decide
			   to use the callback function to return
			   a tuple (null, list), it could as well 
			   be just the list - callback(list) - to
			   be identical to 'callback(err)' above.
			   Or we could do 'callback(err, [])' to 
			   match with the success case
			 */
				callback(null, filteredList);
			}
		});
	}	