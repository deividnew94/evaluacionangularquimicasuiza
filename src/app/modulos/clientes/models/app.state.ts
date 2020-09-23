import { Cliente } from './cliente.model';

  
export interface AppState {
   readonly clientes: Cliente[];
}