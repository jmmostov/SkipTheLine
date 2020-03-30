const User = require('../models/User.js');
const path = require('path');


module.exports = (req,res)=>{
    User.create({
        username: req.body.username,
        password: req.body.password,
        userType: "linestander",
    }, (error,user)=>{
        if(error) {
            console.log(error, 'bruger blev ikke registeret')
            return res.redirect('/registerLinestander')
        }
        else {
            res.redirect('/registerLinestander');
            console.log('Du har nu registeret en linestander ' + req.body.username +  req.body.password)
        }

    })
};