const uploadImage = require('../helper/upload-image')
const Post = require('../models/blogpost')
const Comments = require('../models/comment')


const createPost = async(req,res)=>{
    try {
        const { title, content } = req.body

        if(!req.file){
            const post = new Post({
                title,
                content,
                author: req.userInfo.id
            })
           console.log(req.userInfo.id)
    
           await post.save()
           if(post) return res.status(201).json({
            success: true,
            message: "Post created successfully",
            data: post
           })
           else return res.status(400).json({
            success: false,
            message: 'Unable to create Post'
           })

        }
        else{
            const {url, publicId} = await uploadImage(req.file.path)
            console.log(url, publicId)

            const post = new Post({
                title,
                content,
                image: url,
                publicId,
                author: req.userInfo.id
            })
           console.log(req.userInfo.id)
    
           await post.save()
           if(post) return res.status(201).json({
            success: true,
            message: "Post created successfully",
            data: post
           })
           else return res.status(400).json({
            success: false,
            message: 'Unable to create Post'
           })
        }

       
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Access Denied"
        })
        
    }
}


const getPost = async(req,res)=>{
    try {
        const getAllPost = await Post.find({})
        if(!getAllPost){
            return res.status(404).json({
                success: false,
                message: "No post was found",
            })
        }

        res.status(200).json({
            success: true,
            message: "request succesful",
            data: getAllPost
        })
        
    } catch (error) {
        console.log(error)
    }
}

const commentOnPost = async(req,res)=>{
    const {comment} = req.body
    const id = req.params
    const userId = req.userInfo.id


    const sentComment = new Comments({
        comment,
        postId: id,
        userId

    })

    await sentComment.save()

    if(!sentComment){
        return res.status(400).json({
            success: false,
            message: "Unable to send comment"
        })
    }

    return res.status(201).json({
        success: true,
        message: "comment created",
        data: sentComment
    })
}



module.exports = {createPost, getPost,commentOnPost}