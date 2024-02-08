const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://admin:Munna57@hotel.1whzbul.mongodb.net/hotel"

mongoose.connect(mongoURL,{useUnifiedTopology : true, useNewUrlParser : true})

var connection = mongoose.connection

connection.on("error", () => {
    console.log("mongo DB Connected Failed")
})

connection.on("connected", () => {
    console.log("Mongo DB Connected Successfully")
})

module.exports = mongoose