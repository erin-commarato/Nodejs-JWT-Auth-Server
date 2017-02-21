// Import JWT and config
const jwt = require('jwt-simple');
const config = require('../config');

//import user model, note this is a Class that represents all users!
const User = require('../models/user');


//Take user ID and encrypt it with secret
function tokenForUser(user) {
  //sub: standard jwt convention (sub=subject), who this token belongs to
  //iat: another standard that means "issued at time"
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  // User has already had thir email and pw auth'd
  // we just need to give them a token
  // need access to current user model, supplid by done() in passport.js
  // as req.user
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  //TODO add email validation
  if(!email || !password ) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }

  // See if a user with given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err); }

    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({error: 'Email is in use' });
    }

    // If a user with email does NOT exist, create and save user record
    //Create in memory
    const user = new User({
      email: email,
      password: password
    });

    //save to db
    user.save(function(err) {
      if (err) { return next(err); }
    });

    // Respond to request indicating user was created
    res.json({ token: tokenForUser(user) });
  });
}
