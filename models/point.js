const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  measurement: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
    unique: true,
  },
  point: {
    type: Array,
  },
});

module.exports = mongoose.model("pointLaser", pointSchema);
