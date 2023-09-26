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
        const { nombre, fecha, comentario, imagen, nota } = req.body;
        const newSerie = {
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



export default seriesController;