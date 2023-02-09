import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import  postRoutes from './routes/post.js'



dotenv.config()
const app = express()



const port = process.env.PORT || 5000

app.use('/posts', postRoutes)

app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded ({limit:"30mb", extended:true}))

app.use(cors())

const CONNECTION_URL ='mongodb+srv://mernProject:mernProject123@cluster0.itwiwyf.mongodb.net/?retryWrites=true&w=majority'

 
mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})

.then(()=>app.listen (port, ()=> console.log(`server running on port: ${port}`)))
.catch((error )=> console.log(error.message))










