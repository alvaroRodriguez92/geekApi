import express from "express";
import seriesController from "../controllers/seriesController.mjs";

const seriesRouter = express.Router();

seriesRouter.get("/", seriesController.getSeries);

export default seriesRouter;
