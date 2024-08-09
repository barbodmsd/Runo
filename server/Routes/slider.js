import express from "express";
import {
  createSlider,
  deleteSlider,
  getSlider,
} from "../Controllers/sliderCn.js";
import upload from "../Utils/uploadFile.js";
import isAdmin from "../Middlewares/isAdmin.js";
const sliderRoute = express.Router();

sliderRoute.route("/").post(isAdmin,upload.single('file'),createSlider).get(getSlider);
sliderRoute.route("/:id").delete(isAdmin,deleteSlider);

export default sliderRoute;
