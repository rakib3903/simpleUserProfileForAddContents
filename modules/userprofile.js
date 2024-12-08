const mongoose = require('mongoose');

const schema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    contents : [{
        pic : {
            type : [String],
            required : true,
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
}]
});

const Profile = mongoose.model('Profile', schema);
module.exports = Profile;