import express from "express"
import videojuegosController from "../controllers/videojuegosController.mjs"

const videojuegosRouter = express.Router()

videojuegosRouter.get("/", videojuegosController.getVideojuegos)
videojuegosRouter.get("/:year", videojuegosController.getVideojuegosByYear);
videojuegosRouter.get("/year/years", videojuegosController.getYears);
videojuegosRouter.post("/", videojuegosController.addVideojuego);
videojuegosRouter.patch("/:id", videojuegosController.updateVideojuego);
videojuegosRouter.patch("/image/:id", videojuegosController.deleteVideojuegoImage);
videojuegosRouter.delete("/:id", videojuegosController.deleteVideojuego);
videojuegosRouter.post("/search", videojuegosController.searchVideojuego);
videojuegosRouter.post("/pendiente", videojuegosController.addVideojuegoPendiente);
videojuegosRouter.get("/pendiente/get", videojuegosController.getVideojuegosPendientes);
videojuegosRouter.delete("/pendiente/:id",videojuegosController.deletePendiente);
videojuegosRouter.get("/get/top",videojuegosController.getTopVideojuegos);

export default videojuegosRouter;