import { fetch } from "../controller/userController.js";
import express from "express";



const route = express.Router();

route.get("/fetch", fetch);

export default route;