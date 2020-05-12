// This is the controller for public/js/lineStanderChange.js.
const Order = require('../../models/Order');

// Creates a function that finds an Order and update it by the id.
// We then set the status to ongoing and uses the global variable LSCheck to get the linestander that is saved in session
// and asign it to be the one that has picked the order up.
// In the end we response with .end().
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
        // We want the document to be returned in it's new, updated form. Therefore we set it to true.
        {
            new: true
        }
    )
    //then it responses with end and the .then in lineStanderChange.js can run.
        .then(result => {
            res.end();
        })
        .catch(error => console.error(error))
}
