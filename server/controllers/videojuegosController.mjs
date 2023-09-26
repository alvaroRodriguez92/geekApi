import dao from "../mysql/dao.mjs";

const videojuegosController = {};

//Endpoint para el get de todos los videojuegos
videojuegosController.getVideojuegos = async (req, res) => {
  try {
    const videojuegos = await dao.getVideojuegos();
    if (videojuegos.length > 0) {
      res.status(200).send(videojuegos);
    }
  } catch (e) {
    throw new Error(e);
  }
};

//Endpoint para añadir un videojuego
videojuegosController.addVideojuego = async (req, res) => {
  try {
    const { id, nombre, fecha, comentario, imagen, nota } = req.body;

    const newVideojuego = {
      id: id,
      nombre: nombre,
      fecha: fecha,
      comentario: comentario,
      imagen: imagen,
      nota: nota,
    };
    
    const data = await dao.addVideojuego(newVideojuego);
    if (!data) {
      res.status(400).send("Error al añadir videojuego");
    }
    res.status(200).send(newVideojuego);
  } catch (e) {
    throw new Error(e);
  }
};

export default videojuegosController;
