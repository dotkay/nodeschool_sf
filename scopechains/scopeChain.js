// scopeChain.js

function foo() {
	// scope of bar is within the function foo()
	// foo doesn't have access to quux
	var bar
	
	function zip() {
		// zip() has access to both bar and quux
		var quux
	}
}