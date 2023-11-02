import dao from "../mysql/dao.mjs";
import moment from "moment";
import path from "path"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
    const { id, nombre, comentario, nota } = req.body;
    let nombreImagen ="";

    if(req.files){
      const {imagen} = req.files;
      nombreImagen = imagen.name;
      let uploadPath = path.join(__dirname, "../public/uploadImages/"+imagen.name)
      await imagen.mv(uploadPath, err=>{
        if(err) return res.status(500).send(err)
      })
    }

    const newVideojuego = {
      id: id,
      nombre: nombre,
      fecha: moment().format(),
      comentario: comentario,
      imagen: nombreImagen,
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
