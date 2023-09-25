import dao from "../mysql/dao.mjs"

const peliculasController = {};

peliculasController.getPeliculas = async (req,res) => {
    //Logica y enlazamos con mysql a travles del DAO
  try {
    const peliculas = await dao.getPeliculas();
    if (peliculas.length > 0) {
        res.status(200).send(peliculas);
    }
  } catch (e) {
    throw new Error(e);
  }
};

export default peliculasController;
