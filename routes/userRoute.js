import { fetch, createUser, getAllUsers } from "../controller/userController.js";
import express from "express";



const route = express.Router();

route.post("/create", createUser);
route.get("/getAll", getAllUsers);
route.get("/fetch", fetch);

export default route;