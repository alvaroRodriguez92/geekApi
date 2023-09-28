import express from "express";  
import peliculasController from "../controllers/peliculasController.mjs";

const peliculasRouter = express.Router()

peliculasRouter.get("/", peliculasController.getPeliculas);
peliculasRouter.post("/", peliculasController.addPelicula);
peliculasRouter.patch("/:id", peliculasController.updatePelicula);
peliculasRouter.delete("/:id", peliculasController.deletePelicula);

export default peliculasRouter;