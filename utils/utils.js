// DO NOT USE ARROW FUNCTION SHORTHAND WITH MOCHA
// in fact they seem to be against arrow functions:
// An arrow function expression has a shorter syntax than a function expression and does not
// bind its own this, arguments, super, or new.target. These function expressions are best
// suited for non-method functions, and they cannot be used as constructors.

// NODEMON TESTING
// "test-watch": "nodemon --exec \"npm test\""

// MOCHA TESTING UTILITIES
// ASSERTION LIBRARIES
module.exports.add = (a, b) => {
  return a + b;
};

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a+b);
// MOCHA BAILS AFTER ~ 2 SECONDS
  }, 1500);
};

module.exports.square = (x) => {
  return x*x;
};

module.exports.asyncSquare = (x, callback) => {
  setTimeout(() => {
    callback(x*x);
  }, 1500);
};

module.exports.setName = (user, fullName) => {
  let names = fullName.split(` `);
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};
