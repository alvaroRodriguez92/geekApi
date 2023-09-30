import { Grid, Typography,Box } from "@mui/material";
import Moment from "react-moment";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';

export default function CardPlegada({info}) {

console.log(info)
  return (
    <Box sx={{width:"100%"}}>
{info.map((item) => {
  return(
    <Grid
      container
      sx={{
        m: 2,
        p:2,
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        alignContent: "center",
        justifyContent: "center",
        width: "632px",
        height: "40px",
        backgroundColor: "#ab5833",
        color:"#efefef",
        border: "2px solid black",
        borderRadius:"20px"
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
        <Typography variant="h6" fontSize={"16px"}>
          {item.nota?(item.nota):("-")}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <ExpandCircleDownRoundedIcon/>
      </Grid>
    </Grid>
  )
})}
    
    </Box>
  );
}
