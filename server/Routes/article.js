import express from "express";
import {
  deleteArticle,
  createArticle,
  getArticleById,
  getAllArticle,
  updateArticle,
} from "../Controllers/articleCn.js";
import upload from "../Utils/uploadFile.js";
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
