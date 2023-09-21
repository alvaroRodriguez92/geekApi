import { Button, Box } from "@mui/material";
import {Link} from "react-router-dom"

export default function Home() {


  //Llamada fetch con ${anime vivdeojuego o lo k sea que se lo pasará el boton}
  //fetch("blablabla/${videojuegos}")
  //seteamos en un estado la info que estará en el context y la mostramos en el main
  //el fetch también tiene que estar en el context

  return (
    <main className="main-home">
      <h1>Bievenido a la Geek Api</h1>
      
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
        flexDirection="column"
        gap={2}
        sx={{
          zIndex: "1",
        }}
      ><Link to="/main">
        <Button
          sx={{
            color: "antiquewhite",
            backgroundColor: "#ab5833",
            width: "300px",
            height: "50px",
            mr: 32,
            mb: 4,
          }}
          variant="contained"
        >
          Series
        </Button>
        </Link>
        <Link to="/main">
        <Button
          sx={{
            color: "antiquewhite",
            backgroundColor: "#ab5833",
            width: "300px",
            height: "50px",
            mr: 32,
            mb: 4,
          }}
          variant="contained"
        >
          Peliculas
        </Button>
        </Link>
        <Link to="/main">
        <Button
          sx={{
            color: "antiquewhite",
            backgroundColor: "#ab5833",
            width: "300px",
            height: "50px",
            mr: 32,
            mb: 4,
          }}
          variant="contained"
        >
          Anime
        </Button>
        </Link>

        <Link to="/main">
        <Button
          sx={{
            color: "antiquewhite",
            backgroundColor: "#ab5833",
            width: "300px",
            height: "50px",
            mr: 32,
            mb: 4,
          }}
          variant="contained"
        >
          Videojuegos
        </Button>
        </Link>

      </Box>

      <div className="video-container">
        <video autoPlay loop muted>
          <source src="../../src/assets/video-silla.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  );
}
