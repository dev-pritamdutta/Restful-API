import {
  fetch,
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controller/userController.js";
import express from "express";

const route = express.Router();

route.post("/create", createUser);
route.get("/getAll", getAllUsers);
route.put("/update/:id", updateUser);
route.delete("/delete/:id", deleteUser);
route.get("/fetch", fetch);

export default route;
