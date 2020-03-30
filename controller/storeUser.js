const User = require('../models/User.js')
const path = require('path')

module.exports = (req,res)=>{
    console.log(req)
    var newUser = new User({username: req.body.username, password: req.body.password, isAdmin: req.body.isAdmin});
    User.create(req.body, (error,user)=>{
        console.log(newUser.isAdmin)
        if(req.body.adminCode === "secretCode") {
            newUser.isAdmin = true;
            console.log(newUser.isAdmin)
            res.redirect('/')
        }else {
            newUser.isAdmin = false;
            res.redirect('/')
            console.log(newUser.isAdmin)
        }
    })
}