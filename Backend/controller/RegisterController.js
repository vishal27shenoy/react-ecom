const express = require("express");
const app = express.Router();
const RegisterSchema = require("../models/register.js");
const bcrypt = require("bcrypt");
app.post("/Register", async (req, res) => {
  console.log("Registyer came heree");
  const { username, email, password } = req.body;
  const user = await RegisterSchema.findOne({ email: email });
  console.log(user, "thiś is user", req.body);
  if (user) {
    res.send({ message: "UnSucessfull" });
  } else {
    const SchemaValue = new RegisterSchema({
      username: username,
      email: email,
      password: await bcrypt.hash(password, 8),
    });
    const save = SchemaValue.save();
    if (save) {
      res.send("Sucessfull");
    } else {
      res.send("UnSucessfull");
    }
  }
});

module.exports = app;
