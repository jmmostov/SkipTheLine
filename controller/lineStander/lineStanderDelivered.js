//update username via objectId that has been created by mongoDB
const Order = require('../../models/Order');

module.exports = function(req,res) {

    Order.findOneAndUpdate(
        // Vi kan ikke komme ind og få fat på værdierne i vores ejs ved at bruge "req.body..."
        // https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
        {
            _id: req.body._id
        },
        {
            $set: {
                status: ["completed"]
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



