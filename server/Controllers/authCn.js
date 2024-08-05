import catchAsync from "../Utils/catchAsync.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../Models/adminMd.js";
import returnData from "../Utils/returnData.js";
import HandleError from "../Utils/handleError.js";
import { sendAuthCode, verifyCode } from "../Utils/smsHandler.js";

export const register = catchAsync(async (req, res, next) => {
  const { password } = req?.body;
  const hashedPassword = bcrypt.hashSync(password, 12);
  const newAdmin = await Admin.create({
    ...req.body,
    password: hashedPassword,
  });
  const token = jwt.sign(
    { id: newAdmin._id, role: newAdmin.role },
    process.env.SECRET_KEY
  );
  return returnData(res, 201, {
    status: "ثبتنام با موفقیت انجام شد",
    data: {
      admin: {
        id: newAdmin._id,
        username: newAdmin.username,
        phone: newAdmin.phone,
        image: newAdmin.img,
        role: newAdmin.role,
      },
      token,
    },
  });
});

export const login = catchAsync(async (req, res, next) => {
  const { username, password } = req?.body;
  const admin = await Admin.findOne({ username })
  if (!admin) {
    return next(new HandleError("نام کاربری یا رمز عبور اشتباه است", 400));
  }
  const comparePass=bcrypt.compareSync(password,admin.password)

   if (username != admin.username || !comparePass) {
    return next(new HandleError("نام کاربری یا رمز عبور اشتباه است", 400));
  }
  const token = jwt.sign(
    { id: admin._id, role: admin.role },
    process.env.SECRET_KEY
  );
  return returnData(res, 201, {
    status: "ورود با موفقیت انجام شد",
    data: {
      admin,
      token,
    },
  });
});

export const sendSms = catchAsync(async (req, res, next) => {
    const { phone } = req.body;
    console.log(req.body)
    const admin=await Admin.findOne({phone})
      if(!admin){
          return next(new HandleError("شماره تلفن اشتباه است"));
      }
    const send = await sendAuthCode(phone);
    if (!send.success) {
      return next(new HandleError(send.message, 500));
    }
  return returnData(res,200,{
    status:'success',
    data:{send}
  })
});

export const verifySms = catchAsync(async (req, res, next) => {
  const { code, phone } = req.body;
  const admin = await Admin.findOne({ phone })
  const verify = await verifyCode(phone, code);
  if (!verify.success) {
    return next(new HandleError("کد اشتباه است", 400));
  }
  const token = jwt.sign(
    { id: admin._id, role: admin.role },
    process.env.SECRET_KEY
  );
  return returnData(res, 201, {
    status: "ورود با موفقیت انجام شد",
    data: {
      admin,
      token,
    },
  });
});