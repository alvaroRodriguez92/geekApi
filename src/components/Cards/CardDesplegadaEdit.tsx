import { useState } from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import { DesplieguePropsEdit } from "../../types";
import { Formik, Form } from "formik";
import Moment from "react-moment";
import { motion } from "framer-motion";
import ToogleButtonEdit from "./ToogleButtonEdit";
import { type CardInterface } from "../../types";
import { cardSchema } from "./cardSchema";
import EditIcon from "@mui/icons-material/Edit";
import { MuiFileInput } from "mui-file-input";

export default function CardDesplegadaEdit({
  item,
  edit,
  isEditing,
}: DesplieguePropsEdit) {
  const [logo, setLogo] = useState<any>(null);
  // function elegirColor(nota: number | undefined) {
  //   if (nota !== undefined) {
  //     const notaDecimal = nota;
  //     if (notaDecimal < 6) {
  //       return "#b53f3f";
  //     } else if (notaDecimal < 8 && notaDecimal >= 6) {
  //       return "#dddd5a";
  //     } else if (notaDecimal >= 8) {
  //       return "#62ad62";
  //     }
  //   }
  // }

  const initialValues: CardInterface = {
    nombre: item.nombre,
    comentario: item.comentario,
    nota: item.nota,
  };

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={cardSchema}
        onSubmit={() => {}}
      >
        {(props) => (
          <Form>
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
                    id="nombre"
                    variant="standard"
                    name="nombre"
                    placeholder={item.nombre}
                    sx={{ input: { color: "white" } }}
                    value={props.values.nombre}
                    error={props.errors.nombre && props.touched.nombre}
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                  />{" "}
                </Grid>
                <Grid item xs={12} sx={{ position: "relative" }}>
                  {item.imagen ? (
                    <>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-end",
                          position: "absolute",
                          pt: 1,
                          right: "8px",
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            display: "flex",
                            backgroundColor: "red",
                            height: "24px",
                            minWidth: "52px",
                            fontSize: "15px",
                            mr: 1,
                          }}
                        >
                          X
                        </Button>
                        <Button variant="contained">
                          {/* <Button
                        variant="contained"
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          backgroundColor: "blue",
                          height: "24px",
                          minWidth: "24px",
                        }}
                      > */}
                          <MuiFileInput
                            // sx={{display:"none"}}
                            hidden
                            id="IMAGEN"
                            name="IMAGEN"
                            value={logo}
                            onChange={(file) => {
                              setLogo(file);
                            }}
                          />
                          <EditIcon fontSize="small" />
                        </Button>
                      </Box>
                      <img
                        className="imagen-card"
                        src={`http://localhost:3000/uploadImages/${item.imagen}`}
                        alt="imagen"
                      />
                    </>
                  ) : (
                    <img
                      className="imagen-card"
                      src={"../../src/assets/default.jpg"}
                      alt="imagen"
                    />
                  )}
                </Grid>
              </Grid>

              <Grid
                item
                xs={6}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <ToogleButtonEdit
                    isEditing={isEditing}
                    item={item}
                    edit={edit}
                    values={props.values}
                  />
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
                    id="comentario"
                    name="comentario"
                    variant="standard"
                    multiline
                    rows={3}
                    placeholder={item.comentario}
                    value={props.values.comentario}
                    error={props.errors.comentario && props.touched.comentario}
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                    inputProps={{ style: { color: "white" } }}
                  />{" "}
                </Grid>
                <Grid item xs={12} sx={{ pt: 1 }}>
                  {/* <motion.div
                    animate={{
                      scale: [1, 1.3, 1.3, 1, 1],
                      rotate: [0, 0, 90, 90, 0],
                      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                      transition: { duration: 1.5 },
                    }}
                  > */}
                  <TextField
                    id="nota"
                    name="nota"
                    variant="standard"
                    type="number"
                    value={props.values.nota}
                    error={props.errors.nota && props.touched.nota}
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                    inputProps={{
                      min: 0,
                      max: 10,
                      step: 0.1,
                      style: { color: "white" },
                    }}
                    sx={{ width: "20%" }}
                  />
                  {/* </motion.div> */}
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
          </Form>
        )}
      </Formik>
    </motion.div>
  );
}
