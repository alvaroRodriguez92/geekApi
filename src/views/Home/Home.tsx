import {useEffect} from "react"
import { Button, Box } from "@mui/material";
import {Link} from "react-router-dom"
import { useCardContext } from "../../Context/cardContext";

export default function Home() {

  const temas: string[] = ["series", "anime","peliculas", "videojuegos"]

  const {infoAños} = useCardContext()

  // useEffect(()=>{
  //   infoAños("series")
  //   console.log(años, "me ejecuto")
  // },[])

  return (
    <main className="main-home">
      <h1>Bienvenido a la Geek Api</h1>
      
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
      >
        {temas.map((tema:string)=>{
          
          return(
            <Link key={`${tema}`} to="/main">
        <Button
          sx={{
            color: "antiquewhite",
            backgroundColor: "#ab5833",
            width: "300px",
            height: "50px",
            mr: 32,
            mb: 4,
            border:"2px solid black",
            borderRadius:"5px"
          }}
          variant="contained"
          onClick={()=>infoAños(tema)}
        >
          {tema}
        </Button>
        </Link>
          )
        })}
        
        

      </Box>

      <div className="video-container">
        <video autoPlay loop muted>
          <source src="../../src/assets/video-silla.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  );
}
