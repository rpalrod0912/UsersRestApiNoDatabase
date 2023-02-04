import express from "express";
import { v4 as uuidv4 } from "uuid";

import {
  createUser,
  getUsers,
  getUserById,
  deleteUserById,
  updateUserById,
} from "../controllers/users.js";

const router = express.Router();

//Todas las rutas aqui empiezan con /users
router.get("/", getUsers);
router.post("/", createUser);
///COn los ":" hacemos que trage cualquier parametro despuesd de /users/cualquiercosa
router.get("/:id", getUserById);
//Para borrar usuario que especifiquemos
router.delete("/:id", deleteUserById);
//Para actualizar datos
router.patch("/:id", updateUserById);
export default router;
