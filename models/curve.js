const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  curve: {},
});

module.exports = mongoose.model("curveLaser", pointSchema);
