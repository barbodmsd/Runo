import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
} from "../Controllers/categoryCn.js";
const categoryRoute = express.Router();

categoryRoute.route("/").post(createCategory).get(getCategories);
categoryRoute.route("/:id").delete(deleteCategory);

export default categoryRoute;
