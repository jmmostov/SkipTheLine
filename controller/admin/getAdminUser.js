//finds the userType (from our database) with the name linestander and show them
var User = require('../../models/User');
var info = User.find({userType: 'customer'});

module.exports = async (req,res)=>{
    await info.exec(function(err,user) {
        if(err) {
            console.log(err)
        }//If it is an admin that is logged in
        if(admin){
            res.render('adminUser',{
                customer: user,
            });
        }//Else if it isn't admin that is logged in then if will be redirected to the error page.
        else return res.redirect('/error');
    });
};