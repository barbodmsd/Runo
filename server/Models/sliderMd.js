import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "لطفا نام را وارد کنید"],
      trim: true,
    },
    video: {
      type: String,
      required: [true, "لطفا ویدیو را وارد کنید"],
      default: "",
    },
  },
  { timestamps: true }
);
const Slider = mongoose.model("Slider", sliderSchema);
export default Slider;
