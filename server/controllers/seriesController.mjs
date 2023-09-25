import dao from "../mysql/dao.mjs";

const seriesController = {};

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


export default seriesController;