import express from "express"
import animeRouter from "./routes/animeRouter.mjs"
import seriesRouter from "./routes/seriesRouter.mjs"
import videojuegosRouter from "./routes/videojuegosRouter.mjs"
import peliculasRouter from "./routes/peliculasRouter.mjs"
import logger from "morgan"
import dotenv from "dotenv"
import multer from "multer"
import cookieParser from "cookie-parser"
import path from "path"
import cors from "cors"
import expressFileUpload from "express-fileupload"





dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

//Middlewares 
// app.use(logger("dev")) //para que muestre las peticiones en consola
// app.use(express.json()) //para que entienda los json en las peticiones
// app.use(express.urlencoded({ extended: true })) //para parsear peticiones con URL

//copio del proyecto:
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  expressFileUpload({
    createParentPath: true,
    limits: { filesize: 20 * 1024 * 1024 },
    abortOnLimit: true,
    responseOnLimit: "Imagen demasiado grande",
    uploadTimeout: 0,
  })
);

//Testeando
app.get("/", (req, res) => {
    res.send("Server funcionando")
})

//Ruta seccion animes
app.use("/anime",animeRouter);
//Ruta seccion series
app.use("/series",seriesRouter);
//Ruta seccion videojuegos
app.use("/videojuegos",videojuegosRouter);
//Ruta seccion Peliculas
app.use("/peliculas",peliculasRouter);



app.listen(PORT, () => {
console.log(`escuchando en puertoooooo ${PORT}`)
})

