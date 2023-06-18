const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  token: {
    type: String,
  },
});

// Schema.pre("save", async function (next) {
//   this.password = await bcrypt.hash(this.password, 8);
//   console.log(this.password);
//   next();
// });

const RegisterSchema = new mongoose.model("RegisterSchema", Schema);
module.exports = RegisterSchema;
