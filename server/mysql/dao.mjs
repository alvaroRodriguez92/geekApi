import mysqlController from "./mysqlController.mjs";

const {animeQueries, seriesQueries,videogamesQueries, peliculasQueries} = mysqlController

const dao = {}

//Animes
dao.getAnimes = async (id) => await animeQueries.getAnimes()
dao.addAnime = async (anime) => await animeQueries.addAnime(anime)
dao.updateAnime = async (id, anime) => await animeQueries.updateAnime(id, anime)
dao.deleteAnime = async (id) => await animeQueries.deleteAnime(id)
dao.getYearsAnime = async() => await animeQueries.getYears()


//Series
dao.getSeries = async(id) => await seriesQueries.getSeries()
dao.addSerie = async(serie) => await seriesQueries.addSerie(serie)
dao.updateSerie = async(id, serie) => await seriesQueries.updateSerie(id, serie)
dao.deleteSerie = async(id) => await seriesQueries.deleteSerie(id)
dao.getYearsSerie = async() => await seriesQueries.getYears()


//Videojuegos
dao.getVideojuegos = async(id) => await videogamesQueries.getVideojuegos()
dao.addVideojuego = async(videojuego) => await videogamesQueries.addVideojuego(videojuego)
dao.updateVideojuego = async(id, videojuego) => await videogamesQueries.updateVideojuego(id, videojuego)
dao.deleteVideojuego = async(id) => await videogamesQueries.deleteVideojuego(id) 
dao.getYearsVideojuego = async() => await videogamesQueries.getYears()


//Peliculas
dao.getPeliculas = async(id) => await peliculasQueries.getPeliculas()
dao.addPelicula = async(pelicula) => await peliculasQueries.addPelicula(pelicula)
dao.updatePelicula = async(id, pelicula) => await peliculasQueries.updatePelicula(id, pelicula)
dao.deletePelicula = async (id) => await peliculasQueries.deletePelicula(id)
dao.getYearsPelicula = async() => await peliculasQueries.getYears()


export default dao;