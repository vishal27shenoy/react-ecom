const express = require("express");
const app = express.Router();
const RegisterSchema = require("../models/register.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
app.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (email != null && password != null) {
    const user = await RegisterSchema.findOne({ email: email });
    console.log(user, "ps");
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch);
      if (isMatch) {
        const accessToken = jwt.sign(
          {
            UserInfo: {
              username: user.username,
            },
          },
          "onfifvninrfvwiunifuwnrinfiunriuejefrncrerfnj324fnjinifrcn",
          { expiresIn: "1d" }
        );
        const refreshToken = jwt.sign(
          {
            UserInfo: {
              username: user.username,
            },
          },
          "onfifvninrfvwiunifuwnrinfiunriuejefrncrerfnj324fnjinifrcnww",
          { expiresIn: "1d" }
        );
        console.log(accessToken);

        user.token = refreshToken;
        const result = await user.save();
        res.cookie("jwt", refreshToken, {
          httpOnly: true,
          sameSite: "strict",
          secure: true,
          maxAge: 24 * 60 * 60 * 1000,
        });
        res.status(200).json({ accessToken });
      } else {
        res.status(400);
      }
    } else {
      res.status(400);
    }
  }
});
module.exports = app;
