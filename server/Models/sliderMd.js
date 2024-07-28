import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "لطفا نام را وارد کنید"],
      trim: true,
    },
    img: [
      {
        type: String,
        required: [true, "لطفا عکس را وارد کنید"],
      },
    ],
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Slider = mongoose.model("Slider", sliderSchema);
export default Slider;
