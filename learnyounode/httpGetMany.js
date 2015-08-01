// httpGetMany.js

var http = require('http')
var urlList = [process.argv[2], process.argv[3], process.argv[4]]

var dataArr = [] // array for collecting the responses from each url
var cnt = 0      // counter for tracking when data from all the urls 
                 // have been collected

function httpGetMany(urlList) {
	// essentially similar to httpGet.js
	// for each url in urlList (so the loop!)
	urlList.forEach(function (el, idx) {
		// the responses might come out-of-order
		// so we need to track it. So, we use the
		// index 'idx' in the above callback along 
		// with the element 'el' 
		http.get(el, function(res) {
			// for each url, string for collecting data
			var dataout = ''
			res.on('error', function(err) {
				console.log(err)
			});
			res.on('data', function(chunk) {
			// dataout is getting filled for each url
			// so, for url1 dataout is managed locally and
			// is getting populated, different from dataout of
			// url2. This is confusing for me sometimes when
			// I look at my own code
				dataout += chunk.toString()
			});
			res.on('end', function() {
				// one of the http response has ended with some data
				// so increment count
				cnt += 1
				dataArr[idx] = dataout
				// when cnt reaches 3, all the urls have finished
				// sending the data, so just print them out
				if (cnt == 3)
					dataArr.forEach(function (el) { console.log(el) })
			})
		}) // http.get( ...
	}) // urlList.forEach( ...
}

httpGetMany(urlList)