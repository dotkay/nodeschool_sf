// scopeShadow.js

function foo() {
	// scope of bar is within the function foo()
	// foo doesn't have access to quux
	var bar
	// not using 'var' or 'let' for this assignment
	// so, quux would become a global variable
	quux = 10
	
	function zip() {
		// zip() has access to both bar and quux
		// since 'quux' has the same name as foo()'s
		// it will shadow all other 'quux' 
		var quux = 20
	}
}