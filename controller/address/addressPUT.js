//update address via objectId that has been created by mongoDB
const Address = require('../../models/Address');

module.exports = function(req,res) {

    Address.findOneAndUpdate(

        {
            _id: req.body.addressId
        },
        {
            $set: {
                streetName: req.body.streetName,
                streetNr: req.body.streetNr,
                zipCode: req.body.zipCode,
                city: req.body.city,
                country: req.body.country
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




