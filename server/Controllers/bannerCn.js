import fs from "fs";
import { __dirname } from "../app.js";
import Banner from "../Models/bannerMd.js";
import catchAsync from "../Utils/catchAsync.js";
import HandleError from "../Utils/handleError.js";
import returnData from "../Utils/returnData.js";

export const createBanner = catchAsync(async (req, res, next) => {
  const img = req?.file?.filename || "";
  const newBanner = await Banner.create({ ...req.body, img });
  return returnData(res, 201, {
    status: "success",
    data: { newBanner },
  });
});

export const getBanner = catchAsync(async (req, res, next) => {
  const Banners = await Banner.find();
  return returnData(res, 200, {
    status: "success",
    data: { Banners },
  });
});

export const deleteBanner = catchAsync(async (req, res, next) => {
  const deletedBanner = await Banner.findByIdAndDelete(req.params.id);
  if (!deletedBanner) {
    return next(new HandleError("بنر موردنظر وجود ندارد", 404));
  }
  if (deletedBanner.img) {
    fs.unlinkSync(__dirname + "/Public/Image/" + deletedBanner.img);
  }
  return returnData(res, 200, {
    status: "success",
    data: { deletedBanner },
  });
});
