import Blog from "../Models/blogMd.js";
import Category from "../Models/categoryMd.js";
import catchAsync from "../Utils/catchAsync.js";
import HandleError from "../Utils/handleError.js";
import returnData from "../Utils/returnData.js";

export const createCategory = catchAsync(async (req, res, next) => {
  const img = req?.file?.filename || "";
  const newCategory = await Category.create({ ...req.body, img });
  return returnData(res, 201, {
    status: "success",
    data: { newCategory },
  });
});

export const getCategories = catchAsync(async (req, res, next) => {
  const categories = await Category.find().populate("blogId");
  return returnData(res, 200, {
    status: "success",
    data: { categories },
  });
});

export const deleteCategory = catchAsync(async (req, res, next) => {
  const deletedCategory = await Category.findByIdAndDelete(req.params.id);
  if (!deletedCategory) {
    return next(new HandleError(" کته گوری موردنظر وجود ندارد", 404));
  }
  await Blog.updateMany(
    { categoryId: deletedCategory._id },
    { $set: { categoryId: "" } }
  );
  return returnData(res, 200, {
    status: "success",
    data: { deletedCategory },
  });
});
