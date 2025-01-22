const mongoose = require('mongoose')


const commentSchema = mongoose.Schema({
    comment:{
        type: String
    },
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})


module.exports = mongoose.model('Comments', commentSchema)