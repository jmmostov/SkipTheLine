const express = require('express')
const mongoose = require('mongoose')
const app = express()
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path')

mongoose.connect('mongodb://localhost/skiptheline', {useNewUrlParser: true, useUnifiedTopology: true});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(express.static('public'))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new mongoStore({mongooseConnection: mongoose.connection}),
    cookie: {maxAge: 180 * 60 * 1000}
}))

let indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(3000,()=>{
    console.log("App listening on port 3000")
});