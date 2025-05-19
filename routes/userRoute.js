import { fetch, createUser } from "../controller/userController.js";
import express from "express";



const route = express.Router();

route.post("/create", createUser);
route.get("/fetch", fetch);

export default route;