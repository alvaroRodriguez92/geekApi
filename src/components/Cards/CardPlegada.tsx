import { Grid } from "@mui/material";
import Moment from "react-moment";
import {  DespliegueProps } from "../../types";
// import { SetDespliegueProp } from "./Card";
import { motion } from "framer-motion";

export default function CardPlegada({
  item,
  desplegar,
  despliegue,
}: DespliegueProps) {
  function elegirColor(nota: string | undefined) {
    if (nota !== undefined) {
      const notaDecimal = Number.parseFloat(nota);
      if (notaDecimal < 6) {
        return "#ff1b1b";
      } else if (notaDecimal < 8 && notaDecimal >= 6) {
        return "#dddd5a";
      } else if (notaDecimal >= 8) {
        return "#62ad62";
      }
    }
  }

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => desplegar(despliegue, item.id)}

    >
      <Grid
        container
        sx={{
          m: 1,
          pt: 2,
          pb:2,
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          alignContent: "center",
          justifyContent: "start",
          width: "560px",
          height: "24px",
          backgroundColor: "#3c3a37",
          color: "#efefef",
          border: "2px solid black",
          borderRadius: "20px",
        }}
      >
        <Grid item xs={6} sx={{height:"24px"}}>
          <motion.h6 layout="position" className="tamaño-h6"> {item.nombre}</motion.h6>
        </Grid>
        <Grid item xs={3}>
          <motion.h6 layout="position" className="tamaño-h6">
            <Moment date={item.fecha} format="DD/MM/YYYY" />
          </motion.h6>
        </Grid>
        <Grid item xs={2}>
          <motion.h6 layout="position" className="tamaño-h6" style={{color: elegirColor(item.nota)}}>
            {item.nota ? item.nota : "-"}
          </motion.h6>
        </Grid>
      </Grid>
    </motion.div>
  );
}
