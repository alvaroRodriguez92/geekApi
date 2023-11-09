import mysqlController from "./mysqlController.mjs";

const {animeQueries, seriesQueries,videogamesQueries, peliculasQueries, deleteQuery} = mysqlController

const dao = {}

//Animes
dao.getAnimes = async (id) => await animeQueries.getAnimes()
dao.getAnimesByYear = async(year) => await animeQueries.getAnimeByYear(year)
dao.addAnime = async (anime) => await animeQueries.addAnime(anime)
dao.updateAnime = async (id, anime) => await animeQueries.updateAnime(id, anime)
dao.deleteAnimeImage = async(id) => await animeQueries.deleteAnimeImage(id)
dao.deleteAnime = async (id) => await animeQueries.deleteAnime(id)
dao.getYearsAnime = async() => await animeQueries.getYears()
dao.searchAnime = async(nombre)=>await animeQueries.searchAnime(nombre)
dao.addAnimePendiente = async(nombre) =>await animeQueries.addAnimePendiente(nombre)
dao.getAnimePendientes = async() =>await animeQueries.getAnimePendientes()
dao.getTopAnime = async() =>await animeQueries.getTopAnime()

//Series
dao.getSeries = async(id) => await seriesQueries.getSeries()
dao.getSeriesByYear = async(year) => await seriesQueries.getSeriesByYear(year)
dao.addSerie = async(serie) => await seriesQueries.addSerie(serie)
dao.updateSerie = async(id, serie) => await seriesQueries.updateSerie(id, serie)
dao.deleteSerieImage = async(id) => await seriesQueries.deleteSerieImage(id)
dao.deleteSerie = async(id) => await seriesQueries.deleteSerie(id)
dao.getYearsSerie = async() => await seriesQueries.getYears()
dao.searchSerie = async(nombre)=>await seriesQueries.searchSerie(nombre)
dao.addSeriePendiente = async(nombre) =>await seriesQueries.addSeriePendiente(nombre)
dao.getSeriesPendientes = async() =>await seriesQueries.getSeriesPendientes()
dao.getTopSeries = async() =>await seriesQueries.getTopSeries()


//Videojuegos
dao.getVideojuegos = async(id) => await videogamesQueries.getVideojuegos()
dao.getVideojuegosByYear = async (year) => await videogamesQueries.getVideojuegosByYear(year)
dao.addVideojuego = async(videojuego) => await videogamesQueries.addVideojuego(videojuego)
dao.updateVideojuego = async(id, videojuego) => await videogamesQueries.updateVideojuego(id, videojuego)
dao.deleteVideojuegoImage = async(id) => await videogamesQueries.deleteVideojuegoImage(id)
dao.deleteVideojuego = async(id) => await videogamesQueries.deleteVideojuego(id) 
dao.getYearsVideojuego = async() => await videogamesQueries.getYears()
dao.searchVideojuego = async(nombre)=>await videogamesQueries.searchVideojuego(nombre)
dao.addVideojuegoPendiente = async(nombre) =>await videogamesQueries.addVideojuegoPendiente(nombre)
dao.getVideojuegosPendientes = async() =>await videogamesQueries.getVideojuegosPendientes()
dao.getTopVideojuegos = async() =>await videogamesQueries.getTopVideojuegos()


//Peliculas
dao.getPeliculas = async(id) => await peliculasQueries.getPeliculas()
dao.getPeliculasByYear = async(year) => await peliculasQueries.getPeliculasByYear(year)
dao.addPelicula = async(pelicula) => await peliculasQueries.addPelicula(pelicula)
dao.updatePelicula = async(id, pelicula) => await peliculasQueries.updatePelicula(id, pelicula)
dao.deletePeliculaImage = async(id) => await peliculasQueries.deletePeliculaImage(id)
dao.deletePelicula = async (id) => await peliculasQueries.deletePelicula(id)
dao.getYearsPelicula = async() => await peliculasQueries.getYears()
dao.searchPelicula = async(nombre)=>await peliculasQueries.searchPelicula(nombre)
dao.addPeliculaPendiente = async(nombre) =>await peliculasQueries.addPeliculaPendiente(nombre)
dao.getPeliculasPendientes = async() =>await peliculasQueries.getPeliculasPendientes()
dao.getTopPeliculas = async() =>await peliculasQueries.getTopPeliculas()

//Eliminar pendiente que vale para todos
dao.deleteQuery = async(id) =>await deleteQuery.eliminarPendiente(id)

export default dao;