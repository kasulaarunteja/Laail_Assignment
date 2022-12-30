const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb://localhost:8080");

}