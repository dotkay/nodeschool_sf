// array_some.js

function checkUsersValid(goodUsers) {
  return function allUsersValid(inputUsers) {
    return inputUsers.every(elem => goodUsers.some(el => elem.id === el.id));
  }
};

module.exports = checkUsersValid;
