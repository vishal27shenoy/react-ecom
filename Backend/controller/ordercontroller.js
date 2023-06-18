const express = require("express");
const app = express.Router();
const OrderSchema = require("../models/order.js");

app.post("/order", async (req, res) => {
  console.log(req.body);
  const { email, imgsrc, title } = req.body;
  const SchemaValue = new OrderSchema({
    email: email,
    imgsrc: imgsrc,
    title: title,
  });
  const save = SchemaValue.save();
  if (save) {
    res.status(200);
  } else {
    res.status(400);
  }
});
app.get("/order", async (req, res) => {
  const data = await OrderSchema.find();
  console.log(data);
  res.send(data);
});
module.exports = app;
