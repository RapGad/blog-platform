const mongoose = require('mongoose')


const likeSchema = new mongoose.Schema({
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    isLike:{
        type: Boolean,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})



module.exports = mongoose.model('Likes',likeSchema)