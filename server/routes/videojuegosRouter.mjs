import express from "express"
import videojuegosController from "../controllers/videojuegosController.mjs"

const videojuegosRouter = express.Router()

videojuegosRouter.get("/", videojuegosController.getVideojuegos)
videojuegosRouter.post("/", videojuegosController.addVideojuego)

export default videojuegosRouter;