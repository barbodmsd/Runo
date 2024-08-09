import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
} from "../Controllers/categoryCn.js";
import isAdmin from "../Middlewares/isAdmin.js";
const categoryRoute = express.Router();

categoryRoute.route("/").post(isAdmin,createCategory).get(getCategories);
categoryRoute.route("/:id").delete(isAdmin,deleteCategory);

export default categoryRoute;
