//update username via objectId that has been created by mongoDB

var User = require('../models/User');

/*
module.exports = function (req,res) {
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function (user) {
        User.findOne({_id:req.params.id}).then(function (user) {
            res.send(user')
        })
    });
}*/


module.exports = async function(req,res) {
    await User.findOneAndUpdate({"_id": req.body.id},{$set:{username:req.body.username}},{new: true}, function(err,user){
        if(err){
            console.log('errormessage ' + err);
        }
       // res.send(user)
        return res.redirect('/registerLinestander')
    });
};

