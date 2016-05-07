// array_map.js
// write a function to double each element of an input array 'numbers'
// use map instead of looping over the array

function doubleAll(numbers) {
  return numbers.map(function (el) {
    return el * 2;
  });
};

module.exports = doubleAll;
