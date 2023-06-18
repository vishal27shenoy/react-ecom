const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  imgsrc: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  order_date: {
    type: Date,
    default: Date.now,
  },
});

const order = new mongoose.model("order", Schema);
module.exports = order;
