import express from "express";
import {deleteAbout, 
  createAbout,
  getAboutById,
  getAllAbout,
  updateAbout,
} from "../Controllers/aboutCn.js";
import upload from "../Utils/uploadFile.js";
const aboutRoute = express.Router();

aboutRoute.route("/").post(upload.single("file"), createAbout).get(getAllAbout);
aboutRoute
  .route("/:id")
  .get(getAboutById)
  .patch(upload.single("file"), updateAbout)
  .delete(deleteAbout);

export default aboutRoute;
