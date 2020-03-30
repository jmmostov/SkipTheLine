const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req,res)=>{
    const { username,password } = req.body;

    User.findOne({username:username},(error,user)=>{
        if(username == "admin" && password == "admin123") {
            console.log(user)
            res.redirect('/registerLinestander')
        }
        else if(user){
            bcrypt.compare(password,user.password,(error,same)=>{
                if(same && user.userType == "customer") {
                    res.redirect('/')
                }
                else if(same && user.userType == "linestander") {
                    res.redirect('/')
                }
                else {
                    res.redirect('/login')
                }
            })
        }
        else {
            res.redirect('/login')
        }
    })
}