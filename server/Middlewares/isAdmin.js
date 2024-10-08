import jwt from "jsonwebtoken";
import catchAsync from "../Utils/catchAsync.js";
import HandleError from "../Utils/handleError.js";
const isAdmin = catchAsync(async (req, res, next) => {
  try {
    const token = req?.headers?.authorization.split(" ")[1];
    const { role } = jwt.verify(token, process.env.SECRET_KEY);
    if (role != "admin") {
      return next(new HandleError("شما دسترسی لازم را ندارید", 401));
    }
    return next();
  } catch (error) {
    return next(new HandleError("توکن اجباریست", 400));
  }
});

export default isAdmin