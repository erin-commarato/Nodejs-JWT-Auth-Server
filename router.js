const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

//use passport strategy we defined in passport.js
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  //define a route the user can visit
  //req = object representing incoming http request
  //res = object representing response we will form up and send back
  //next = error handling
  app.get('/', requireAuth, function(req, res) {
    res.send({ message: 'Adjust this protected message in router.js' });
  });

  //Authentication... defined in authentication controller
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
}
