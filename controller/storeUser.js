const User = require('../models/User.js');
const path = require('path');


module.exports = (req,res)=>{
    User.create({
        username:req.body.username,
        password: req.body.password,
        userType: "customer",
    }, (error,User)=>{
        if(error) {
            console.log(error)
            return res.redirect('/register')
        }
        else {
            res.redirect('/login');
            console.log(User)
        }

    })
};