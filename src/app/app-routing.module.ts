import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';


const routes: Routes = [

  {
    path: 'clientes',
    component: DashboardComponent,
    loadChildren: () => import('./modulos/clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path: '**',
    redirectTo: 'clientes/lista',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
