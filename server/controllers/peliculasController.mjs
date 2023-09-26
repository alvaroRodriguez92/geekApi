import dao from "../mysql/dao.mjs";

const peliculasController = {};

peliculasController.getPeliculas = async (req, res) => {
  //Logica y enlazamos con mysql a travles del DAO
  try {
    const peliculas = await dao.getPeliculas();
    if (peliculas.length > 0) {
      res.status(200).send(peliculas);
    }
  } catch (e) {
    throw new Error(e);
  }
};

//Añadir pelicula

peliculasController.addPelicula = async (req, res) => {
  try {
    const { id, nombre, fecha, comentario, imagen, nota } = req.body;
    const newPelicula = {
      id: id,
      nombre: nombre,
      fecha: fecha,
      comentario: comentario,
      imagen: imagen,
      nota: nota,
    };
    const data = await dao.addPelicula(newPelicula);
    if (!data) {
      res.status(400).send("Error al añadir pelicula");
    }
    res.status(200).send(newPelicula);
  } catch (e) {
    throw new Error(e);
  }
};

export default peliculasController;
