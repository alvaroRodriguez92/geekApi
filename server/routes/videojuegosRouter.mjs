import express from "express"
import videojuegosController from "../controllers/videojuegosController.mjs"

const videojuegosRouter = express.Router()

videojuegosRouter.get("/", videojuegosController.getVideojuegos)

export default videojuegosRouter;