import { useContext, useState, createContext, ReactNode } from "react";
import {type Info, InfoPendientes} from "../types"

type Contexto ={
infoTema:(tema:string,año:string)=>void,
infoAños:(tema:string)=>void,
info:Info,
años:string[],
tema:string,
año:string,
setInfo: React.Dispatch<React.SetStateAction<Info>>,
pendientes?:InfoPendientes,
fetchPendientes:(tema:string)=>void,
setPendientes:React.Dispatch<React.SetStateAction<InfoPendientes | undefined>>
}



const CardContext = createContext<Contexto>({
    infoTema:()=>{},
    infoAños:()=>{},
    info:[],
    años:[],
    tema:"",
    año:"",
    setInfo: ()=>{},
    pendientes:[],
    fetchPendientes:()=>{},
    setPendientes: ()=>{},

}
    )


export default function CardContextProvider({children}:{children:ReactNode}){

    const [info, setInfo] =useState<Info>([])
    const [años, setAños] =useState<string[]>([])
    const [año, setAño] =useState<string>("")
    const [tema, setTema] =useState<string>("")
    const [pendientes,setPendientes] = useState<InfoPendientes>()

    async function infoAños(tema:string){
        console.log("se ejecuta el getyears y el tema es:", tema)
        const response = await fetch(`http://localhost:3000/${tema}/year/years`)
        const data = await response.json()
        setAños(data)
        setTema(tema)
        
     
    }

    async function fetchPendientes(tema:string){
        const response = await fetch(`http://localhost:3000/${tema}/pendiente/get`)
        const data = await response.json();
        setPendientes(data)
    }
    
    async function infoTema(tema:string,año:string){
        const response = await fetch(`http://localhost:3000/${tema}/${año}`)
        const data = await response.json()
        setInfo(data)
        setAño(año)
    }

    

    const value = {
        infoTema,
        infoAños,
        info,
        años,
        tema,
        año,
        setInfo,
        pendientes,
        fetchPendientes,
        setPendientes
    }

    return<CardContext.Provider value={value}>{children}</CardContext.Provider>
}

export function useCardContext(){
    return useContext(CardContext)
}