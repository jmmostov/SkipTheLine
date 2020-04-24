//update username via objectId that has been created by mongoDB
const Address = require('../models/Address');

/*
module.exports = function (req,res) {
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function (user) {
        User.findOne({_id:req.params.id}).then(function (user) {
            res.send(user)
        })
    });
}
 */

module.exports = function(req,res) {

    Address.findOneAndUpdate(
        // Vi kan ikke komme ind og få fat på værdierne i vores ejs ved at bruge "req.body..."
        // https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
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
            //console.log(result + "Hej Stine, er d")
            res.end();
        })
        .catch(error => console.error(error + "Stine er sej"))
}

/*
     await User.findOneAndUpdate({_id: req.body.id},{$set:{username:req.body.username}},{new: true}, function(err,user){
        if(err){
            console.log('errormessage ' + err);
        }
        //res.send(user);
        return res.redirect(303, '/registerLinestander')
    });
};

 */





/*module.exports = (req,res) => {
    console.log('test 1 ')
    const formUpdate = req.body.formButton;
   // var updateForm = req.getElementById('updateForm');
    console.log('test 2 ')
    formUpdate.onsubmit = (event) => {
        event.preventDefault();

        fetch('registerLinestander', {
            method: 'PUT',
            body: new FormData(formUpdate)
        }).then(response => response.json())
            .then(json => console.log(json))
    }
};
*/



