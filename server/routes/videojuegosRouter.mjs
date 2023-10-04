import express from "express"
import videojuegosController from "../controllers/videojuegosController.mjs"

const videojuegosRouter = express.Router()

videojuegosRouter.get("/", videojuegosController.getVideojuegos)
videojuegosRouter.get("/:year", videojuegosController.getVideojuegosByYear);
videojuegosRouter.get("/year/years", videojuegosController.getYears);
videojuegosRouter.post("/", videojuegosController.addVideojuego);
videojuegosRouter.patch("/:id", videojuegosController.updateVideojuego);
videojuegosRouter.delete("/:id", videojuegosController.deleteVideojuego);


export default videojuegosRouter;