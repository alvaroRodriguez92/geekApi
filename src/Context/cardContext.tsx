import {useEffect} from "react"
import { useContext, useState, createContext, ReactNode } from "react";
import {type Info} from "../types"

type Contexto ={
infoTema:(tema:String,año:String)=>void,
infoAños:(tema:String)=>void,
info:Info,
años:String[],
tema:String
}



const CardContext = createContext<Contexto>({
    infoTema:()=>{},
    infoAños:()=>{},
    info:[],
    años:[],
    tema:""
})


export default function CardContextProvider({children}:{children:ReactNode}){

    const [info, setInfo] =useState<Info>([])
    const [años, setAños] =useState<String[]>([])
    const [tema, setTema] =useState<String>("")

    async function infoAños(tema:String){
        console.log("se ejecuta el getyears y el tema es:", tema)
        const response = await fetch(`http://localhost:3000/${tema}/year/years`)
        const data = await response.json()
        setAños(data)
        setTema(tema)
     
    }
    
    async function infoTema(tema:String,año:String){
        console.log(tema,año, "tema y año xd")
        const response = await fetch(`http://localhost:3000/${tema}/${año}`)
        const data = await response.json()
        setInfo(data)
    }


   



    const value = {
        infoTema,
        infoAños,
        info,
        años,
        tema
    }

    return<CardContext.Provider value={value}>{children}</CardContext.Provider>
}

export function useCardContext(){
    return useContext(CardContext)
}