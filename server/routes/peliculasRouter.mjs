import express from "express";  
import peliculasController from "../controllers/peliculasController.mjs";

const peliculasRouter = express.Router()

peliculasRouter.get("/", peliculasController.getPeliculas);
peliculasRouter.post("/", peliculasController.addPelicula);

export default peliculasRouter;