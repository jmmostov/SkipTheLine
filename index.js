const express = require('express')
const mongoose = require('mongoose')
const app = express()
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path')


//let usersRouter = require('./routes/users');

mongoose.connect('mongodb://localhost/skiptheline', {useNewUrlParser: true, useUnifiedTopology: true});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Opretter en global variabel som kan tilgås fra alle ejs filer, fordi navbar er i dem alle.
global.loggedIn = null;
app.use("*",(req, res, next)=>{
    loggedIn = req.session.userId;
    next()
});

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

let indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(3000,()=>{
    console.log("App listening on port 3000")
});

