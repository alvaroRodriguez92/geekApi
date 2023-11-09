import {Box,Grid,Button, TextField} from "@mui/material"
import { useCardContext } from "../../Context/cardContext"
import { useEffect,useState } from "react"

export default function Pendientes(){
    const {tema,fetchPendientes, pendientes,setPendientes} = useCardContext()
    const [pendiente,setPendiente] = useState<string>("")

    useEffect(()=>{
        fetchPendientes(tema)
    },[tema])

    async function eliminarPendiente(id:number){
        const response = await fetch(`http://localhost:3000/${tema}/pendiente/${id}`,{
            method:"DELETE"
        })
        const data = await response.json()
        if(response.ok){
            setPendientes(data)
        }
    }

    async function añadirPendiente(){
        console.log(pendiente,"pendiente")
        const response = await fetch(`http://localhost:3000/${tema}/pendiente`,{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({"nombre":pendiente})
        })
        const data = await response.json()
        if(response.ok){
            setPendientes(data)
            setPendiente("")
        }
    }



    function handleChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        setPendiente(e.target.value)
    }
    console.log(pendiente)
    return(
        <Box sx={{height:"100%", width:"80%", border:"2px dashed #322776cc", p:4, borderRadius:"20px"}}>
        <span className="pending-title">Pendientes</span>
        <ul className="pending-list">
            {pendientes?(pendientes?.map((item, index)=>{
                
                return(
                <Grid item xs={5} sx={{m:1}} key={index}>
                <li><span>{item[tema as keyof typeof item]}</span><Button variant="outlined" sx={{p:0, m:0, ml:3, }} onClick={()=>eliminarPendiente(item.id)}>X</Button></li>
                </Grid>)
            })):("")}
        </ul>
        <Box sx={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"stretch", width:"80%", m:"80px 80px 0px 80px"}}>
        <TextField label="Añadir pendiente" variant="filled" value={pendiente} onChange={(e)=>handleChange(e)}/><Button variant="contained" onClick={añadirPendiente}>Añadir</Button>
        </Box>
        </Box>
    )
}