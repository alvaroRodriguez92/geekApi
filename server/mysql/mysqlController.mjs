import db from "./mysqlConn.mjs";
import querys from "./querys.mjs";

//ANIME
let animeQueries = {};

animeQueries.getAnimes = async (id) => {
  console.log("entrando")
  let conn = null;
  try {
    conn = await db.createConnection();
    //db.query recibe la sqlquery, los params, type, y la conexion
    return await db.query(querys.getAnimes, id, "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally{
    conn &&  await conn.end(); //si existe la conexion se cierra
  }
};

//VIDEOJUEGOS
let videogamesQueries = {};

//SERIES
let seriesQueries = {};

//PELICULAS
let peliculasQueries = {};

export default {
  animeQueries,
  videogamesQueries,
  seriesQueries,
  peliculasQueries,
};
