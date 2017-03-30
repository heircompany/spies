let db = require(`./db.js`);
module.exports.handleSignup = (email, password) => {
  //check whether email is signed up already
  
  //save user to system
  db.saveUser({ email, password });

  //send welcome email
}
