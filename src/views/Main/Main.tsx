import {useEffect} from "react";
import { OutlinedInput, Button,Grid,Box } from "@mui/material";
import Card from "../../components/Cards/Card";
import { useCardContext } from "../../Context/cardContext";

export default function Main() {
  const { info,años,tema,infoTema } = useCardContext();

  console.log(info,"INFOOOO")

  useEffect(()=>{
    infoTema(tema,años[años.length-1])
    console.log("me ejecuto el useeffect")
  },[tema])
  
  return (
    <main className="main-main">
      <h1>{tema}</h1>
      <OutlinedInput placeholder="Busca aqui..." />
      <Grid container sx={{display:"flex",flexDirection:"row", justifyContent:"center",p:5}}>
      {años?.map((año)=>{
        return(
          <Grid item xs={1}>
          <Button  sx={{backgroundColor:"#000000"}} variant="contained" onClick={()=>infoTema(tema,año)}>{año}</Button>
          </Grid>
        )
      })}
      </Grid>
      {info?(<Card info={info} />):("")}
    </main>
  );
}
