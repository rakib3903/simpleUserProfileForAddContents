const mongoose = require('mongoose');

const schema = mongoose.Schema({
    pic : {
        type : String,
        required : true
    },
    pic_name : {
        type : String,
        required : true
    },
    pic_price : {
        type : Number,
        required : true
    },
    pic_des : {
        type : String,
        required : true
    }
});

const Listen = mongoose.model('Listen', schema);
module.exports = Listen;