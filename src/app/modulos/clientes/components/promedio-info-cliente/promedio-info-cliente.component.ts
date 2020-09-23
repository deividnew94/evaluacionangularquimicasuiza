import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../models/cliente.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app.state';

@Component({
  selector: 'app-promedio-info-cliente',
  templateUrl: './promedio-info-cliente.component.html',
  styleUrls: ['./promedio-info-cliente.component.scss']
})
export class PromedioInfoClienteComponent implements OnInit {

  public clienteStore: Observable<Object>

  constructor(private store: Store<AppState>) { 
    this.clienteStore = store.select("clientes");

  }

  ngOnInit(): void {
  }

}
