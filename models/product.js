const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const moment = require("moment-timezone");
var dateThailand = moment.tz(Date.now(), "Asia/Bangkok");

const productSchema = new mongoose.Schema({
  point: { default: "" },
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
  customer: {
    type: String,
    maxlength: 2000,
  },
  dayjob: {
    type: String,
    maxlength: 32,
  },
  contact: {
    type: String,
    maxlength: 32,
  },
  Appointment: {
    type: String,
    maxlength: 32,
  },
  team: {
    type: String,
    maxlength: 32,
  },
  place: {
    type: String,
    maxlength: 32,
  },
  glock: {
    type: String,
    maxlength: 32,
  },
  stove: {
    type: String,
    maxlength: 32,
  },
  sink: {
    type: String,
    maxlength: 32,
  },
  water: {
    type: String,
    maxlength: 32,
  },
  lotus: {
    type: String,
    maxlength: 32,
  },
  lotusHeight: {
    type: String,
    maxlength: 32,
  },
  lotusStyle: {
    type: String,
    maxlength: 32,
  },
  noseTop: {
    type: String,
    maxlength: 32,
  },
  noseTopHeight: {
    type: String,
    maxlength: 32,
  },
  noseTopStyle: {
    type: String,
    maxlength: 32,
  },
  counter: {
    type: String,
    maxlength: 32,
  },
  counterHeight: {
    type: String,
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
