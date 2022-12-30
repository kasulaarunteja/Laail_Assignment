const mongoose = require("mongoose");

module.exports = () => {
     mongoose.connect("mongodb+srv://arunteja:laali123@cluster0.h2yyxzm.mongodb.net/?retryWrites=true&w=majority");

}