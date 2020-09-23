import { Action } from "@ngrx/store";

import * as ClientesActions from "../actions/clientes.actions";
import { Cliente } from 'src/app/modulos/clientes/models/cliente.model';
  
const initialState: object = {
 promedio: 0,
 desviacion: 0
}
  
export function reducer(state: object = initialState, action: ClientesActions.Actions) {
  
   switch (action.type) {
        case ClientesActions.PROMEDIO_CLIENTE:   
        case ClientesActions.DESVIACION_CLIENTE:
            return action.payload;
       default:
           return state;
   }
}