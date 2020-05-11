const mongoose = require('mongoose')
const Schema = mongoose.Schema
var uniqueValidator = require('mongoose-unique-validator')

const bcrypt = require('bcrypt')

//A schema represents what a collection looks like - specifying each attribute in the schema.
// We create a schema, that specifies what an User should consist of.
//Inside we also make validations, this way there want be any customers with the same username in the database.
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
        unique: [true, 'The username has already been taken, please choose a different'],
        required: [true, 'Please provide a username'],
        uniqueCaseInsensitive: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password']
    },
    fullName: String,
    email: {
        type: String,
        unique: [true, 'The email address already exist, please choose a unique email address'],
        required: [true, 'Please provide an email address']
    },
    phoneNumber: String
});

UserSchema.pre('save',function(next) {
    const user = this

    bcrypt.hash(user.password,10,(error,hash)=>{
        user.password = hash
        next()
    })
})

UserSchema.plugin(uniqueValidator, {message: '{PATH} with the value {VALUE} has to be {TYPE}'})
// Access database via. mongoose model - create a model for user - letting other files access.
const User = mongoose.model('User',UserSchema)
module.exports = User;