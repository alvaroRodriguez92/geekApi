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
  console.log(req.body,"reqbodyy")
  const { nombre, comentario, nota } = req.body;
  let nombreImagen="";
  if(req.files){
    const {imagen} = req.files;
    nombreImagen = imagen.name;
    let uploadPath = path.join(__dirname, "../public/uploadImages/"+imagen.name)
    await imagen.mv(uploadPath, err=>{
      if(err) return res.status(500).send(err)
    })
  } 
  try {
    if (!id) {
      res
        .status(400)
        .send("Error al modificar la pelicula, falta el id o el req.body");
    }
    const updatedPelicula = {
      id: id,
      nombre: nombre,
      comentario: comentario,
      imagen: nombreImagen,
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

//Endpoint para eliminar imagen
peliculasController.deletePeliculaImage = async(req, res)=>{
  try{
    const {id} = req.params
    if(!id){
      res.status(404).send("Id no encontrada")
    }
    
    const data = await dao.deletePeliculaImage(id)
    if(!data){
      res.status(400).send("Error al eliminar la imagen")
    }
    return res.status(200).send("Imagen eliminada")
  } catch(e){
    throw new Error(e)
  }
}

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

//Endpoint para buscar pelicula
peliculasController.searchPelicula = async (req,res)=>{
  console.log(req.body,"???xd")
  try{
    const {nombre} = req.body
    const pelicula= await dao.searchPelicula(nombre)
    if(!pelicula){
      return res.status(404).send("Pelicula no encontrado")
    }
    return res.status(200).send(pelicula)

  } catch(e){
    throw new Error(e)
  }
}

//Endpoint para añadir pendiente
peliculasController.addPeliculaPendiente = async(req, res)=>{
  try{
    const {nombre} = req.body
    if(!nombre) res.status(404).send("No se ha recibido el nombre")

    const data = await dao.addPeliculaPendiente(nombre)
    if(!data) return res.status(400).send("Error al añadir la pelicula")
    if(data) {
      const newPendientes = await dao.getPeliculasPendientes()
      return res.status(200).send(newPendientes)
    }
  } catch(e){
    throw new Error (e)
  }
}

//Endpoint para conseguir los pendientes
peliculasController.getPeliculasPendientes = async (req, res) =>{
  
  try{
    const data = await dao.getPeliculasPendientes()
    if(data) return res.status(200).send(data)

  } catch(e){
    throw new Error(e)
  }
}

//Endpoint para eliminar pendiente
peliculasController.deletePendiente = async (req,res) =>{
  try{
    const {id} = req.params;
    if(!id) return res.sendStatus(400).send("No se ha encontrado el id")
    const data = await dao.deleteQuery(id)
    if(data) {
      const newPendientes = await dao.getPeliculasPendientes()
      return res.status(200).send(newPendientes)
    }

  } catch(e){
    throw new Error(e)
  }
}

//Endpoint para conseguir el top 5
peliculasController.getTopPeliculas = async (req, res) => {
  try {
    const data = await dao.getTopPeliculas();
    if (data) return res.status(200).send(data);
  } catch (e) {
    throw new Error(e);
  }
};

export default peliculasController;
