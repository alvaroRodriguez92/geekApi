import dao from "../mysql/dao.mjs";

const seriesController = {};

//GET todas las series
seriesController.getSeries = async (req, res) => {
    try{
        const series = await dao.getSeries();
        if (series.length > 0) {
            res.status(200).send(series);
        }
    } catch (e) {
        throw new Error(e); 
    }
};

//Añadir una serie

seriesController.addSerie = async (req, res) => {
    try{
        const { id,nombre, fecha, comentario, imagen, nota } = req.body;
        const newSerie = {
            id:id,
            nombre: nombre,
            fecha: fecha,
            comentario: comentario,
            imagen: imagen,
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

}

//Modificar serie
seriesController.updateSerie = async (req, res) =>{
    try{
        const {id} = req.params;
        const {nombre, fecha, comentario, imagen, nota} = req.body;
        const updatedSerie = {
            id:id,
            nombre: nombre,
            fecha: fecha,
            comentario: comentario,
            imagen:imagen,
            nota: nota
        }

        const data = await dao.updateSerie(id,updatedSerie);
        if(!data){
            res.status(400).send("Error al modificar serie");
        }

        res.status(200).send("Serie modificada correctamente");
    } catch (e) {
        throw new Error(e);
    }
    
}

//Eliminar serie

seriesController.deleteSerie = async (req, res) => {
    try{
        const { id } = req.params;
        if (!id) {
            res.status(400).send("No se ha encontrado el id de la serie")
        }
        const data = await dao.deleteSerie(id);
        if (!data) {
            res.status(400).send("Error al eliminar serie");
        }
        res.status(200).send("Serie eliminada correctamente");

    } catch (e) {
        throw new Error(e); 
    }

}

//Endpoint para obtener los años
seriesController.getYears = async (req, res) => {
    try {
  
      const data = await dao.getYearsSerie();
  
      if (!data) {
        res.status(400).send("Error al recibir los años");
      }
      res.status(200).send(data);
    } catch (e) {
      throw new Error(e);
    }
  };


export default seriesController;