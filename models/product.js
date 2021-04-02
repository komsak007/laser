const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const moment = require("moment-timezone");
var dateThailand = moment.tz(Date.now(), "Asia/Bangkok");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxlength: 32,
  },
  point: {},
  curve: {},
  lines: [
    {
      tool: { type: String },
      points: {},
    },
  ],
  order: {
    type: String,
    trim: true,
    maxlength: 32,
  },
  description: {
    type: String,
    maxlength: 2000,
  },
  place: {
    type: String,
    trim: true,
    maxlength: 32,
  },
  category: {
    type: ObjectId,
    ref: "Category",
  },
  images: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: dateThailand,
  },
});

module.exports = mongoose.model("Product", productSchema);
