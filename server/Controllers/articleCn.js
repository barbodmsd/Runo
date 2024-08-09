import catchAsync from "../Utils/catchAsync.js";
import HandleError from "../Utils/handleError.js";
import returnData from "../Utils/returnData.js";
import fs from "fs";
import { __dirname } from "../app.js";
import Article from "../Models/articleMd.js";
import ApiFeatures from "../Utils/apiFeatures.js";

export const createArticle = catchAsync(async (req, res, next) => {
  const img = req?.file?.filename || "";
  const newArticle = await Article.create({ ...req.body, img });
  return returnData(res, 201, {
    status: "success",
    data: { newArticle },
  });
});

export const getAllArticle = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Article, req.query)
    .filters()
    .paginate()
    .populate()
    .sort()
    .limitFields();
  const allArticle =await  features.query;
  return returnData(res, 200, {
    status: "success",
    data:{allArticle},
  });
});

export const getArticleById = catchAsync(async (req, res, next) => {
  const article = await Article.findById(req.params.id);
  if (!article) {
    return next(new HandleError(" مقاله ی موردنظر وجود ندارد"));
  }
  return returnData(res, 200, {
    status: "success",
    data: { article },
  });
});

export const updateArticle = catchAsync(async (req, res, next) => {
  const img = req?.file?.filename || "";
  const oldArticle = await Article.findById(req.params.id);
  let updatedArticle;
  if (img) {
    updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      { ...req.body, img },
      { new: true, runVAlidators: true }
    );
    if (oldArticle.img) {
      fs.unlinkSync(__dirname + "/Public/Image/" + oldArticle.img);
    }
  } else {
    updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runVAlidators: true,
    });
  }
  return returnData(res, 200, {
    status: "success",
    data: { updatedArticle },
  });
});

export const deleteArticle = catchAsync(async (req, res, next) => {
  const deletedArticle = await Article.findByIdAndDelete(req.params.id);
  if (!deletedArticle) {
    return next(new HandleError("مقاله ی  موردنظر وجود ندارد", 404));
  }
  if (deletedArticle.img) {
    fs.unlinkSync(__dirname + "/Public/Image/" + deletedArticle.img);
  }
  return returnData(res, 200, {
    status: "success",
    data: { deletedArticle },
  });
});
