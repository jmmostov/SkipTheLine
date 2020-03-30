const User = require('../models/User')

module.exports = (req,res)=>{
    const users = User.find({})

    res.render('registerLinestander',{
        users
    })
};