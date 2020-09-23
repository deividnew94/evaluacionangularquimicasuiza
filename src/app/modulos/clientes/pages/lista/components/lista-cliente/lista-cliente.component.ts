import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/modulos/clientes/services/clientes.service';
import { Cliente } from 'src/app/modulos/clientes/models/cliente.model';
import { AppState } from 'src/app/modulos/clientes/models/app.state';
import * as ClientesActions from "src/app/redux/actions/clientes.actions";

import { Store } from '@ngrx/store';
import { CalculosService } from 'src/app/modulos/clientes/services/calculos.service';


@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements OnInit {

  clientes: Cliente[];

  constructor(private store: Store<AppState>, private clientesService: ClientesService, private calculosService: CalculosService) {
    this.clientes = [];




  }

  ngOnInit(): void {

   this.clientesService.getClientes().subscribe(clientes => {
    this.clientes = clientes.reverse();


    this.store.dispatch({ type: ClientesActions.PROMEDIO_CLIENTE, payload: { 
      promedio: this.calculosService.closure().promedio(this.clientes),
      desviacion: this.calculosService.closure().desviacion(this.clientes),
    } });


  })

  }






}
