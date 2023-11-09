import dao from "../mysql/dao.mjs";
import moment from "moment";
import path from "path"
import { fileURLToPath } from 'url';

//__dirname no existe en ES Module, así que tenemos que replicarlo definiendo lo siguiente (tras importar path y fileURLToPath)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seriesController = {};

//GET todas las series
seriesController.getSeries = async (req, res) => {
  try {
    const series = await dao.getSeries();
    if (series.length > 0) {
      res.status(200).send(series);
    }
  } catch (e) {
    throw new Error(e);
  }
};

//Endpoint para obtener series según el año
seriesController.getSeriesByYear  = async (req, res) => {
  try {
    const { year } = req.params;

    const series = await dao.getSeriesByYear(year);

    if (series.length > 0) {
      res.status(200).send(series);
    }
  } catch (e) {
    throw new Error(e);
  }
};

//Añadir una serie

seriesController.addSerie = async (req, res) => {
  try {
    let nombreImagen ="";

    const { id, nombre, comentario, nota } = req.body;
    if(req.files){
      const {imagen} = req.files
      nombreImagen = imagen.name;
      let uploadPath = path.join(__dirname, "../public/uploadImages/"+imagen.name )
      await imagen.mv(uploadPath, err=>{
        if(err) return res.status(500).send(err)
      })
    }

    const newSerie = {
      id: id,
      nombre: nombre,
      fecha: moment().format(),
      comentario: comentario,
      imagen: nombreImagen,
      nota: nota,
    };
    const data = await dao.addSerie(newSerie);
    if (!data) {
      res.status(400).send("Error al añadir serie");
    }
    res.status(201).send(newSerie);
  } catch (e) {
    throw new Error(e);
  }
};

//Modificar serie
seriesController.updateSerie = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, comentario, nota } = req.body;
    let nombreImagen ="";
    if(req.files){
      const {imagen} = req.files;
      nombreImagen = imagen.name;
      let uploadPath = path.join(__dirname,"../public/uploadImages/"+nombreImagen)
      await imagen.mv(uploadPath, err=>{
        if(err) return res.status(500).send(err)
       })
    }
    const updatedSerie = {
      id: id,
      nombre: nombre,
      comentario: comentario,
      imagen: nombreImagen,
      nota: nota,
    };

    const data = await dao.updateSerie(id, updatedSerie);
    if (!data) {
      res.status(400).send("Error al modificar serie");
    }

    res.status(200).send("Serie modificada correctamente");
  } catch (e) {
    throw new Error(e);
  }
};

//Endpoint para eliminar imagen
seriesController.deleteSerieImage = async(req, res)=>{
  try{
    const {id} = req.params
    if(!id){
      res.status(404).send("Id no encontrada")
    }
    
    const data = await dao.deleteSerieImage(id)
    if(!data){
      res.status(400).send("Error al eliminar la imagen")
    }
    return res.status(200).send("Imagen eliminada")
  } catch(e){
    throw new Error(e)
  }
}

//Eliminar serie

seriesController.deleteSerie = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("No se ha encontrado el id de la serie");
    }
    const data = await dao.deleteSerie(id);
    if (!data) {
      res.status(400).send("Error al eliminar serie");
    }
    res.status(200).send("Serie eliminada correctamente");
  } catch (e) {
    throw new Error(e);
  }
};

//Endpoint para obtener los años
seriesController.getYears = async (req, res) => {
  try {
    const data = await dao.getYearsSerie();

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

//Endpoint para buscar serie
seriesController.searchSerie = async (req,res)=>{
  try{
    const {nombre} = req.body

    const serie= await dao.searchSerie(nombre)
    if(!serie){
      return res.status(404).send("Serie no encontrado")
    }
    return res.status(200).send(serie)

  } catch(e){
    throw new Error(e)
  }
}

//Endpoint para añadir pendiente
seriesController.addSeriePendiente = async(req, res)=>{
  console.log(req.body)
  try{
    const {nombre} = req.body
    if(!nombre) res.status(404).send("No se ha recibido el nombre")

    const data = await dao.addSeriePendiente(nombre)
    if(!data) return res.status(400).send("Error al añadir la serie")
    if(data) {
      const newPendientes = await dao.getSeriesPendientes()
      return res.status(200).send(newPendientes)
    }
  } catch(e){
    throw new Error (e)
  }
}

//Endpoint para conseguir los pendientes
seriesController.getSeriesPendientes = async (req, res) =>{
  
  try{
    const data = await dao.getSeriesPendientes()
    if(data) return res.status(200).send(data)

  } catch(e){
    throw new Error(e)
  }
}

//Endpoint para eliminar pendiente
seriesController.deletePendiente = async (req,res) =>{
  try{
    const {id} = req.params;
    if(!id) return res.sendStatus(400).send("No se ha encontrado el id")
    const data = await dao.deleteQuery(id)
    if(data) {
      const newPendientes = await dao.getSeriesPendientes()
      return res.status(200).send(newPendientes)
    }

  } catch(e){
    throw new Error(e)
  }
}

//Endpoint para conseguir el top 5
seriesController.getTopSeries = async (req, res) => {
  try {
    const data = await dao.getTopSeries();
    if (data) return res.status(200).send(data);
  } catch (e) {
    throw new Error(e);
  }
};

export default seriesController;
