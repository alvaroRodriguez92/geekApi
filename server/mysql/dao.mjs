import mysqlController from "./mysqlController.mjs";

const {animeQueries, seriesQueries,videogamesQueries, peliculasQueries} = mysqlController

const dao = {}

dao.getAnimes = async (id) => await animeQueries.getAnimes()

dao.getSeries = async(id) => await seriesQueries.getSeries()

dao.getVideojuegos = async(id) => await videogamesQueries.getVideojuegos()

dao.getPeliculas = async(id) => await peliculasQueries.getPeliculas()

export default dao;