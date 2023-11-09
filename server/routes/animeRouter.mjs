import express from "express";
import animeController from "../controllers/animeController.mjs";


const animeRouter = express.Router();

animeRouter.get("/", animeController.getAnimes);
animeRouter.get("/:year", animeController.getAnimeByYear);
animeRouter.get("/year/years", animeController.getYears);
animeRouter.post("/", animeController.addAnime);
animeRouter.patch("/:id", animeController.updateAnime);
animeRouter.patch("/image/:id", animeController.deleteAnimeImage);
animeRouter.delete("/:id", animeController.deleteAnime);
animeRouter.post("/search", animeController.searchAnime);
animeRouter.post("/pendiente", animeController.addAnimePendiente);
animeRouter.get("/pendiente/get", animeController.getAnimePendientes);
animeRouter.delete("/pendiente/:id",animeController.deletePendiente);
animeRouter.get("/get/top",animeController.getTopAnime)

export default animeRouter;