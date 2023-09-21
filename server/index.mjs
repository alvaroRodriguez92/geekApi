import express from "express"
import animeRouter from "./routes/animeRouter.mjs"
import logger from "morgan"
import dotenv from "dotenv"


dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

//Middlewares 
app.use(logger("dev")) //para que muestre las peticiones en consola
app.use(express.json()) //para que entienda los json en las peticiones
app.use(express.urlencoded({ extended: false })) //para parsear peticiones con URL

//Testeando
app.get("/", (req, res) => {
    res.send("Server funcionando")
})

//Ruta seccion animes
app.use("/anime",animeRouter)


app.listen(PORT, () => {
console.log(`escuchando en puertoooooo ${PORT}`)
})
