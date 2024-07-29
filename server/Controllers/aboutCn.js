import About from "../Models/aboutMd.js";
import catchAsync from "../Utils/catchAsync.js";
import HandleError from "../Utils/handleError.js";
import returnData from "../Utils/returnData.js";
import fs from "fs";
import { __dirname } from "../app.js";

export const createAbout = catchAsync(async (req, res, next) => {
  const img = req?.file?.filename || "";
  const newAbout = await About.create({ ...req.body, img });
  return returnData(res, 201, {
    status: "success",
    data: { newAbout },
  });
});

export const getAllAbout = catchAsync(async (req, res, next) => {
  const allAbout = await About.find();
  return returnData(res, 200, {
    status: "success",
    data: { allAbout },
  });
});

export const getAboutById = catchAsync(async (req, res, next) => {
  const about = await About.findById(req.params.id);
  if (!about) {
    return next(new HandleError("درباره ی موردنظر وجود ندارد"));
  }
  return returnData(res, 200, {
    status: "success",
    data: { about },
  });
});

export const updateAbout = catchAsync(async (req, res, next) => {
  const img = req?.file?.filename || "";
  const oldAbout = await About.findById(req.params.id);
  let updatedAbout;
  if (img) {
    updatedAbout = await About.findByIdAndUpdate(
      req.params.id,
      { ...req.body, img },
      { new: true, runVAlidators: true }
    );
    if (oldAbout.img) {
      fs.unlinkSync(__dirname + "/Public/Image/" + oldAbout.img);
    }
  } else {
    updatedAbout = await About.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runVAlidators: true,
    });
  }
  return returnData(res, 200, {
    status: "success",
    data: { updatedAbout },
  });
});

export const deleteAbout = catchAsync(async (req, res, next) => {
  const deletedAbout = await About.findByIdAndDelete(req.params.id);
  if (!deletedAbout) {
    return next(new HandleError(" درباره ی  موردنظر وجود ندارد", 404));
  }
  if (deletedAbout.img) {
    fs.unlinkSync(__dirname + "/Public/Image/" + deletedAbout.img);
  }
  return returnData(res, 200, {
    status: "success",
    data: { deletedAbout },
  });
});
