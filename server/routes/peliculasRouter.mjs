import express from "express";  
import peliculasController from "../controllers/peliculasController.mjs";

const peliculasRouter = express.Router()

peliculasRouter.get("/", peliculasController.getPeliculas);

export default peliculasRouter;