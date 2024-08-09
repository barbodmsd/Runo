import express from "express";
import { getAdmin, updateAdmin } from "../Controllers/adminCn.js";
import upload from "../Utils/uploadFile.js";
const adminRoute = express.Router();

adminRoute
  .route("/:id")
  .get(getAdmin)
  .patch(upload.single("file"), updateAdmin);

export default adminRoute;
