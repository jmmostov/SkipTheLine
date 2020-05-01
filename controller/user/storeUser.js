const User = require('../../models/User.js');
const Address = require('../../models/Address')
const path = require('path');


module.exports = (req,res,userType)=>{
    Address.create({
        streetName: req.body.streetName,
        streetNr: req.body.streetNr,
        zipCode: req.body.zipCode,
        city: req.body.city,
        country: req.body.country,
    },(error,Address)=>{
        if(error) {
            console.log(error)
            return res.redirect('/register')
        }
        else {
            User.create({
                    username: req.body.username,
                    password: req.body.password,
                    homeAddressId: Address._id,
                    billingAddressId: Address._id,
                    fullName: req.body.fullName,
                    email: req.body.email,
                    phoneNumber: req.body.phoneNumber,
                    userType
                },
                (error,User)=>{
                    if(error) {
                        console.log('der kommer en fejlmeddelse ' + error)
                        const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                        req.session.validationErrors = validationErrors
                        //req.flash('validationErrors',validationErrors)
                        //console.log(error)
                        return res.redirect('/register')
                    }
                    else {
                        res.redirect('/login');
                        console.log(User)
                    }
            })
        }
    })

};