//update username via objectId that has been created by mongoDB
const Order = require('../../models/Order');

module.exports = function(req,res) {
    Order.findOneAndUpdate(
        {
            _id: req.body._id
        },
        {
            $set: {
                status: ["ongoing"],
                pickedUpBy: LSCheck
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
