import { useEffect, useState } from "react";
import { OutlinedInput, Button, Grid, Box } from "@mui/material";
import Card from "../../components/Cards/Card";
import { useCardContext } from "../../Context/cardContext";
import {type Tops} from "../../types"

export default function Main() {
  const { info, años, tema, infoTema, setInfo } = useCardContext();
  const [busqueda, setBusqueda] = useState("");
  const [ruta, setRuta] = useState("");
  const [top, setTop] = useState<Tops|undefined>([{nombre:"", nota:""}]);

  const temaMayuscula = tema.charAt(0).toUpperCase() + tema.slice(1);

  useEffect(() => {
    infoTema(tema, años[años.length - 1]);
  }, [tema]);

  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setBusqueda(e.target.value);
  }
  useEffect(() => {
    async function fetchSearch() {
      const response = await fetch(`http://localhost:3000/${tema}/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: busqueda }),
      });
      const data = await response.json();
      setInfo(data);
    }
    fetchSearch();
  }, [busqueda]);

  useEffect(()=>{
    async function getTop(){
      const response = await fetch(`http://localhost:3000/${tema}/get/top`);
      const data = await response.json();
      setTop(data)
    }
    getTop()
  },[tema])
  


 useEffect(()=>{
  function seleccionarIcono(){
    if(tema=="series"){
      setRuta("../../src/assets/smarttv.png")
    } else if(tema=="anime"){
      setRuta("../../src/assets/sombrero.png")

    }else if(tema=="peliculas"){
      setRuta("../../src/assets/cine.png")
  }else if(tema=="videojuegos"){
    setRuta("../../src/assets/mando.png")
}
}
seleccionarIcono()
 },[tema])

  return (
    <main className="main-main">
      <Grid container>
        <Grid item xs={6} sx={{p:4}}>
          <Grid item sx={{display:"flex", alignItems:"center"}}><span className="h1-main">{temaMayuscula}</span><a href="/"><img className="title-image" src={ruta} width={"80px"} height={"80px"}/></a></Grid>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              p: 5,
              mt:5
            }}
          >
            {años?.map((año) => {
              return (
                <Grid item xs={1} sx={{mr:3 }}>
                  <Button
                    sx={{ backgroundColor: "#762727cc"}}
                    variant="contained"
                    onClick={() => infoTema(tema, año)}
                  >
                    {año}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={2} sx={{display:"flex", flexDirection:"column", p:6}}>
          <OutlinedInput
            value={busqueda}
            onChange={(e) => handleChange(e)}
            placeholder="Busca aqui..."
            sx={{boxShadow:"5px 2px 2px black;"}}
          />
        </Grid>
        <Grid item xs={3} sx={{display:"flex", flexDirection:"column", p:6, ml:20}}>
          <Box sx={{width:"70%", borderRadius:"20px",border:"1px solid #605d49", display:"flex", flexDirection:"column", alignItems:"center"}}>
          <h4>Mi top 5!</h4>
          <ul className="ul-top">
            {top?.map((item)=>{
              return(
                <li className="li-top"><img src="../src/assets/star.png" width={"32px"} height={"32px"}/>{item.nombre} <span className="span-top">{item.nota}</span></li> 
              )
            })}
            
          </ul>
          </Box>
        </Grid>
      </Grid>
      {info ? <Card info={info} /> : ""}
    </main>
  );
}
