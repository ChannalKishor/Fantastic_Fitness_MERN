var mongoose = require("mongoose");

module.exports = mongoose.model("User",{
    email:{type:String,required: true,
        unique: true},
    username:{type:String, default: ""},
    password:{type:String, default:""}
});