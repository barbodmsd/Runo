import express from "express";
import { login, register, sendSms, verifySms } from "../Controllers/authCn.js";
const authRoute = express.Router();

authRoute.route("/").post(login);
authRoute.route("/register").post(register);
authRoute.route("/send-sms").post(sendSms);
authRoute.route("/verify").post(verifySms);

export default authRoute;
