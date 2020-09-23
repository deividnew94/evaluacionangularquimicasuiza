import { Action } from "@ngrx/store";
import { Cliente } from 'src/app/modulos/clientes/models/cliente.model';
  

export const PROMEDIO_CLIENTE = "[CLIENTES] PromedioEdades";
export const DESVIACION_CLIENTE = "[CLIENTES] DesviacionEstandarEdades";

  

export class PromedioEdades implements Action {
  readonly type = PROMEDIO_CLIENTE;
  constructor(public payload: object) { }
}
export class DesviacionEstandarEdades implements Action {
  readonly type = DESVIACION_CLIENTE;
  constructor(public payload: object) { }
}
  
  
export type Actions = PromedioEdades | DesviacionEstandarEdades