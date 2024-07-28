import catchAsync from "../Utils/catchAsync";

export const createSlider=catchAsync(async(req,res,next)=>{
    const image=req?.file?.filename || ''
    const newSlider=await Slider
})
export const getSlider=catchAsync(async(req,res,next)=>{})
export const deleteSlider=catchAsync(async(req,res,next)=>{})