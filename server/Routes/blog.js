import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlog,
  getBlogById,
  updateBlog,
} from "../Controllers/blogCn.js";
import upload from "../Utils/uploadFile.js";
const blogRoute = express.Router();

blogRoute.route("/").post(upload.single("file"), createBlog).get(getAllBlog);
blogRoute
  .route("/:id")
  .get(getBlogById)
  .patch(upload.single("file"), updateBlog)
  .delete(deleteBlog);

export default blogRoute;
