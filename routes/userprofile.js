
const express = require('express');
const router = express.Router();
const Profile = require("../modules/userprofile.js");



router.get('/', async (req, res) => {
    let user = req.user;
    let {username} = req.user;
    const profile = await Profile.findOne({username : username});
    if(profile === null){
        const contents = null;
        res.render('userprofile/home.ejs', {contents, user})
    }else{
        const contents = profile.contents;
        res.render('userprofile/home.ejs', {contents, user})
    }
});





router.get('/add-content', (req, res) => {
    res.render('userprofile/form.ejs');
});

router.post('/submit', async(req, res) => {
    let {pic, pic_name, pic_price, pic_des} = req.body;
    let {username} = req.user;
    const pro = await Profile.findOne({username : username})
    .then((profile) => {
        if(profile){
            profile.contents.push({
                pic, 
                pic_name, 
                pic_price, 
                pic_des 
            });
            profile.save();
        }else{
            const newProfile = new Profile({
                username,
                contents: [{
                pic, 
                pic_name, 
                pic_price, 
                pic_des 
                }]
            });
           newProfile.save(); 
        }
    });
    res.redirect('/userprofile');
});

module.exports = router;