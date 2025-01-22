const mongoose = require('mongoose')



const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true

    },
    username:{
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
},{timestamps: true})


module.exports = mongoose.model('Users', UserSchema)