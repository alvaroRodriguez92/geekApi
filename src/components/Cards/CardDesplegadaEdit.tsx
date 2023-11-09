import { useState } from "react";
import { useCardContext } from "../../Context/cardContext";
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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

export default function CardDesplegadaEdit({
  item,
  edit,
  isEditing,
}: DesplieguePropsEdit) {
  const { tema, infoTema, año } = useCardContext();
  const [imagen, setImagen] = useState<File | null | undefined>();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleChangeImagen(value: File | null | undefined) {
    setImagen(value);
  }

  async function eliminarImagen() {
    const response = await fetch(
      `http://localhost:3000/${tema}/image/${item.id}`,
      {
        method: "PATCH",
      }
    );
    if (response.ok) {
      infoTema(tema, año);
    }
  }

  async function eliminarCard() {
    const response = await fetch(`http://localhost:3000/${tema}/${item.id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      infoTema(tema, año);
      handleClose()
    }
  }

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
                  alignItems: "flex-start",
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
                          onClick={eliminarImagen}
                        >
                          X
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() =>
                            document.querySelector(".css-1fel157")!.click()
                          }
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            backgroundColor: "blue",
                            maxHeight: "24px",
                            maxWidth: "52px",
                            minWidth: "52px",
                          }}
                        >
                          <MuiFileInput
                            hideSizeText
                            aria-hidden
                            hidden
                            hiddenLabel
                            id="imagen"
                            sx={{ visibility: "hidden" }}
                            value={imagen}
                            onChange={handleChangeImagen}
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
                    <MuiFileInput
                      // sx={{display:"none"}}
                      sx={{ mt: 3, width: "70%" }}
                      label="imagen"
                      id="IMAGEN"
                      name="IMAGEN"
                      value={imagen}
                      onChange={handleChangeImagen}
                    />
                  )}
                </Grid>
                <Grid item xs={12} sx={{ pt: 12, ml: 3 }}>
                  <Button
                    onClick={handleClickOpen}
                    variant="contained"
                    sx={{
                      minWidth: "0px",
                      color: "#f7f7f7",
                      borderRadius: "40px",
                      backgroundColor: "#9f5555",
                    }}
                  >
                    X
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Estás seguro de que deseas eliminar esta entrada?"}
                    </DialogTitle>
                    {/* <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means
                        sending anonymous location data to Google, even when no
                        apps are running.
                      </DialogContentText>
                    </DialogContent> */}
                    <DialogActions>
                      <Button onClick={handleClose}>No</Button>
                      <Button onClick={eliminarCard} autoFocus>
                        Si, eliminar entrada
                      </Button>
                    </DialogActions>
                  </Dialog>
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
                    imagen={imagen}
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
