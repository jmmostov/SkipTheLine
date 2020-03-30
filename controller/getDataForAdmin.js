const User = require('../models/User')

module.exports = (req,res)=>{
   var users =  User.find({
        userType: 'linestander'
    },(error,users)=>{
        console.log(error,users)
    });
        res.render('registerLinestander', {users})
}