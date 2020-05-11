//finds the userType (from our database) with the name customer and show them
var User = require('../../models/User');
var info = User.find({userType: 'customer'});
//Create a callfunction that either catches an error, or if the User is an customer, then it should render the page accountSettings.
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