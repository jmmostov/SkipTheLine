
let User = require('../../models/User');

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
        {
            new: true
        }
    )
        .then(result => {

            res.end();
        })
        .catch(error => console.error(error))
}



