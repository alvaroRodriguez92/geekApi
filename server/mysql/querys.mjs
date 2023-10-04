let querys = {};

//Consultas Anime
querys.getAnimes = "SELECT * FROM ANIME";
querys.addAnime = "INSERT INTO ANIME SET ?";
querys.updateAnime = "UPDATE ANIME SET ? WHERE ID = ?";
querys.deleteAnime = "DELETE FROM ANIME WHERE ID = ?";
querys.getYearsAnime = "select distinct substring(fecha,1,4) as años from anime ORDER BY años";
querys.getAnimeByYear = "select * from anime where fecha like ?";




//Consultas Series
querys.getSeries = "SELECT * FROM SERIES";
querys.addSerie = "INSERT INTO SERIES SET ?";
querys.updateSerie = "UPDATE SERIES SET ? WHERE ID = ?";
querys.deleteSerie = "DELETE FROM SERIES WHERE ID = ?";
querys.getYearsSerie = "select distinct substring(fecha,1,4) as años from series ORDER BY años";
querys.getSeriesByYear = "select * from series where fecha like ?" 


//Consultas Videojuegos
querys.getVideogames = "SELECT * FROM VIDEOJUEGOS";
querys.addVideojuego = "INSERT INTO VIDEOJUEGOS SET ?";
querys.updateVideojuego = "UPDATE VIDEOJUEGOS SET ? WHERE ID = ?";
querys.deleteVideojuego = "DELETE FROM VIDEOJUEGOS WHERE ID = ?";
querys.getYearsVideojuego = "select distinct substring(fecha,1,4) as años from videojuegos ORDER BY años";
querys.getVideojuegosByYear = "select * from videojuegos where fecha like ?" 


//Consultas Peliculas
querys.getPeliculas = "SELECT * FROM PELICULAS";
querys.addPelicula = "INSERT INTO PELICULAS SET ?";
querys.updatePelicula = "UPDATE PELICULAS SET ? WHERE ID = ?"; 
querys.deletePelicula = "DELETE FROM PELICULAS WHERE ID = ?";
querys.getYearsPelicula = "select distinct substring(fecha,1,4) as años from peliculas ORDER BY años";
querys.getPeliculasByYear = "select * from peliculas where fecha like ?" 



export default querys;
