// we need to figure out what set of credentials to return

if (process.env.NODE_ENV === "production") {
  // am i in node environment of heroku ??
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
