import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlog,
  getBlogById,
  updateBlog,
} from "../Controllers/blogCn.js";
import upload from "../Utils/uploadFile.js";
import isAdmin from "../Middlewares/isAdmin.js";
const blogRoute = express.Router();

blogRoute.route("/").post(isAdmin,upload.single("file"), createBlog).get(getAllBlog);
blogRoute
  .route("/:id")
  .get(getBlogById)
  .patch(isAdmin,upload.single("file"), updateBlog)
  .delete(isAdmin,deleteBlog);

export default blogRoute;
