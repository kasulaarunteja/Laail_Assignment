const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema({
    id : {type : Number, required: true, unique : true},
    LenderId: { type: String, required: true },
    BorrowerId: { type: Number, required: true },
    Principle: { type: String, required: true },
    Interest: { type: String, required: true },
    LoanStartDate: { type: String, required: true },
    LoanDueDate: { type: String, required: true },
    IsRepaid: { type: String, required: true },

},{
    versionKey: false,
    timestamps:true
  })

  module.exports = mongoose.model("contract", contractSchema);
