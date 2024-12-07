const express = require('express');
const Listen = require('../modules/listen.js');
const router = express.Router();

router.get('/', async (req, res) => {
    const listens = await Listen.find();
    res.render('listen/home.ejs', {listens});
});

router.get('/create', (req, res) => {
    res.render('listen/form.ejs');
});


router.post('/submit', async (req, res) => {
    let {pic, pic_name, pic_price, pic_des} = req.body;
    let lstn = new Listen({
        pic,
        pic_name,
        pic_price,
        pic_des
    });
    await lstn.save();
    
    res.redirect('/listen');
    
});

router.get('/:_id/description', async (req, res) => {
    let{_id} = req.params;
    let listen = await Listen.findById(_id);
    res.render('listen/description.ejs', {listen});
});

module.exports = router;

