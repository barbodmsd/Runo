import express from "express";
import { login, register, sendSms, verifySms } from "../Controllers/authCn.js";
const authRoute = express.Router();

authRoute.route("/:register").post(register);
authRoute.route("/").post(login);
authRoute.route("/:send-sms").post(sendSms);
authRoute.route("/:verify-sms").post(verifySms);

export default authRoute;
