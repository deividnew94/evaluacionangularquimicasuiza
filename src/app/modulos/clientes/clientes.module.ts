import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { DesvestandarInfoClienteComponent } from './components/desvestandar-info-cliente/desvestandar-info-cliente.component';
import { PromedioInfoClienteComponent } from './components/promedio-info-cliente/promedio-info-cliente.component';
import { ListaModule } from './pages/lista/lista.module';
import { IconsModule } from 'src/app/icons/icons.module';



@NgModule({
  declarations: [DesvestandarInfoClienteComponent, PromedioInfoClienteComponent],
  exports: [DesvestandarInfoClienteComponent, PromedioInfoClienteComponent],
  
  imports: [
    CommonModule,
    ClientesRoutingModule,
    IconsModule
  ]
})
export class ClientesModule { }