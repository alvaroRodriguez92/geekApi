import express from "express";  
import peliculasController from "../controllers/peliculasController.mjs";

const peliculasRouter = express.Router()

peliculasRouter.get("/", peliculasController.getPeliculas);
peliculasRouter.get("/:year", peliculasController.getPeliculasByYear);
peliculasRouter.get("/year/years", peliculasController.getYears);
peliculasRouter.post("/", peliculasController.addPelicula);
peliculasRouter.patch("/:id", peliculasController.updatePelicula);
peliculasRouter.delete("/:id", peliculasController.deletePelicula);


export default peliculasRouter;