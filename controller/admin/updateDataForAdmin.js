//This is the controller for public/js/updateUser.js.
let User = require('../../models/User');

//Finds all Users by the id saved in the body from updateUser.js.
//then set the data in the database. Here the req.body.username (and the others) are specified in updateUser.js.
module.exports = function(req,res) {
    console.log(req.body)

    User.findOneAndUpdate(
        {
            _id: req.body.id
        },
        {
            $set: {
                username: req.body.username,
                fullName: req.body.fullName,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
            }
        },
        // We want the document to be returned in it's new, updated form. Therefore we set it to true.
        {
            new: true
        }
    )

        .then(result => {
            // Then it responses with end() and the .then in updateUser.js can run.
            res.end();
        })
        .catch(error => console.error(error))
}



