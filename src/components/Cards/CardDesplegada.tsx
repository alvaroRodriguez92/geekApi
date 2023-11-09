import { Grid, Typography, } from "@mui/material";
import { DesplieguePropsEdit } from "../../types";
import Moment from "react-moment";
import { motion } from "framer-motion";
import ToogleButton from "./ToogleButton";

export default function CardDesplegada({
  item,
  desplegar,
  despliegue,
  edit,
  isEditing
}: DesplieguePropsEdit) {
  
  function elegirColor(nota: number | undefined) {
    if (nota !== undefined) {
      const notaDecimal = nota;
      if (notaDecimal < 6) {
        return "#b53f3f";
      } else if (notaDecimal < 8 && notaDecimal >= 6) {
        return "#dddd5a";
      } else if (notaDecimal >= 8) {
        return "#62ad62";
      }
    }
  }
  
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Grid
        container
        sx={{
          m: 1,
          p: 2,
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          alignContent: "center",
          justifyContent: "center",
          width: "560px",
          height: "328px",
          background:
            "linear-gradient(138deg, rgba(129,126,121,1) 0%, rgba(60,58,55,1) 35%, rgba(24,23,21,1) 100%)",
          color: "#efefef",
          border: "2px solid black",
          borderRadius: "20px",
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            alignItems: "center",
          }}
          onClick={() => desplegar(despliegue, item.id)}
        >
          <Grid item xs={12} sx={{ width: "100%", maxHeight: "80px", userSelect:"none" }}>
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              layout="size"
            >
              {item.nombre}
            </motion.h2>
          </Grid>
          <Grid item xs={12}>
            {item.imagen ? (
              <img
                className="imagen-card"
                src={`http://localhost:3000/uploadImages/${item.imagen}`}
                alt="imagen"
              />
            ) : (
              <img
                className="imagen-card"
                src={"../../src/assets/default.jpg"}
                alt="imagen"
              />
            )}
          </Grid>
        </Grid>

        <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
          <Grid
            item
            xs={12}
            sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
          >

            <ToogleButton isEditing={isEditing} item={item} edit={edit} />
          </Grid>

          <Grid
            onClick={() => desplegar(despliegue, item.id)}
            item
            xs={12}
            sx={{
              width: "100%",
              display: "flex",
              pt: 8,
              pl: 3,
              pb: 4,
              textAlign: "start",
              userSelect:"none"
            }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              layout="position"
            >
              {item.comentario}
            </motion.span>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ pt: 1 }}
            onClick={() => desplegar(despliegue, item.id)}
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1.3, 1, 1],
                rotate: [0, 0, 90, 90, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                transition: { duration: 1.5 },
              }}
            >
              <Typography
                sx={{ p: 3, userSelect:"none" }}
                variant="overline"
                fontSize={"24px"}
                border={"4px solid" + elegirColor(item.nota)}
                borderRadius={"50%"}
                color={elegirColor(item.nota)}
              >
                {item.nota}
              </Typography>
            </motion.div>
          </Grid>
          <Grid
            onClick={() => desplegar(despliegue, item.id)}
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            userSelect:"none"}}
          >
            <Moment date={item.fecha} format="DD/MM/YYYY" />
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
}
