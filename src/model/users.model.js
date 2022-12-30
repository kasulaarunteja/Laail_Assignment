const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id : {type : Number, required: true, unique : true},
    Name: { type: String, required: true },
    price: { type: Number, required: true },
    MobileNumber: { type: String, required: true },
},{
    versionKey: false,
  }
)

module.exports = mongoose.model("user", userSchema);