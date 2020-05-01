//finds the userType (from our database) with the name linestander and show them
var User = require('../../models/User');
var info = User.find({userType: 'customer'});

module.exports = async (req,res)=>{
    await info.exec(function(err,user) {
        if(err) {
            console.log(err)
        } //Renders to accountSettings if it's an user
        if(User){
            res.render('accountSettings', {
                customer: user,
            });
        }
    });
};