const express = require("express");
const app = express();
const dbconfig = require('./db')

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server rinning on port using nodemon ‎️‍🔥"));