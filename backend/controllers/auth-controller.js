const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const user = require('../models/user')



const registerUser = async(req,res)=>{
    try {
        const { username, email, password } = req.body
        console.log(username,email,password)

        const checkIfUserExist = await user.findOne({
            $or: [{username},{email}]
        }) 

        if(checkIfUserExist){
            return res.status(400).json({
                success: false,
                message: "User already exist"
            })
        }

        const hashPassword = await bcrypt.hash(password,10)

        const createduser = new user({
            email,
            username,
            password:hashPassword
        })
        await createduser.save()

        if(createduser){
            return res.status(201).json({
                success: true,
                message: "Account created successfully",
                data: createduser
            })
        }
        else{
            return res.status(400).json({
                success: false,
                message: "User not created"
            })
        }
    } catch (error){
        console.log('User register error', error)
        res.status(500).json({
            success: false,
            message: "Error occured",
          });
        
    }
}


const loginUser = async(req,res)=>{
    try {

        const { email, password } = req.body

        const findUser = await user.findOne({email})

        if(!findUser){
            return res.status(404).json({
                success: false,
                message: 'email not found'
            })
        }

        const comparePassword = await bcrypt.compare(password,findUser.password)
        if(!comparePassword) return res.status(404).json({
            success: false,
            message: 'Password is incorrect'
        })

        const token = jwt.sign({id: findUser.id,username: findUser.username},process.env.JWT_SECRET,{expiresIn: '1d'})
       
        res.status(200).json({
            success: true,
            message: "Login successful",
            token
        })
        
    } catch (error) {
        console.log('User login error', error)
        res.status(500).json({
            success: false,
            message: "Error occured",
          });
        
    }
}





module.exports = { registerUser, loginUser}


