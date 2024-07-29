import express from "express";
import { createBanner, deleteBanner, getBanner } from "../Controllers/bannerCn.js";
import upload from "../Utils/uploadFile.js";
const bannerRoute = express.Router();

bannerRoute.route("/").post(upload.single("file"), createBanner).get(getBanner);
bannerRoute.route("/:id").delete(deleteBanner);

export default bannerRoute;
