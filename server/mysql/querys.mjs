let querys = {};

//Consultas Anime
querys.getAnimes = "SELECT * FROM ANIME";
querys.addAnime = "INSERT INTO ANIME SET ?";
querys.updateAnime = "UPDATE ANIME SET ? WHERE ID = ?";
querys.deleteAnime = "DELETE FROM ANIME WHERE ID = ?";
querys.getYearsAnime = "select distinct substring(fecha,1,4) as años from anime ORDER BY años";
querys.getAnimeByYear = "select * from anime where fecha like ?";
querys.deleteAnimeImage= 'update anime set imagen=null where id=?'
querys.searchAnime = "select * from anime where nombre like ?"
querys.addPendienteAnime = "insert into pendientes (anime) values (?)"
querys.getPendientesAnime = "select id, anime from pendientes where anime is not null"
querys.getTopAnime = "select * from anime order by nota desc limit 5"



//Consultas Series
querys.getSeries = "SELECT * FROM SERIES";
querys.addSerie = "INSERT INTO SERIES SET ?";
querys.updateSerie = "UPDATE SERIES SET ? WHERE ID = ?";
querys.deleteSerie = "DELETE FROM SERIES WHERE ID = ?";
querys.getYearsSerie = "select distinct substring(fecha,1,4) as años from series ORDER BY años";
querys.getSeriesByYear = "select * from series where fecha like ?" 
querys.deleteSerieImage= 'update series set imagen=null where id=?'
querys.searchSerie = "select * from series where nombre like ?"
querys.addPendienteSerie = "insert into pendientes (series) values (?)"
querys.getPendientesSeries = "select id,series from pendientes where series is not null"
querys.getTopSeries = "select * from series order by nota desc limit 5"


//Consultas Videojuegos
querys.getVideogames = "SELECT * FROM VIDEOJUEGOS";
querys.addVideojuego = "INSERT INTO VIDEOJUEGOS SET ?";
querys.updateVideojuego = "UPDATE VIDEOJUEGOS SET ? WHERE ID = ?";
querys.deleteVideojuego = "DELETE FROM VIDEOJUEGOS WHERE ID = ?";
querys.getYearsVideojuego = "select distinct substring(fecha,1,4) as años from videojuegos ORDER BY años";
querys.getVideojuegosByYear = "select * from videojuegos where fecha like ?" 
querys.deleteVideojuegoImage= 'update videojuegos set imagen=null where id=?'
querys.searchVideojuego = "select * from videojuegos where nombre like ?"
querys.addPendienteVideojuego= "insert into pendientes (videojuegos) values (?)"
querys.getPendientesVideojuegos = "select id,videojuegos from pendientes where videojuegos is not null"
querys.getTopVideojuegos = "select * from videojuegos order by nota desc limit 5"


//Consultas Peliculas
querys.getPeliculas = "SELECT * FROM PELICULAS";
querys.addPelicula = "INSERT INTO PELICULAS SET ?";
querys.updatePelicula = "UPDATE PELICULAS SET ? WHERE ID = ?"; 
querys.deletePelicula = "DELETE FROM PELICULAS WHERE ID = ?";
querys.getYearsPelicula = "select distinct substring(fecha,1,4) as años from peliculas ORDER BY años";
querys.getPeliculasByYear = "select * from peliculas where fecha like ?" 
querys.deletePeliculaImage= 'update peliculas set imagen=null where id=?'
querys.searchPelicula = "select * from peliculas where nombre like ?"
querys.addPendientePelicula = "insert into pendientes (peliculas) values (?)"
querys.getPendientesPeliculas = "select id,peliculas from pendientes where peliculas is not null"
querys.getTopPeliculas = "select * from peliculas order by nota desc limit 5"

//Esta query vale para todos
querys.eliminarPendiente="delete from pendientes where id=?"

export default querys;
