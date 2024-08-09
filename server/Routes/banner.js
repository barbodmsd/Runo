import express from "express";
import { createBanner, deleteBanner, getBanner } from "../Controllers/bannerCn.js";
import upload from "../Utils/uploadFile.js";
import isAdmin from "../Middlewares/isAdmin.js";
const bannerRoute = express.Router();

bannerRoute.route("/").post(isAdmin,upload.single("file"), createBanner).get(getBanner);
bannerRoute.route("/:id").delete(isAdmin,deleteBanner);

export default bannerRoute;
