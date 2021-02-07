const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => done(null, user));
});

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.FacebookClientID,
      clientSecret: keys.FacebookClientSecret,
      callbackURL: "/auth/facebook/callback",
      enableProof: true,
      proxy: true,
    },
    (accessToken, refreshToken, profile, cb) => {
      User.findOne({ facebookId: profile.id }).then((existingUser) => {
        if (existingUser) {
          cb(null, existingUser);
        } else {
          new User({ facebookId: profile.id })
            .save()
            .then((user) => cb(null, user));
        }
      });
    }
  )
);
