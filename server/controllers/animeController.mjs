import dao from "../mysql/dao.mjs";

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

//Endpoint para añadir anime
animeController.addAnime = async (req, res) => {
  try {
    const { id, nombre, fecha, comentario, imagen, nota } = req.body;

    const newAnime = {
      id: id,
      nombre: nombre,
      fecha: fecha,
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

export default animeController;
