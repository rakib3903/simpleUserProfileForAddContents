const mongoose = require('mongoose');

const schema = mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },
    user_name : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },

});

const User = mongoose.model('User', schema);
module.exports = User;