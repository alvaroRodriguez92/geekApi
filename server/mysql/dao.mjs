import mysqlController from "./mysqlController.mjs";

const {animeQueries} = mysqlController

const dao = {}

dao.getAnimes = async (id) => await animeQueries.getAnimes()


export default dao;