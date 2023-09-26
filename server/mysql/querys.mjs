let querys = {};

//Consultas Anime
querys.getAnimes = "SELECT * FROM ANIME";
querys.addAnime = "INSERT INTO ANIME SET ?";

//Consultas Series
querys.getSeries = "SELECT * FROM SERIES";
querys.addSerie = "INSERT INTO SERIES SET ?";

//Consultas Videojuegos
querys.getVideogames = "SELECT * FROM VIDEOJUEGOS";
querys.addVideojuego = "INSERT INTO VIDEOJUEGOS SET ?";

//Consultas Peliculas
querys.getPeliculas = "SELECT * FROM PELICULAS";
querys.addPelicula = "INSERT INTO PELICULAS SET ?";

export default querys;
