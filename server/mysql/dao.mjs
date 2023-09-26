import mysqlController from "./mysqlController.mjs";

const {animeQueries, seriesQueries,videogamesQueries, peliculasQueries} = mysqlController

const dao = {}

//Animes
dao.getAnimes = async (id) => await animeQueries.getAnimes()
dao.addAnime = async (anime) => await animeQueries.addAnime(anime)

//Series
dao.getSeries = async(id) => await seriesQueries.getSeries()
dao.addSerie = async(serie) => await seriesQueries.addSerie(serie)

//Videojuegos
dao.getVideojuegos = async(id) => await videogamesQueries.getVideojuegos()
dao.addVideojuego = async(videojuego) => await videogamesQueries.addVideojuego(videojuego)

//Peliculas
dao.getPeliculas = async(id) => await peliculasQueries.getPeliculas()
dao.addPelicula = async(pelicula) => await peliculasQueries.addPelicula(pelicula)

export default dao;