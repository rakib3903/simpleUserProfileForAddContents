const express = require('express');
const User = require('../modules/user.js');
const passport = require('passport');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('user/form.ejs');
});

router.get('/login', (req, res) => {
    res.render('user/loginForm.ejs');
});

router.post('/signup', async (req, res) => {
    try{
        let {pro_pic, name, email, username, password} = req.body;
        let newUser = new User({
        pro_pic,
        name,
        email,
        username
        });
        const registered = await User.register(newUser, password);
        req.login(registered, (err)=>{
            if(err){
                return next(err);
            }
            req.flash('success' , "logged in successfully");
            res.redirect('/listen');
        });
    }catch{
        req.flash('success' , "duplicate username"); 
        res.redirect('/user/signup')
    }
    
});

router.post('/login', 
    passport.authenticate("local", {failureRedirect : "/user/login",
     failureFlash : true,}), async (req, res) => {
        req.flash('success', 'Logged in successfully');
        res.redirect('/listen');
});


router.get('/logout', (req, res) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }

        res.redirect('/listen');
    });
});



module.exports = router; 