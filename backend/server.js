require('dotenv').config()
const express = require('express')
const connectToDb = require('./db/db')
const authRoute = require('./routes/auth-route')
const blogRoute = require('./routes/blog-routes')


const PORT = process.env.PORT || 3001
const app = express()


app.use(express.json())

app.use('/user/auth',authRoute)
app.use('/user',blogRoute)

connectToDb()
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})
