//delete user via objectId
var User = require('../models/User');

//Uses findByIdAndDelete to find the user (.User) with the proper id - and allows the admin to delete the user.
module.exports = async function (req,res) {
    await User.findByIdAndDelete({"_id": req.params.id}, (err,user)=> {
        if(err) {
            console.log(err);
        }
        res.end();
       // return res.redirect('/registerLinestander')
    });
};

/*
module.exports =  function(req,res) {
     User.remove({"_id": req.body.id}, (err,doc)=>{
        if(err){
            console.log('errormessage ' + err);
        }
        return res.render('registerLinestander')
    });
};*/
