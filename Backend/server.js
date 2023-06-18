const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const registercontroller = require("./controller/RegisterController.js");
const logincontroller = require("./controller/LoginController.js");
const ordercontroller = require("./controller/ordercontroller.js");
app.use(express.urlencoded());
app.use(cors());
app.use(express.json());
app.use(cookieParser());
mongoose
  .connect("mongodb://0.0.0.0:27017/E-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Sucessfull of DB"))
  .catch((err) => console.log(err));

app.use(registercontroller);
app.use(logincontroller);
app.use(ordercontroller);

const server = app.listen(5000, () => {
  console.log("Connection Sucessfull");
});
