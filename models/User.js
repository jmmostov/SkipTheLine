  const mongoose = require('mongoose')
const Schema = mongoose.Schema

//A schema represents what a collection looks like - specifying each attribute in the schema.
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// Access database via. mongoose model - create a model for user - letting other files access.
const User = mongoose.model("User",UserSchema)
module.exports = User
