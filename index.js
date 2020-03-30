const express = require('express')
const mongoose = require('mongoose')
const app = express()
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path')


//let usersRouter = require('./routes/users');

mongoose.connect('mongodb+srv://admin:AdminPassword@skiptheline-asftb.mongodb.net/skiptheline', {useNewUrlParser: true, useUnifiedTopology: true});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    store: new mongoStore({mongooseConnection: mongoose.connection}),
    cookie: {maxAge: 180 * 60 * 1000}
}))

//Opretter en global variabel som kan tilgås fra alle ejs filer, fordi navbar er i dem alle.
global.loggedIn = null;
app.use("*",(req, res, next)=>{
    loggedIn = req.session.userId;
    next()
});

global.admin = null;
app.use("*",(req,res,next)=>{
    admin = req.session.adminCheck
    next();
});


/*
// Lortet virker ikke... Det skulle ellers forestille at være måden at åbne porten via heroku...
let port = process.env.PORT;
if(port == null || port == ""){
    port = 3000;
}
app.listen(port,()=>{
    console.log('App listening...')
});


 */


app.listen(3000,()=>{
    console.log("App listening on port 3000")
});



let indexRouter = require('./routes/index');

app.use('/', indexRouter);
