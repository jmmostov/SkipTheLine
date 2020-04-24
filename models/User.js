const mongoose = require('mongoose')
const Schema = mongoose.Schema
var uniqueValidator = require('mongoose-unique-validator')

const bcrypt = require('bcrypt')


//A schema represents what a collection looks like - specifying each attribute in the schema.
const UserSchema = new Schema({
    userType: {
        type: String
    },
    homeAddressId: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Address'
    },
    billingAddressId: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Address'
    },
        username: {
            type: String,
            unique: true,
            required: [true, 'Please provide a username'],
            uniqueCaseInsensitive: true
        },
        password: {
            type: String,
            required: [true, 'Please provide a password']
        },
        fullName: {
            firstName: String,
            lastName: String
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        phoneNumber: Number

});

UserSchema.pre('save',function(next) {
    const user = this

    bcrypt.hash(user.password,10,(error,hash)=>{
        user.password = hash
        next()
    })
})

UserSchema.plugin(uniqueValidator, {message: 'Username {VALUE} already exist, please provide a {TYPE} username'})
// Access database via. mongoose model - create a model for user - letting other files access.
const User = mongoose.model('User',UserSchema)
module.exports = User;
