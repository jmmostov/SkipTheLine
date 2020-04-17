//delete user via objectId
var User = require('../models/User');

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
