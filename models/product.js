const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema
const moment = require('moment-timezone');
var dateThailand = moment.tz(Date.now(), "Asia/Bangkok");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },
    order: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000
    },
    place: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },
    category: {
      type: ObjectId,
      ref: 'Category',
      required: true
    },
    photo: {
      data: Buffer,
      contentType: String
    },
    createdAt: {
      type: Date,
      default: dateThailand
    }
  }
)


module.exports = mongoose.model("Product", productSchema)
