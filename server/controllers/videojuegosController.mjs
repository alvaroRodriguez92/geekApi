import dao from "../mysql/dao.mjs";

const videojuegosController = {};

videojuegosController.getVideojuegos = async(req, res) => {
    try{
        const videojuegos = await dao.getVideojuegos();
        if(videojuegos.length > 0){
            res.status(200).send(videojuegos);
        }
    }catch (e) {
        throw new Error(e);
    }
    
}


export default videojuegosController;

