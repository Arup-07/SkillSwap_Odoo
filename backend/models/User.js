const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  skillsOffered: [String],
  skillsWanted: [String],
  availability: String,
  photo: String
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
