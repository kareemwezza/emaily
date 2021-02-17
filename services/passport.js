const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

//import model from mongoose instead of requiring it from user.js
const User = mongoose.model("users");

// to make new token and add it to the cookies
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// to get token and search for the user in db
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => done(null, user));
});
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GoogleClientID,
      clientSecret: keys.GoogleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        //done (if any error, the user we get)
        done(null, existingUser);
      } else {
        // save() return a promise with a callbck of the user we created
        const user = await new User({
          googleId: profile.id,
          userName: profile.displayName,
        }).save();
        done(null, user);
      }
    }
  )
);
