//delete user via objectId
var User = require('../../models/User');

//Uses findByIdAndDelete to find the user (.User) with the proper id - and allows the admin to delete the user.
module.exports = async function (req,res) {
    await User.findByIdAndDelete({"_id": req.params.id}, (err,user)=> {
        if(err) {
            console.log(err);
        }
        // We use 'res.end()' to return to the public/js/deleteUser.js file.
        res.end();
    });
};
