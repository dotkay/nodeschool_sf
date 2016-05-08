// array_reduce.js

function countWords (inputWords) {
  return inputWords.reduce(function (prev, next, index) {
    // console.log('Iteration: ', index);
    // console.log('prev: ', prev);
    // console.log('next: ', next);
    prev[next] = prev[next] + 1 || 1;
    return prev;
  }, {});   // the accumulator here is {}
}

module.exports = countWords;


/*
NOTES:

array.reduce takes four parameters:
prev : previous processed element that's returned in the last call to
       callback
                 OR
       the initial value if supplied (accumulator)
curr : current element in the array being processed
index: index of the current element being processed
array: the array itself

The catch is that if the initial value is provided prev takes
the initial value. reduce, unlike map or filter (which return an array)
can be made to return whatever type we want it to return. Here we
want it to return a list of tuples. So, we pass an empty list {} as
the accumulator

you could uncomment the console.log(...) statements and try this
function on a small array and look at the output to see how prev and
next behave - each (n+1)th iteration the prev is the return value
of the nth iteration of reduce.

*/
