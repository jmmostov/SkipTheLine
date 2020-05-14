const express = require('express')
const mongoose = require('mongoose')
const app = express()
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path')


// Our connection to the database. Copy the url below into MongoDB Compass to access the database.
mongoose.connect('mongodb+srv://Ramaran:LineStander123@skiptheline-asftb.mongodb.net/skiptheline', {useNewUrlParser: true, useUnifiedTopology: true});


// To be able to use the 'updateOne'-method apparently you have to set the below 'false' as default...
mongoose.set('useFindAndModify',false);


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

// Now, we are creating a global variable which can be called everywhere on the server.
// What this variable does is checking if the the user is logged in as a customer. This is possible since we
// make the "_id" of the customer "userId" in the session when you log in as a customer. So we use this "loggedIn" as
// a parameter to check for whenever we want to see if it's a customer that's logged in.
global.loggedIn = null;
app.use("*",(req, res, next)=>{
    loggedIn = req.session.userId;
    next()
});

// Same as the global variable above, just for the admin
global.admin = null;
app.use("*",(req,res,next)=>{
    admin = req.session.adminCheck;
    next();
});

// Same as the global variable above, just for the LineStander
global.LSCheck = null;
app.use("*",(req,res,next)=>{
    LSCheck = req.session.LSid;
    next();
});



app.listen(3000,()=>{
    console.log("App listening on port 3000")
});

// We define the ./routes/index-file as the "controller" for the routes. This is done to structure our code
// instead of having everything in this file
let indexRouter = require('./routes/index');
app.use('/', indexRouter);