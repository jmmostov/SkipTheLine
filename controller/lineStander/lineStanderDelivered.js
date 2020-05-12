// This is the controller for public/js/lineStanderDelivered.js.
const Order = require('../../models/Order');
//Creates a function that finds an Order and update it by the id.
// We then set the status to completed and response with .end().
module.exports = function(req,res) {

    Order.findOneAndUpdate(
        {
            _id: req.body._id
        },
        {
            $set: {
                status: ["completed"]
            }
        },
        // We want the document to be returned in it's new, updated form. Therefore we set it to true.
        {
            new: true
        }
    )

        .then(result => {
            // We return to the public/js/lineStanderDelivered.js file.
            res.end();
        })
        .catch(error => console.error(error))
}