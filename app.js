const express = require('express');
const listen = require('./routes/listen.js');
const usr = require('./routes/user.js');
const path = require('path');
const engine = require('ejs-mate');
const mongoose = require('mongoose');
const Listen = require('./modules/listen.js');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./modules/user.js');
const app = express();



main().then(()=>{
    console.log('Successfully database running');
    
}).catch((err)=>{
    console.log(`${err} error has occured.`);
    
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/listen");
}

const sessionELement = {
    secret : "mysecretcode",
    resave : false,
    saveUninitialized : true,
    cookie : {
        expires : Date.now() + 7 * 24 * 60 *60 *1000,
        maxAge : 3 * 24 * 60 *60 *1000,
        httpOnly : true
    }
}

app.set('view engine', 'ejs');
app.engine('ejs', engine);
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, '/public')));


app.use(session(sessionELement));
app.use(flash());
app.use((req, res, next) => {
    res.locals.success = req.flash('seccess');
    res.locals.error = req.flash('error');
    next();
});


app.use('/listen', listen);
app.use('/user', usr);
 
passport.use(passport.initialize());
passport.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.listen(3000, ()=>{
    console.log('server is running on 3000 port');
    
});