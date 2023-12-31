import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

let db = {};

db.createConnection = async () => {
  return new Promise((resolve, reject) => {
    try {
      const mysqlConnection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
      });
      mysqlConnection.connect(async function (err) {
        if (err) {
          reject(err);
        }
        resolve(mysqlConnection);
      });
    } catch (err) {
      reject(err);
    }
  });
};

db.query =  async (sqlQuery, params, type, conn) => {
  return  new Promise((resolve, reject) => {
    try {
      conn.query(sqlQuery, params, async (err, result) => {
        // console.log(sqlQuery, params,"VAMO A VE")
        if (!err) {
           switch (type) {
            case "select":
              resolve(JSON.parse(JSON.stringify(result)));
              break;
            case "insert":
              resolve(parseInt(result.insertId));
              break;
            case "update":
            case "replace":
            case "delete":
              resolve(true);
              break;
            default:
              throw new Error("Query type not match");
          }
        } else {
          console.log("Query or database error: ", err);
          reject(new Error(err.message));
        }
      });
    } catch (error) {
      reject(new Error(error.message));
    }
  });
};

export default db;



