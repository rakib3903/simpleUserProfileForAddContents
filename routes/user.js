const express = require('express');
const User = require('../modules/user.js');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('user/form.ejs');
});

router.post('/signup', async (req, res) => {
    let {pro_pic, name, email, username, password} = req.body;
    let newUser = new User({
        pro_pic,
        name,
        email,
        username
    });
    await User.register(newUser, password);
    req.flash('success' , "signed up successfully");
    res.redirect('/listen');
});

module.exports = router; 