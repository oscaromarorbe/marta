var passport = require('passport')
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("user");
const config = require('./config');
const key = config.secretOrKey

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

opts.secretOrKey= key

<<<<<<< HEAD
module.exports = /*passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );*/
=======
module.exports = 
>>>>>>> 2d4c097a86603e272e024bb85b9d7d10ccf854b6

  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.id}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
<<<<<<< HEAD
            // or you could create a new account
=======
          
>>>>>>> 2d4c097a86603e272e024bb85b9d7d10ccf854b6
        }
    });
}));