const mongoose = require("mongoose");
const test = new mongoose.Schema({
  id: Number,
  name: String,
});
module.exports = mongoose.model("test", test);
