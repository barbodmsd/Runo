import mongoose from "mongoose";

const aboutSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'لطفا نام را وارد کنید'],
        trim:true
    },
    description:{
        type:String,
        required:[true,'لطفا توضیحات را وارد کنید'],
    },
    img:{
        type:String,
        default:''
    },
},{timestamps:true})

const About=mongoose.model('About',aboutSchema)
export default About