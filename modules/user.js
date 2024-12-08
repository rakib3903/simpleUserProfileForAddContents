const mongoose = require('mongoose');
const localMongoose = require("passport-local-mongoose");
const schema = mongoose.Schema({
    pro_pic:{
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    }
});
schema.plugin(localMongoose);
const User = mongoose.model('User', schema);
module.exports = User;