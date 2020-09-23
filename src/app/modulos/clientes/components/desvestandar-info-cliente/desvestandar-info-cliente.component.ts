import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app.state';

@Component({
  selector: 'app-desvestandar-info-cliente',
  templateUrl: './desvestandar-info-cliente.component.html',
  styleUrls: ['./desvestandar-info-cliente.component.scss']
})
export class DesvestandarInfoClienteComponent implements OnInit {
  public clienteStore: Observable<Object>

  constructor(private store: Store<AppState>) { 
    this.clienteStore = store.select("clientes");

  }

  ngOnInit(): void {

  }

}
