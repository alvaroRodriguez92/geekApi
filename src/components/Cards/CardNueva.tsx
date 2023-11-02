import {useState} from "react"
import { Grid, Button, TextField } from "@mui/material";
import { useCardContext } from "../../Context/cardContext";
import { motion } from "framer-motion";
import { Formik, Form } from "formik";
import { MuiFileInput } from "mui-file-input";
import { cardSchema } from "./cardSchema";
import { Add, type CardInterface } from "../../types";


export default function CardNueva({add}:Add) {
  const [imagen, setImagen] = useState<File|null|undefined>()
  const {tema} = useCardContext()


  async function onSubmit(values: CardInterface) {
    console.log(imagen)
    const formData = new FormData();
    formData.append("nombre", values.nombre)
    formData.append("comentario", JSON.stringify(values.comentario))
    formData.append("nota", JSON.stringify(values.nota))
    if(imagen){
      formData.append("imagen", imagen)

    }
   
    const response = await fetch(`http://localhost:3000/${tema}/`, {
    method:"POST",
    body: formData
    });
    if(response.status==200){
      add()
    }
  }

  function handleChangeImagen(value:File|null|undefined){
    setImagen(value)
  }

  const initialValues: CardInterface = {
    nombre: "",
    comentario: "",
    nota: 0,
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
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
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
                alignItems: "start",
                width: "560px",
                height: "328px",
                background:
                  "linear-gradient(138deg, rgba(110,105,144,1) 0%, rgba(70,59,136,1) 35%, rgba(30,14,131,1) 100%);",
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
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    layout="size"
                  >
                    <TextField
                      name="nombre"
                      id="nombre"
                      variant="standard"
                      error={props.errors.nombre && props.touched.nombre}
                      onBlur={props.handleBlur}
                      onChange={props.handleChange}
                      value={props.values.nombre}
                      placeholder="Nombre"
                      sx={{ input: { color: "white" } }}
                    />
                  </motion.h2>
                </Grid>
                <Grid item xs={12}>
                  {/* <img
                  className="imagen-card"
                  src={"../../src/assets/default.jpg"}
                  alt="imagen"
                /> */}
                  <MuiFileInput id="imagen" sx={{mt:12, ml:3}} label="Imagen" value={imagen} onChange={handleChangeImagen} />
                </Grid>
              </Grid>

              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                ><Button color="secondary"
                variant="contained"
                size="small" onClick={add} sx={{mr:2}}>Cancelar</Button>
                  <Button
                    color="secondary"
                    variant="contained"
                    size="small"
                    type="submit"
                  >
                    Ok
                  </Button>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{
                    width: "100%",
                    display: "flex",
                    pt: 4,
                    pl: 3,
                    pb: 4,
                    textAlign: "start",
                    userSelect: "none",
                  }}
                >
                  <motion.span>
                    <TextField
                      name="comentario"
                      id="comentario"
                      variant="standard"
                      error={
                        props.errors.comentario && props.touched.comentario
                      }
                      value={props.values.comentario}
                      onBlur={props.handleBlur}
                      onChange={props.handleChange}
                      multiline
                      rows={2}
                      placeholder="Comentario"
                      inputProps={{ style: { color: "white" } }}
                    />
                  </motion.span>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    pt: 1,
                    pr: 3,
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <TextField
                    name="nota"
                    id="nota"
                    inputProps={{min:0, max:10, step:.1, color:"white"}}
                    type="number"
                    error={props.errors.nota && props.touched.nota}
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                    value={props.values.nota}
                    variant="standard"
                    placeholder="Nota"
                    sx={{ input: { color: "white", min:0, max:10 } }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
}
