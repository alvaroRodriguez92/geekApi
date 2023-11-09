import express from "express";  
import peliculasController from "../controllers/peliculasController.mjs";

const peliculasRouter = express.Router()

peliculasRouter.get("/", peliculasController.getPeliculas);
peliculasRouter.get("/:year", peliculasController.getPeliculasByYear);
peliculasRouter.get("/year/years", peliculasController.getYears);
peliculasRouter.post("/", peliculasController.addPelicula);
peliculasRouter.patch("/:id", peliculasController.updatePelicula);
peliculasRouter.patch("/image/:id", peliculasController.deletePeliculaImage);
peliculasRouter.delete("/:id", peliculasController.deletePelicula);
peliculasRouter.post("/search", peliculasController.searchPelicula);
peliculasRouter.post("/pendiente", peliculasController.addPeliculaPendiente);
peliculasRouter.get("/pendiente/get", peliculasController.getPeliculasPendientes);
peliculasRouter.delete("/pendiente/:id",peliculasController.deletePendiente);
peliculasRouter.get("/get/top",peliculasController.getTopPeliculas)

export default peliculasRouter;