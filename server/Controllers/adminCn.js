import Admin from "../Models/adminMd.js";
import catchAsync from "../Utils/catchAsync.js";
import returnData from "../Utils/returnData.js";
import fs from "fs";
import { __dirname } from "../app.js";

export const getAdmin = catchAsync(async (req, res, next) => {
  const admin = await Admin.findById(req.params.id);
  return returnData(res, 200, {
    status: "success",
    data: { admin },
  });
});
export const updateAdmin = catchAsync(async (req, res, next) => {
  const deleteImage = req?.body?.deleteImage
  const img = req?.file?.filename || "";
  const oldAdmin = await Admin.findById(req.params.id);
  let updatedAdmin;

  if (img) {
    updatedAdmin = await Admin.findByIdAndUpdate(
      req.params.id,
      { ...req.body, img },
      { new: true, runValidators: true }
    );
    if (oldAdmin.img) {
      fs.unlinkSync(__dirname + "/Public/Image/" + oldAdmin.img);
    }
  } else if (deleteImage) {
    updatedAdmin = await Admin.findByIdAndUpdate(
      req.params.id,
      { ...req.body, img: "" },
      { new: true }
    );
    if (oldAdmin.img) {
      fs.unlinkSync(__dirname + "/Public/Image/" + oldAdmin.img);
    }
  } else {
    updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
  }
  return returnData(res, 200, {
    status: "success",
    data: { updatedAdmin },
  });
});
