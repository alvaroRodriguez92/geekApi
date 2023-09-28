let querys = {};

//Consultas Anime
querys.getAnimes = "SELECT * FROM ANIME";
querys.addAnime = "INSERT INTO ANIME SET ?";
querys.updateAnime = "UPDATE ANIME SET ? WHERE ID = ?";
querys.deleteAnime = "DELETE FROM ANIME WHERE ID = ?";

//Consultas Series
querys.getSeries = "SELECT * FROM SERIES";
querys.addSerie = "INSERT INTO SERIES SET ?";
querys.updateSerie = "UPDATE SERIES SET ? WHERE ID = ?";
querys.deleteSerie = "DELETE FROM SERIES WHERE ID = ?";

//Consultas Videojuegos
querys.getVideogames = "SELECT * FROM VIDEOJUEGOS";
querys.addVideojuego = "INSERT INTO VIDEOJUEGOS SET ?";
querys.updateVideojuego = "UPDATE VIDEOJUEGOS SET ? WHERE ID = ?";
querys.deleteVideojuego = "DELETE FROM VIDEOJUEGOS WHERE ID = ?";

//Consultas Peliculas
querys.getPeliculas = "SELECT * FROM PELICULAS";
querys.addPelicula = "INSERT INTO PELICULAS SET ?";
querys.updatePelicula = "UPDATE PELICULAS SET ? WHERE ID = ?"; 
querys.deletePelicula = "DELETE FROM PELICULAS WHERE ID = ?";

export default querys;
