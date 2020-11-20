const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
  point:{}
})


module.exports = mongoose.model("pointLaser", pointSchema)
