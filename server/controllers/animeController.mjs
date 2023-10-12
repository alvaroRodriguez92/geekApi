import dao from "../mysql/dao.mjs";
import moment from "moment";

const animeController = {};

//Endopoint para Get todos los animes
animeController.getAnimes = async (req, res) => {
  //Logica y enlazar con mysql
  try {
    const animes = await dao.getAnimes();
    if (animes.length > 0) {
      res.status(200).send(animes);
    }
  } catch (e) {
    console.log(e.message);
    throw new Error(e);
  }
};

//Endpoint para obtener anime según el año
animeController.getAnimeByYear = async (req, res) => {
  try {
    const { year } = req.params;

    const animes = await dao.getAnimesByYear(year);

    if (animes.length > 0) {
      res.status(200).send(animes);
    }
  } catch (e) {
    throw new Error(e);
  }
};

//Endpoint para añadir anime
animeController.addAnime = async (req, res) => {
  try {
    const { id, nombre, fecha, comentario, imagen, nota } = req.body;

    const newAnime = {
      id: id,
      nombre: nombre,
      fecha: moment().format(),
      comentario: comentario,
      imagen: imagen,
      nota: nota,
    };

    const data = await dao.addAnime(newAnime);

    if (!data) {
      res.status(400).send("Error al añadir anime");
    }

    res.status(200).send(newAnime);
  } catch (e) {
    throw new Error(e);
  }
};

// Endpoint para modificar un anime

animeController.updateAnime = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, fecha, comentario, imagen, nota } = req.body;

    const updatedAnime = {
      id: id,
      nombre: nombre,
      fecha: fecha,
      comentario: comentario,
      imagen: imagen,
      nota: nota,
    };
    const data = await dao.updateAnime(id, updatedAnime);

    if (!data || !id) {
      res.status(400).send("Error al modificar anime, faltan datos");
    }

    return res.status(200).send("Anime modificado correctamente");
  } catch (e) {
    throw new Error(e);
  }
};

//Endpoint para eliminar anime

animeController.deleteAnime = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("Necesita pasar el id por param");
    }
    const data = await dao.deleteAnime(id);

    if (!data) {
      res.status(400).send("Error al eliminar anime");
    }

    res.status(200).send("Anime eliminado correctamente");
  } catch (e) {
    throw new Error(e);
  }
};

//Endpoint para obtener los años
animeController.getYears = async (req, res) => {
  try {
    console.log("holla??")
    const data = await dao.getYearsAnime();

    if (!data) {
      res.status(400).send("Error al recibir los años");
    }
    console.log(data,"DATA????")
    const years =  data.map((year) => {
      return year.años;
    });
    console.log(years,"years??????")
    res.status(200).send(years);
  } catch (e) {
    throw new Error(e);
  }
};

export default animeController;
