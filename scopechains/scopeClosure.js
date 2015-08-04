// scopeClosure.js

function foo() {
	// scope of bar is within the function foo()
	// foo doesn't have access to quux
	var bar
	quux = 10
	
	function zip() {
		var quux = 20
		bar = true
	}
	
	// by just doing return zip, we are returning the 
	// function (not the value of the function)
	return zip
	
	// Note zip() invokes the function
	// return zip returns the function
}

/*
Explanatory example:
source: http://bit.ly/1IlPBT0 

function a() {
    alert('A');
}
//alerts 'A', returns undefined

function b() {
    alert('B');
    return a;
}
//alerts 'B', returns function a

function c() {
    alert('C');
    return a();
}
//alerts 'C', alerts 'A', returns undefined
function d() {
    function e() {
        alert('E');
    }
    return e;
}
d()();
//alerts 'E'

function counter() {
    var count = 0;
    return function() {
        alert(count++);
    }
}
var count = counter();
count();
count();
count();

*/