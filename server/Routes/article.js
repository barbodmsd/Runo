import express from "express";

import upload from "../Utils/uploadFile.js";
import { createArticle, deleteArticle, getAllArticle, getArticleById, updateArticle } from "../Controllers/articleCn.js";
import isAdmin from "../Middlewares/isAdmin.js";
const articleRoute = express.Router();

articleRoute
  .route("/")
  .post(isAdmin,upload.single("file"), createArticle)
  .get(getAllArticle);
articleRoute
  .route("/:id")
  .get(getArticleById)
  .patch(isAdmin,upload.single("file"), updateArticle)
  .delete(isAdmin,deleteArticle);

export default articleRoute;
