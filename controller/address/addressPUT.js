const Address = require('../../models/Address');


module.exports = function(req,res) {
    // We use the method ".findOneAndUpdate()" to update an address in the database.
    Address.findOneAndUpdate(
        // We filter by the _id (maybe we should use the findByIdAndUpdate?) and just pass through the addressId via body.
        // We could also have used it as the parameter...
        {
            _id: req.body.addressId
        },
        {
            // We update all the attributes in the Address schema. These are passed through as the body.
            $set: {
                streetName: req.body.streetName,
                streetNr: req.body.streetNr,
                zipCode: req.body.zipCode,
                city: req.body.city,
                country: req.body.country
            }
        },
        // We want the document to be returned in it's new, updated form. Therefore we set it to true.
        {
            new: true
        }
    )
        .then(result => {
            res.end();
        })
        .catch(error => console.error(error))
}
