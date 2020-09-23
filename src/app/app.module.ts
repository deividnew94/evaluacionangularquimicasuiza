import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientesModule } from './modulos/clientes/clientes.module';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { IconsModule } from './icons/icons.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { reducer } from './redux/reducers/clientes.reducer';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ClientesService } from './modulos/clientes/services/clientes.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFireDatabaseModule,
    ClientesModule,
    NgbModule,
    IconsModule,
    StoreModule.forRoot({
      clientes: reducer
    }),
    SweetAlert2Module.forRoot()
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
