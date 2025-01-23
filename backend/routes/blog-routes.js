const express = require('express')
const authMiddleware = require('../middleware/auth-middleware')
const uploadImageMiddleware = require('../middleware/image-upload-middleware')
const {createPost, getPost, commentOnPost, likePost} = require('../controllers/blog-controller')
const router = express.Router()



router.post('/post',authMiddleware,uploadImageMiddleware.single('image'),createPost)
router.get('/get',getPost)
router.post('/post/comment/:id',authMiddleware,commentOnPost)
router.post('/post/like/:id',authMiddleware,likePost)



module.exports = router