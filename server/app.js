import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import aboutRoute from './Routes/about.js'
import adminRoute from './Routes/admin.js'
import articleRoute from './Routes/article.js'
import authRoute from './Routes/auth.js'
import bannerRoute from './Routes/banner.js'
import blogRoute from './Routes/blog.js'
import categoryRoute from './Routes/category.js'
import sliderRoute from './Routes/slider.js'
import catchError from './Utils/catchError.js'
import HandleError from './Utils/handleError.js'

const app=express()
const __filename=fileURLToPath(import.meta.url)
export const __dirname=path.dirname(__filename)

// middlewares
app.use(express.json())
app.use(express.static('Public'))
app.use(morgan('dev'))
app.use(cors())

// routes
app.use('/about',aboutRoute)
app.use('/article',articleRoute)
app.use('/auth',authRoute)
app.use('/banner',bannerRoute)
app.use('/blog',blogRoute)
app.use('/category',categoryRoute)
app.use('/slider',sliderRoute)
app.use('/admin',adminRoute)
app.use('*',(req,res,next)=>{
    return next(new HandleError('Route Not Found',404))
})
app.use(catchError)

export default app