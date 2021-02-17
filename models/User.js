const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String,
  userName: String,
  facebookId: String,
  credits: { type: Number, default: 0 },
});

// create instance model to make a collection of data with schema (name of coll, schema)
mongoose.model("users", UserSchema);
