const User = require('../models/User')

module.exports = (req,res)=> {
    // Here we made sure that only admins can enter the side since we made the adminCheck in our loginUser.js
    if (req.session.adminCheck == "admin") {

        const users = User.find({})

        res.render('registerLinestander', {
            users
        })
    }
    // you will get rendered our error page if your userType is not "admin".
    else res.render('error');
};