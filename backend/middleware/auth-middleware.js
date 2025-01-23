const jwt = require('jsonwebtoken')


const authMiddleware = async(req,res,next)=>{
    const authHeaders = req.headers['authorization']
    console.log(authHeaders)


    const token = authHeaders && authHeaders.split(' ')[1]

    if(!token) return res.status(401).json({
        success: false,
        message: 'Please login'
    })


    try {
        const decodeTokenInfo = jwt.verify(token, process.env.JWT_SECRET)
        req.userInfo = decodeTokenInfo
        next()

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Access Denied"
        })
        
    }

}


module.exports = authMiddleware