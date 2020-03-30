var User = require('../models/User');

module.exports = async (req,res)=>{
    var id = req.body.id;
    var info = User.updateOne({"_id":id},{$set: username});
    await info.exec(function(err,user) {
        if(err) throw err;
        res.render('registerLinestander', {users: user});
    });
};
