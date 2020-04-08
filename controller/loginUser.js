const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req,res)=>{
    const { username,password } = req.body;

    User.findOne({username:username},(error,user)=>{
        if(username == "admin" && password == "admin123") {
            console.log(user);
            if (user.userType == "admin") {
                req.session.adminCheck = user.userType;
            }
            req.session.userId = user._id
            res.redirect('/registerLinestander')
        }
        else if(user){
            bcrypt.compare(password,user.password,(error,same)=>{
                if(same && user.userType == "customer") {
                    //henter id for brugeren og gemmer det i browserens session. 
                    req.session.userId = user._id
                    res.redirect('/')
                }
                else if(same && user.userType == "linestander") {
                    req.session.LSid = user._id
                    res.redirect('/LineStander')
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