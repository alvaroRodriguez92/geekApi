export interface Tema{
id:number,
nombre: string,
fecha: string,
comentario?:string,
imagen?: HTMLImageElement,
nota?:string

}

export interface DespliegueProps {
    item:Tema,
    desplegar: (array:boolean[],id: number) => void,
    despliegue:boolean[],

}

export interface DesplieguePropsEdit {
    item:Tema,
    desplegar: (array:boolean[],id: number) => void,
    despliegue:boolean[],
    isEditing:boolean[],
    edit:(array:boolean[],id: number)=>void

}

export interface ToogleProps {
    item:Tema,
    isEditing:boolean[],
    edit:(array:boolean[],id: number)=>void
}

export interface Card{
    nombre: string,
    comentario?: string,
    nota: number,
}


export type Info = Tema[]