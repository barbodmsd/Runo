import express from "express";
import {
  createSlider,
  deleteSlider,
  getSlider,
} from "../Controllers/sliderCn.js";
import upload from "../Utils/uploadFile.js";
const sliderRoute = express.Router();

sliderRoute.route("/").post(upload.single('file'),createSlider).get(getSlider);
sliderRoute.route("/:id").delete(deleteSlider);

export default sliderRoute;
