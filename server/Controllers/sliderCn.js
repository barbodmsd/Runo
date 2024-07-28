import Slider from "../Models/sliderMd.js";
import catchAsync from "../Utils/catchAsync.js";
import returnData from "../Utils/returnData.js";
import fs from "fs";
import { __dirname } from "../app.js";

export const createSlider = catchAsync(async (req, res, next) => {
  const img = req?.file?.filename || "";
  const newSlider = await Slider.create({ ...req.body, img });
  return returnData(res, 201, {
    status: "success",
    data: { newSlider },
  });
});

export const getSlider = catchAsync(async (req, res, next) => {
  const sliders = await Slider.find();
  return returnData(res, 200, {
    status: "success",
    data: { sliders },
  });
});

export const deleteSlider = catchAsync(async (req, res, next) => {
  try {
    await Slider.findById(req.params.id);
  } catch (error) {
    return next(new HandleError(" اسلایدر موردنظر وجود ندارد", 404));
  }
  const deletedSlider = await Slider.findByIdAndDelete(req.params.id);
  if (deletedSlider.img) {
    fs.unlinkSync(__dirname + "/Public/Image/" + deletedSlider.img);
  }
  return returnData(res, 200, {
    status: "success",
    data: { deletedSlider },
  });
});
