import express from "express";

import upload from "../Utils/uploadFile.js";
import { createArticle, deleteArticle, getAllArticle, getArticleById, updateArticle } from "../Controllers/articleCn.js";
const articleRoute = express.Router();

articleRoute
  .route("/")
  .post(upload.single("file"), createArticle)
  .get(getAllArticle);
articleRoute
  .route("/:id")
  .get(getArticleById)
  .patch(upload.single("file"), updateArticle)
  .delete(deleteArticle);

export default articleRoute;
