import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoRoutingModule } from './nuevo-routing.module';
import { FormClienteComponent } from './components/form-cliente/form-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormClienteComponent],
  imports: [
    CommonModule,
    NuevoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NuevoModule { }
