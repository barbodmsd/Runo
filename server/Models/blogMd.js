import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "لطفا نام را وارد کنید"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "لطفا توضیحات را وارد کنید"],
      trim: true,
    },
    img: {
      type: String,
      required: [true, "لطفا عکس را وارد کنید"],
      default: "",
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
