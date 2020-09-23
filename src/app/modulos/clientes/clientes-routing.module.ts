import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full'
  },

  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then(m => m.ListaModule)
  },

  {
    path: 'nuevo',
    loadChildren: () => import('./pages/nuevo/nuevo.module').then(m => m.NuevoModule)

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
