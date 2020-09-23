import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import { ListaClienteComponent } from './components/lista-cliente/lista-cliente.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { ClientesModule } from '../../clientes.module';


@NgModule({
  declarations: [ListaClienteComponent],
  imports: [
    CommonModule,
    ListaRoutingModule,
    IconsModule,
    ClientesModule
  ]
})
export class ListaModule { }
