import dao from "../mysql/dao.mjs";
import moment from "moment";

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

//Endpoint para obtener videojuego según el año
videojuegosController.getVideojuegosByYear  = async (req, res) => {
  try {
    const { year } = req.params;

    const videojuegos = await dao.getVideojuegosByYear(year);

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
      fecha: moment().format(),
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
//Endpoint para modificar videojuego
videojuegosController.updateVideojuego = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, fecha, comentario, imagen, nota } = req.body;

    const updatedVideojuego = {
      id: id,
      nombre: nombre,
      fecha: fecha,
      comentario: comentario,
      imagen: imagen,
      nota: nota,
    };
    const data = await dao.updateVideojuego(id, updatedVideojuego);
    if (!data) {
      res.status(400).send("Error al modificar videojuego");
    }
    res.status(200).send("Videojuego modificado correctamente");
  } catch (e) {
    throw new Error(e);
  }
};

//Eliminar videojuego

videojuegosController.deleteVideojuego = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("No se ha encontrado el id del videojuego");
    }
    const data = await dao.deleteVideojuego(id);
    if (!data) {
      res.status(400).send("Error al eliminar videojuego");
    }
    res.status(200).send("Videojuego eliminado correctamente");
  } catch (e) {
    throw new Error(e);
  }
};

//Endpoint para obtener los años
videojuegosController.getYears = async (req, res) => {
  try {
    const data = await dao.getYearsVideojuego();

    if (!data) {
      res.status(400).send("Error al recibir los años");
    }
    const years = data.map((year) => {
      return year.años;
    });
    res.status(200).send(years);
  } catch (e) {
    throw new Error(e);
  }
};

export default videojuegosController;
