import { ParametersEdit } from './types.d';
export interface Tema {
  id: number;
  nombre: string;
  fecha: string;
  comentario?: string;
  imagen?: HTMLImageElement;
  nota?: number;
}

export type Info = Tema[];

export interface DespliegueProps {
  item: Tema;
  desplegar: (array: boolean[], id: number) => void;
  despliegue: boolean[];
}

export interface DesplieguePropsEdit {
  item: Tema;
  desplegar: (array: boolean[], id: number) => void;
  despliegue: boolean[];
  isEditing: boolean[];
  edit: (array:boolean[], id:number, values?:CardInterface, imagen?:File|null|undefined) => void;
}

export interface ToogleProps {
  item: Tema;
  isEditing: boolean[];
  edit: (array:boolean[], id:number, values?:CardInterface, imagen?:File|null|undefined) => void;
  values?: CardInterface;
}

export interface TooglePropsEdit {
  item: Tema;
  isEditing: boolean[];
  edit: (array:boolean[], id:number, values?:CardInterface, imagen?:File|null|undefined) => void;
  values?: CardInterface;
  imagen:File|null|undefined;
}

export interface CardInterface {
  nombre: string;
  comentario?: string;
  nota?: number;
}

export interface ParametersEdit {
  array: boolean[];
  id: number;
  values?: CardInterface;
}

export interface Add {
  add: () => void;
}

export interface Pendientes{
  id:number,
  anime?:string,
  videojuegos?:string,
  series?:string,
  peliculas?:string,

}

export interface Top{
  nombre:string,
  nota:string
}

export type Tops = Top[]

export type InfoPendientes = Pendientes[];

