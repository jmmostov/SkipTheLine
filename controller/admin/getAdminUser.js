//finds the userType (from our database) with the name customer and show them
//does the exact same thing as getRegisterLinestander.js
var User = require('../../models/User');

module.exports = async (req,res)=>{
    await User.find({userType: 'customer'}, function (err,user) {
        if(err) {
            console.log(err)
        }
        if (admin) {
            res.render('adminUser', {
                customer: user
            })
        }
        // if it isn't admin that is logged in then if will be redirected to the error page
        else return res.redirect('/error')
    })
};