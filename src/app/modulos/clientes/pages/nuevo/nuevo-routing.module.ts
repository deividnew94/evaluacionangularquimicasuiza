import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormClienteComponent } from './components/form-cliente/form-cliente.component';


const routes: Routes = [  {
  path: '',
  component: FormClienteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoRoutingModule { }
