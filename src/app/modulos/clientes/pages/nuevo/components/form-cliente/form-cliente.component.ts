import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/modulos/clientes/services/clientes.service';
import { Cliente } from 'src/app/modulos/clientes/models/cliente.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.scss']
})
export class FormClienteComponent implements OnInit {
  cliente: Cliente;
  isSubmited: boolean;
  formulario: FormGroup;


  constructor( private fb: FormBuilder, private clientesService: ClientesService,public router: Router) { }

  ngOnInit(): void {


   this.clientesService.getClientes();


   this.formulario = this.fb.group({
    nombres: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    edad: ['', [Validators.required]],
    fecha_nacimiento: ['', [Validators.required]]
  });

  }

  createCliente(): void {
    this.isSubmited = true;
    if (this.formulario.invalid) return;
    this.cliente = {...this.cliente, ...this.formulario.value};
    this.clientesService.createCliente(this.cliente);

    
      Swal.fire({
        icon: 'success',
        title: 'En hora buena!',
        text: "Se agrego satisfactoriamente el registro del cliente",
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['clientes/lista']);
        } 
      });


  }


  checkInput(input: string, type: string, errorType: string = ''): boolean {
    return this.CHECK_INPUT(this.formulario, input , type, errorType, this.isSubmited);
  }
  
  CHECK_INPUT(formulario: FormGroup, input: string, type: string, errorType: string = '', isSubmited: boolean = false): boolean {
    if (!!errorType) {
      return formulario.get(input)[type] !== undefined
        && formulario.get(input)[type]
        && (formulario.get(input).dirty || formulario.get(input).touched || isSubmited)
        && formulario.get(input).errors !== null
        && formulario.get(input).errors[errorType] !== undefined
        && formulario.get(input).errors[errorType];
    }
    return formulario.get(input)[type] !== undefined && formulario.get(input)[type] && (formulario.get(input).dirty || formulario.get(input).touched || isSubmited);
  }
  

}
