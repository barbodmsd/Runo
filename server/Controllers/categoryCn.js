import Category from "../Models/categoryMd.js";
import catchAsync from "../Utils/catchAsync.js";
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
  const categories = await Category.find();
  return returnData(res, 200, {
    status: "success",
    data: { categories },
  });
});

export const deleteCategory = catchAsync(async (req, res, next) => {
  try {
    await Category.findById(req.params.id);
  } catch (error) {
    return returnData(res, 404, {
      status: "fail",
      message: " کتع گوری موردنظر وجود ندارد",
    });
  }
  const deletedCategory = await Category.findByIdAndDelete(req.params.id);
  return returnData(res, 200, {
    status: "success",
    data: { deletedCategory },
  });
});
