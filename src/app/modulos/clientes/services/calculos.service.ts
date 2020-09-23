import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class CalculosService {

  constructor() { }

  closure() {
    return {
      promedio: ( clientes: any[]) => {
        return clientes.reduce(function(sum, value){
                    return sum + value.edad;
                }, 0) / clientes.length;
      },
      desviacion: (clientes: any[]) => {
        let promedio = this.closure().promedio(clientes);
        return Math.sqrt(clientes.map(x => Math.pow(x.edad - promedio, 2)).reduce((a, b) => a + b) / clientes.length);
      },
    }

  }  

}
