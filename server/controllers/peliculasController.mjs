import dao from "../mysql/dao.mjs";
import moment from "moment";
import path from "path"
import { fileURLToPath } from 'url';

//__dirname no existe en ES Module, así que tenemos que replicarlo definiendo lo siguiente (tras importar path y fileURLToPath)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const peliculasController = {};

peliculasController.getPeliculas = async (req, res) => {

  //Logica y enlazamos con mysql a traves del DAO
  try {
    const peliculas = await dao.getPeliculas();
    if (peliculas.length > 0) {
      res.status(200).send(peliculas);
    }
  } catch (e) {
    throw new Error(e);
  }
};

//Endpoint para obtener peliculas según el año
peliculasController.getPeliculasByYear  = async (req, res) => {
  try {
    const { year } = req.params;

    const peliculas = await dao.getPeliculasByYear(year);

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
    const { id, nombre, comentario, nota } = req.body;
    let nombreImagen = "";
    if(req.files){
      const {imagen} = req.files;
      nombreImagen = imagen.name;
      let uploadPath = path.join(__dirname, "../public/uploadImages/"+imagen.name)
      await imagen.mv(uploadPath, err=>{
        if(err) return res.status(500).send(err)
      })
    }

    const newPelicula = {
      id: id,
      nombre: nombre,
      fecha: moment().format(),
      comentario: comentario,
      imagen: nombreImagen,
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

//Modificar pelicula
peliculasController.updatePelicula = async (req, res) => {
  const { id } = req.params;
  const { nombre, fecha, comentario, imagen, nota } = req.body;

  try {
    if (!id) {
      res
        .status(400)
        .send("Error al modificar la pelicula, falta el id o el req.body");
    }
    const updatedPelicula = {
      id: id,
      nombre: nombre,
      fecha: fecha,
      comentario: comentario,
      imagen: imagen,
      nota: nota,
    };

    const data = await dao.updatePelicula(id, updatedPelicula);

    if (!data) {
      res.status(400).send("Error al modificar la pelicula");
    }
    res.status(200).send("Modificación realizada en la película");
  } catch (e) {
    throw new Error(e);
  }
};

//Eliminar pelicula
peliculasController.deletePelicula = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("No se ha encontrado el id de la pelicula");
    }
    const data = await dao.deletePelicula(id);
    if (!data) {
      res.status(400).send("Error al eliminar pelicula");
    }
    res.status(200).send("Pelicula eliminada");
  } catch (e) {
    throw new Error(e);
  }
};

//Endpoint para obtener los años
peliculasController.getYears = async (req, res) => {
  try {
    const data = await dao.getYearsPelicula();

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

export default peliculasController;
