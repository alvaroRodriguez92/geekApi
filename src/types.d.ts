import { ParametersEdit } from './types.d';
export interface Tema {
  id: number;
  nombre: string;
  fecha: string;
  comentario?: string;
  imagen?: HTMLImageElement;
  nota?: number;
}

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
  edit: (array:boolean[], id:number, values?:CardInterface) => void;
}

export interface ToogleProps {
  item: Tema;
  isEditing: boolean[];
  edit: (array:boolean[], id:number, values?:CardInterface) => void;
  values?: CardInterface;
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

export type Info = Tema[];
