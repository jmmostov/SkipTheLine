const User = require('../models/User')

module.exports = async (req,res)=>{
   const users =  await User.find({
       userType: 'linestander'
   });
        res.render('registerLinestander', {
            users
        })
};