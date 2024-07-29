import Blog from "../Models/blogMd.js";
import catchAsync from "../Utils/catchAsync.js";
import HandleError from "../Utils/handleError.js";
import returnData from "../Utils/returnData.js";
import fs from "fs";
import { __dirname } from "../app.js";
import Category from "../Models/categoryMd.js";
import ApiFeatures from "../Utils/apiFeatures.js";

export const createBlog = catchAsync(async (req, res, next) => {
  const img = req?.file?.filename || "";
  const newBlog = await Blog.create({ ...req.body, img });
  await Category.findByIdAndUpdate(newBlog.categoryId, {
    $push: { blogId: newBlog._id },
  });
  return returnData(res, 201, {
    status: "success",
    data: { newBlog },
  });
});

export const getAllBlog = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Blog, req.query)
    .filters()
    .sort()
    .populate()
    .limitFields()
    .paginate();
  const blogs = await features.query;
  return returnData(res, 200, {
    status: "success",
    data: { blogs },
  });
});

export const getBlogById = catchAsync(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    return next(new HandleError(" بلاگ موردنظر وجود ندارد", 404));
  }
  return returnData(res, 200, {
    status: "success",
    data: { blog },
  });
});

export const updateBlog = catchAsync(async (req, res, next) => {
  const img = req?.file?.filename || "";
  const deleteImage = req?.body?.deleteImage;
  const oldBlog = await Blog.findById(req.params.id);
  let updatedBlog;
  if (img) {
    updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { ...req.body, img },
      { new: true, runValidators: true }
    );
    if (oldBlog.img) {
      fs.unlinkSync(__dirname + "/Public/Image/" + oldBlog.img);
    }
  } else if (deleteImage) {
    updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { ...req.body, img: "" },
      { new: true }
    );
    if (oldBlog.img) {
      fs.unlinkSync(__dirname + "/Public/Image/" + oldBlog.img);
    }
  } else {
    updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
  }
  return returnData(res, 200, {
    status: "success",
    data: { updatedBlog },
  });
});

export const deleteBlog = catchAsync(async (req, res, next) => {
  const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
  if (!deletedBlog) {
    return next(new HandleError(" بلاگ موردنظر وجود ندارد", 404));
  }
  if (deletedBlog.img) {
    fs.unlinkSync(__dirname + "/Public/Image/" + deletedBlog.img);
  }
  await Category.findByIdAndUpdate(deletedBlog.categoryId, {
    $pull: { blogId: deletedBlog._id },
  });
  return returnData(res, 200, {
    status: "success",
    data: { deletedBlog },
  });
});
