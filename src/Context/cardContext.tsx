import { useContext, useState, createContext } from "react";

const CardContext = createContext({
    infoTema:(_tema:String)=>{},
    info:[]
})


export default function CardContextProvider({children}){

    const [info, setInfo] =useState([])


    async function infoTema(tema:String){
        const response = await fetch(`http://localhost:3000/${tema}`)
        const data = await response.json()
        setInfo(data)
    }



    const value = {
        infoTema,
        info
    }

    return<CardContext.Provider value={value}>{children}</CardContext.Provider>
}

export function useCardContext(){
    return useContext(CardContext)
}