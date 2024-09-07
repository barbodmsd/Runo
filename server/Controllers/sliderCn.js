import Slider from "../Models/sliderMd.js";
import catchAsync from "../Utils/catchAsync.js";
import returnData from "../Utils/returnData.js";
import fs from "fs";
import { __dirname } from "../app.js";
import HandleError from "../Utils/handleError.js";

export const createSlider = catchAsync(async (req, res, next) => {
  const video = req?.file?.filename || "";
  const newSlider = await Slider.create({ ...req.body, video });
  return returnData(res, 201, {
    status: "success",
    data: { newSlider },
  });
});

export const getSlider = catchAsync(async (req, res, next) => {
  const sliders = await Slider.find()
  return returnData(res, 200, {
    status: "success",
    data: { sliders },
  });
});

export const deleteSlider = catchAsync(async (req, res, next) => {
  const deletedSlider = await Slider.findByIdAndDelete(req.params.id);
  if(!deletedSlider){
    return next(new HandleError("اسلایدر موردنظر وجود ندارد", 404))
  }
  if (deletedSlider.img) {
    fs.unlinkSync(__dirname + "/Public/Image/" + deletedSlider.img);
  }
  return returnData(res, 200, {
    status: "success",
    data: { deletedSlider },
  });
});
