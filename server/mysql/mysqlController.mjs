import db from "./mysqlConn.mjs";
import querys from "./querys.mjs";
import utils from "../utils/utils.mjs";

//***************
//ANIMES*********
//***************
let animeQueries = {};

//Query para obtener todos los animes
animeQueries.getAnimes = async (id) => {
  console.log("entrando");
  let conn = null;
  try {
    conn = await db.createConnection();
    //db.query recibe la sqlquery, los params, type, y la conexion
    return await db.query(querys.getAnimes, id, "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end()); //si existe la conexion se cierra
  }
};

//Query para añadir un anime

animeQueries.addAnime = async (newAnime) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    const anime = {
      id: newAnime.id,
      nombre: newAnime.nombre,
      fecha: newAnime.fecha,
      comentario: newAnime.comentario,
      imagen: newAnime.imagen,
      nota: newAnime.nota,
    };

    //db.query recibirá la sql query, params, type y la conexion
    return await db.query(querys.addAnime, anime, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end()); //si existe la conexion se cierra
  }
};

//Editar anime
animeQueries.updateAnime = async (id, newData) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    let update = {
      id: newData.id,
      nombre: newData.nombre,
      fecha: newData.fecha,
      comentario: newData.comentario,
      imagen: newData.imagen,
      nota: newData.nota,
    };

    await utils.removeUndefinedKeys(update);

    return await db.query(querys.updateAnime, [update, id], "update", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

//Borrar un anime
animeQueries.deleteAnime = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(querys.deleteAnime, id, "delete", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  } //si existe la conexion se cierra
};

//***************
//VIDEOJUEGOS****
//***************
let videogamesQueries = {};

//Get videojuegos
videogamesQueries.getVideojuegos = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    //db.query recibe la sqlquery, los params, type, y la conexion
    return await db.query(querys.getVideogames, id, "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end()); //si existe la conexion se cierra
  }
};

//Añadir videojuegos
videogamesQueries.addVideojuego = async (newVideojuego) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    const videojuego = {
      id: newVideojuego.id,
      nombre: newVideojuego.nombre,
      fecha: newVideojuego.fecha,
      comentario: newVideojuego.comentario,
      imagen: newVideojuego.imagen,
      nota: newVideojuego.nota,
    };
    return await db.query(querys.addVideojuego, videojuego, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end()); //Si existe la conexión se cierra
  }
};

//Editar videojuego
videogamesQueries.updateVideojuego = async (id, newData) => {
  let conn = null;

  try {
    conn = await db.createConnection();
    let update = {
      id: newData.id,
      nombre: newData.nombre,
      fecha: newData.fecha,
      comentario: newData.comentario,
      imagen: newData.imagen,
    };

    await utils.removeUndefinedKeys(update);

    return await db.query(
      querys.updateVideojuego,
      [update, id],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

//Eliminar videojuego

videogamesQueries.deleteVideojuego = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(querys.deleteVideojuego, id, "delete", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

//***************
//SERIES*********
//***************
let seriesQueries = {};

//GET de todas las series
seriesQueries.getSeries = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    //db.query recibe la sqlquery, los params, type, y la conexion
    return await db.query(querys.getSeries, id, "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end()); //si existe la conexion se cierra
  }
};

//Añadir serie

seriesQueries.addSerie = async (newSerie) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    const serie = {
      id: newSerie.id,
      nombre: newSerie.nombre,
      fecha: newSerie.fecha,
      comentario: newSerie.comentario,
      imagen: newSerie.imagen,
      nota: newSerie.nota,
    };
    return await db.query(querys.addSerie, serie, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end()); //Si existe la conexión se cierra
  }
};

//Editar serie

seriesQueries.updateSerie = async (id, newData) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    let update = {
      id: newData.id,
      nombre: newData.nombre,
      fecha: newData.fecha,
      comentario: newData.comentario,
      comentario: newData.comentario,
      imagen: newData.imagen,
    };

    await utils.removeUndefinedKeys(update);

    return await db.query(querys.updateSerie, [update, id], "update", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

//Eliminar serie

seriesQueries.deleteSerie = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(querys.deleteSerie, id, "delete", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

//***************
//PELICULAS******
//***************
let peliculasQueries = {};

//GET de todas las peliculas
peliculasQueries.getPeliculas = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    //db.query recibe la sqlquery, los params, type, y la conexion
    return await db.query(querys.getPeliculas, id, "select", conn);
  } catch (e) {
    throw new Error(e);
  }
};

//Añadir pelicula
peliculasQueries.addPelicula = async (newPelicula) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    const pelicula = {
      id: newPelicula.id,
      nombre: newPelicula.nombre,
      fecha: newPelicula.fecha,
      comentario: newPelicula.comentario,
      imagen: newPelicula.imagen,
      nota: newPelicula.nota,
    };
    return await db.query(querys.addPelicula, pelicula, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end()); //Si existe la conexión se cierra
  }
};

//Modificar pelicula
peliculasQueries.updatePelicula = async (id, newData) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    let update = {
      id: newData.id,
      nombre: newData.nombre,
      fecha: newData.fecha,
      comentario: newData.comentario,
      imagen: newData.imagen,
    };

    await utils.removeUndefinedKeys(update);

    return await db.query(querys.updatePelicula, [update, id], "update", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

//Eliminar pelicula
peliculasQueries.deletePelicula = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(querys.deletePelicula, id, "delete", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end()); //Si existe la conexión se cierra
  }
};

//Exportamos todas las funciones (no olvidar desestructurar al importar)
export default {
  animeQueries,
  videogamesQueries,
  seriesQueries,
  peliculasQueries,
};
