import { Grid, Typography, Box } from "@mui/material";
import Moment from "react-moment";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import { type Info } from "../../types";

export default function CardPlegada({ info }: { info: Info }) {

  function elegirColor(nota:string|undefined){
    if(nota!==undefined){
    const notaDecimal = Number.parseFloat(nota)
    if(notaDecimal<6){
      return "#ff1b1b"
    } else if(notaDecimal<8&&notaDecimal>=6){
      return "yellow"
    } else if(notaDecimal>=8){
      return "#15e315"
    
    }
    }
    
  }
  return (
    <Grid container sx={{display:"flex",flexDirection:"row"}}>
      {info?.map((item) => {
        return (
          <Grid item lg={12} md={12} xs={12} xl={6} sx={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <Grid
            key={item.id}
            container
            sx={{
              m: 1,
              p: 2,
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
              alignContent: "center",
              justifyContent: "center",
              width: "632px",
              height: "40px",
              backgroundColor: "#BC8648",
              color: "#efefef",
              border: "2px solid black",
              borderRadius: "20px",
            }}
          >
            <Grid item xs={6}>
              <Typography variant="h6" fontSize={"16px"}>
                {item.nombre}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6" fontSize={"16px"}>
                <Moment date={item.fecha} format="DD/MM/YYYY" />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6" fontSize={"16px"} color={elegirColor(item.nota)}>
                {item.nota ? item.nota : "-"}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <ExpandCircleDownRoundedIcon />
            </Grid>
          </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
