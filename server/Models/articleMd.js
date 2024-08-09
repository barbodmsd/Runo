import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "لطفا نام را وارد کنید"],
      trim: true,
    },
    description: {
      type:Object,
      short: String,
      long: String,
      required: [true, "لطفا توضیحات را وارد کنید"],
    },
    img: {
      type: String,
      default: "",
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema);
export default Article;
