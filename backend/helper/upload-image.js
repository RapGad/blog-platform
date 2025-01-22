
const cloudinary = require('../config/cloudinary')

const uploadImage = async(filepath)=>{
    try {
        const result = await cloudinary.uploader.upload(filepath)

        return{
            url: result.secure_url,
            publicId: result.public_id
        }
        
    } catch (error) {
        console.log('CLoudinary error', error)

        
    }
}


module.exports = uploadImage