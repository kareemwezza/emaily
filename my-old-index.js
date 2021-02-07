const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

/// start strategy options with object of options and call back fun
// callbck fun will be excuted after redirected from call back
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GoogleClientID,
      clientSecret: keys.GoogleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
      console.log(done);
    }
  )
);

/// any one reaches the path /auth/google will handle authentication using passport
// first params is the name of strategy and second is options object
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// will try to find if there is a code response from google
app.get("/auth/google/callback", passport.authenticate("google"));

// dynamically define the port from the machine we work on
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("You are using port:" + PORT));
