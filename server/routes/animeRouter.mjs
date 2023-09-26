import express from "express";
import animeController from "../controllers/animeController.mjs";

const animeRouter = express.Router();

animeRouter.get("/", animeController.getAnimes);
animeRouter.post("/", animeController.addAnime);

export default animeRouter;