//update username via objectId that has been created by mongoDB

var User = require('../models/User');

module.exports = async function(req,res) {
    await User.findOneAndUpdate({"_id": req.body.id},{$set:{username:req.body.username}},{new: true}, function(err,user){
        if(err){
            console.log('errormessage ' + err);
        }
        return res.redirect('/registerLinestander')
    });
};

