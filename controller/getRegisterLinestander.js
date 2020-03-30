var User = require('../models/User');
var info = User.find({userType: 'linestander'});

module.exports = async (req,res)=>{
    await info.exec(function(err,user) {
        if(err) throw err;
        res.render('registerLinestander', {users: user});
    });
};

