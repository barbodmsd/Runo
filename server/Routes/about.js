import express from "express";
import {
  deleteAbout,
  createAbout,
  getAboutById,
  getAllAbout,
  updateAbout,
} from "../Controllers/aboutCn.js";
import upload from "../Utils/uploadFile.js";
import isAdmin from "../Middlewares/isAdmin.js";
const aboutRoute = express.Router();

aboutRoute.route("/").post(isAdmin,upload.single("file"), createAbout).get(getAllAbout);
aboutRoute
  .route("/:id")
  .get(getAboutById)
  .patch(isAdmin,upload.single("file"), updateAbout)
  .delete(isAdmin,deleteAbout);

export default aboutRoute;
