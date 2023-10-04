export interface Tema{
id:number,
nombre: string,
fecha: string,
comentario?:string,
imagen?: HTMLImageElement,
nota?:string

}


export type Info = Tema[]