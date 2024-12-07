const express = require('express');
const User = require('../modules/user.js');
const router = express.Router();



router.post('/submit', async (req, res) => {
    let {name, email, user_name, password} = req.body;
    let user = new User({
        name : name,
        email : email,
        user_name : user_name,
        password : password
    });
    await user.save();
    
    res.redirect('/listen');
    
});

module.exports = router; 