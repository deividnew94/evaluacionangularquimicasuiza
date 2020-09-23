import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Cliente } from '../models/cliente.model';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  clientesRef:  AngularFireList<any>; 
  constructor(private db: AngularFireDatabase) {
    //this.clientesRef = this.db.list('clientes');

   }


  getClientes() {
    this.clientesRef = this.db.list('clientes');
    return this.clientesRef.valueChanges();
  }

  createCliente(cliente: Cliente){

    this.clientesRef.push(cliente);


    
  }



}
