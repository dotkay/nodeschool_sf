// get_short_msgs.js
// Write a function that takes an array of objects with .message
// properties and returns and array of messages that are < 50
// characters long

function filterByLength(objArr) {
  if (objArr.message.length < 50) {
    return true;
  }
  else {
    return false;
  }
}

function getShortMessages(objArr) {
  var msgArr = objArr.filter(filterByLength);
  return msgArr.map(function (el) {
    return el.message;
  });
}

module.exports = getShortMessages;



/*
NOTE:

Or you can compose both the filter and map functions (makes it
a little unreadable, but terse code). The basic idea is just
               map (filter (arr))
where 'map' and 'filter' are functions. It's just f(g(x)) - function
composition.

function getShortMessages (objArr) {
  return objArr.filter(function (objEl) {
    return objEl.message.length < 50
  }).map(function (el) {
    return el.message;
  })
};

*/
