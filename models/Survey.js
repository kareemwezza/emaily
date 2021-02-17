const mongoose = require("mongoose");
const { Schema } = mongoose;
// to be used as a subdocument for the surveys
const RecepientSchema = require("./Recipient");

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecepientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model("surveys", surveySchema);
