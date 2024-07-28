import mongoose from "mongoose";

const bannerSchema=new mongoose.Schema({
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
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }
},{timestamps:true})

const Banner=mongoose.model('Banner',bannerSchema)
export default Banner