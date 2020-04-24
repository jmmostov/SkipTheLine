/*
Lige foreløbig har jeg bare copy/paste koden fra storeUser.js, det skal dog lige ændres så vi ikke bare direkte genbruger, men finder
en anden metode at gøre dette på
 */

const User = require('../../models/User.js');
const Address = require('../../models/Address')
const path = require('path');


module.exports = (req,res)=>{
    Address.create({
        street_name: req.body.streetName,
        street_nr: req.body.streetNumber,
        zipcode: req.body.zipCode,
        city_name: req.body.cityName,
        country: req.body.countryName,
    },(error,Address)=>{
        if(error) {
            console.log(error)
            return res.redirect('/register')
        }
        else {
            User.create({
                    username: req.body.username_customer,
                    password: req.body.password,
                    home_address_id: Address._id,
                    billing_address_id: Address._id,
                    full_name: {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name
                    },
                    email: req.body.email,
                    phone_number: req.body.phone_number,
                    userType: "linestander",
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
                        res.redirect('/registerLinestander');
                        console.log(User)
                    }
                })
        }
    })

};