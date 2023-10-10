import { useState } from "react";
import { type Info } from "../../types";
import { Grid, Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CardPlegada from "./CardPlegada";
import CardDesplegada from "./CardDesplegada";
import CardDesplegadaEdit from "./CardDesplegadaEdit";
import CardNueva from "./CardNueva";
import { motion } from "framer-motion";

export default function Card({ info }: { info: Info }) {
  const [despliegue, setDespliegue] = useState([false]);
  const [isEditing, setIsEditing] = useState([false]);
  const [isAdding, setIsAdding] = useState(false);

  function desplegar(array: boolean[], id: number) {
    const aux = [...array];
    if (!aux[id] || aux[id] == false) {
      aux[id] = true;
    } else {
      aux[id] = false;
    }
    setDespliegue(aux);
  }

  function edit(array: boolean[], id: number) {
    console.log(id, "ID");
    const aux = [...array];
    if (!aux[id] || aux[id] == false) {
      console.log("entro??");
      aux[id] = true;
    } else {
      aux[id] = false;
    }
    setIsEditing(aux);
    console.log(isEditing);
  }

  function add (){
    setIsAdding(true)
  }

  return (
    <Grid
      container
      sx={{ display: "flex", flexDirection: "row", p: 10, pl: 20 }}
    >
      <Grid item xs={4}>
        
          {isAdding ?(<Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
          pb:2}}
        ><CardNueva/></Grid>):(<Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          pb:2}}
        ><Button onClick={add} variant="contained" >Añadir nuevo<AddBoxIcon sx={{pl:1,pb:0.1}}/></Button></Grid>)}
        
        {info?.map((item) => {
          return (
            <Grid
              key={item.id}
              item
              lg={12}
              md={12}
              xs={12}
              xl={6}
              width={"480px"}
              sx={{ userSelect: "none" }}
            >
              <motion.div
                transition={{ layout: { duration: 1, type: "spring" } }}
                style={{ borderRadius: "20px" }}
                layout
              >
                {despliegue[item.id] ? (
                  isEditing[item.id] ? (
                    <CardDesplegadaEdit
                      item={item}
                      desplegar={desplegar}
                      despliegue={despliegue}
                      edit={edit}
                      isEditing={isEditing}
                    />
                  ) : (
                    <CardDesplegada
                      item={item}
                      desplegar={desplegar}
                      despliegue={despliegue}
                      isEditing={isEditing}
                      edit={edit}
                    />
                  )
                ) : (
                  <CardPlegada
                    item={item}
                    desplegar={desplegar}
                    despliegue={despliegue}
                  />
                )}
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
      <Grid
        item
        xs={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Aqui ira pendientes</h1>
      </Grid>
    </Grid>
  );
}
