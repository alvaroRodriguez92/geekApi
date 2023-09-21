import dao from "../mysql/dao.mjs";

const animeController = {};

animeController.getAnimes = async (req, res) => {
  //Logica y enlazar con mysql
  try {
    const animes = await dao.getAnimes();
    if (animes.length > 0) {
      res.status(200).send(animes);
    }
  } catch (e) {
    console.log(e.message)
    throw new Error(e)
  }
};

export default animeController;
