import express from "express"
import videojuegosController from "../controllers/videojuegosController.mjs"

const videojuegosRouter = express.Router()

videojuegosRouter.get("/", videojuegosController.getVideojuegos)
videojuegosRouter.post("/", videojuegosController.addVideojuego)
videojuegosRouter.patch("/:id", videojuegosController.updateVideojuego)
videojuegosRouter.delete("/:id", videojuegosController.deleteVideojuego)
videojuegosRouter.get("/years", videojuegosController.getYears);


export default videojuegosRouter;