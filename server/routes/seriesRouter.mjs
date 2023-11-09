import express from "express";
import seriesController from "../controllers/seriesController.mjs";

const seriesRouter = express.Router();

seriesRouter.get("/", seriesController.getSeries);
seriesRouter.get("/:year", seriesController.getSeriesByYear);
seriesRouter.get("/year/years", seriesController.getYears);
seriesRouter.post("/", seriesController.addSerie);
seriesRouter.patch("/:id", seriesController.updateSerie);
seriesRouter.patch("/image/:id", seriesController.deleteSerieImage);
seriesRouter.delete("/:id", seriesController.deleteSerie);
seriesRouter.post("/search", seriesController.searchSerie);
seriesRouter.post("/pendiente", seriesController.addSeriePendiente);
seriesRouter.get("/pendiente/get", seriesController.getSeriesPendientes);
seriesRouter.delete("/pendiente/:id",seriesController.deletePendiente);
seriesRouter.get("/get/top",seriesController.getTopSeries)

export default seriesRouter;
