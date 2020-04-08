const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

//A schema represents what a collection looks like - specifying each attribute in the schema.
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String
    },
    lineStander: {
        fullName: String,
        email: String,
        phoneNumber: Number
    }
});

UserSchema.pre('save',function(next) {
    const user = this

    bcrypt.hash(user.password,10,(error,hash)=>{
        user.password = hash
        next()
    })
})
// Access database via. mongoose model - create a model for user - letting other files access.
const User = mongoose.model('User',UserSchema)
module.exports = User;
