const express = require('express');
const listen = require('./routes/listen.js');
const usr = require('./routes/user.js');
const path = require('path');
const engine = require('ejs-mate');
const mongoose = require('mongoose');
const User = require('./modules/user.js');
const Listen = require('./modules/listen.js');
const app = express();



main().then(()=>{
    console.log('Successfully database running');
    
}).catch((err)=>{
    console.log(`${err} error has occured.`);
    
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/listen");
}



app.set('view engine', 'ejs');
app.engine('ejs', engine);
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, '/public')));









app.use('/listen', listen);
app.use('/user', usr);
 


app.listen(3000, ()=>{
    console.log('server is running on 3000 port');
    
});