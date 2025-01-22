const express = require('express')
const authMiddleware = require('../middleware/image-upload-middleware')
const uploadImageMiddleware = require('../middleware/image-upload-middleware')
const {createPost, getPost, commentOnPost} = require('../controllers/blog-controller')
const router = express.Router()



router.post('/post',authMiddleware,uploadImageMiddleware.single('image'),createPost)
router.get('/get',getPost)
router.post('/post/comment/:id',authMiddleware,commentOnPost)



module.exports = router