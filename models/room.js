const mongoose = require("mongoose");
const roomschema = mongoose.Schema({
   name: {
    type : String,
    require : true,
   },
   maxcount : {
    type : Number,
    require : true
   },
   phonenumber : {
    type : Number,
    require : true,
   },
   rentperday : {
    type : Number,
    require : true,
   },
   roomtype : {
    type : String,
    require : true,
   },
   imageurls : [],
   currentbookings : [],
   description : {
    type:String,
    require:true,
   }
},
{
    timestamps : true,
});

const roomModel = mongoose.model("rooms", roomschema)

module.exports = roomModel