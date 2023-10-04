import express from "express";
import seriesController from "../controllers/seriesController.mjs";

const seriesRouter = express.Router();

seriesRouter.get("/", seriesController.getSeries);
seriesRouter.get("/:year", seriesController.getSeriesByYear);
seriesRouter.get("/year/years", seriesController.getYears);
seriesRouter.post("/", seriesController.addSerie);
seriesRouter.patch("/:id", seriesController.updateSerie);
seriesRouter.delete("/:id", seriesController.deleteSerie);


export default seriesRouter;
