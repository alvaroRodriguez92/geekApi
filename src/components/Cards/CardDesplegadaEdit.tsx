import { Grid, Typography, TextField } from "@mui/material";
import { DesplieguePropsEdit } from "../../types";
import Moment from "react-moment";
import { motion } from "framer-motion";
import ToogleButtonEdit from "./ToogleButtonEdit";

export default function CardDesplegadaEdit({
  item,
  edit,
  isEditing,
}: DesplieguePropsEdit) {
  function elegirColor(nota: string | undefined) {
    if (nota !== undefined) {
      const notaDecimal = Number.parseFloat(nota);
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
          // backgroundColor: "#3c3a37",
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
        >
          <Grid
            item
            xs={12}
            sx={{ width: "100%", maxHeight: "80px", userSelect: "none" }}
          >
            <TextField
              id="filled-basic"
              variant="standard"
              placeholder={item.nombre}
              sx={{ input: { color: "white" } }}
            />{" "}
          </Grid>
          <Grid item xs={12}>
            {item.imagen ? (
              <img
                className="imagen-card"
                src={"../../src/assets/from.jpg"}
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
            <ToogleButtonEdit isEditing={isEditing} item={item} edit={edit} />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              width: "100%",
              display: "flex",
              pt: 6,
              pl: 3,
              pb: 2,
              textAlign: "start",
            }}
          >
            <TextField
              id="filled-basic"
              variant="standard"
              multiline
              rows={3}
              placeholder={item.comentario}
              inputProps={{ style: { color: "white" } }}
            />{" "}
          </Grid>
          <Grid item xs={12} sx={{ pt: 1 }}>
            <motion.div
              animate={{
                scale: [1, 1.3, 1.3, 1, 1],
                rotate: [0, 0, 90, 90, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                transition: { duration: 1.5 },
              }}
            >
              <Typography
                sx={{ p: 3, userSelect: "none" }}
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
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              userSelect: "none",
            }}
          >
            <Moment date={item.fecha} format="DD/MM/YYYY" />
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
}
