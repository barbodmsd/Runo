import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "لطفا نام کاربری خود را وارد کند"],
      trim: true,
      // unique:[true,'نام کاربری دیگری انتخاب کنید']
    },
    password: {
      type: String,
      required: [true, "لطفا رمز عبور خود را وارد کنید"],
      trim: true,
    },
    phone: {
      type: String,
      // required: [true, "لطفا شماره تلفن خود را وارد کنید"],
      trim: true,
    },
    img: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      default: "admin",
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
