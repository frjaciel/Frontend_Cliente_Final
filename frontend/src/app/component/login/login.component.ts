import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from "../../services/login.service";

import Swal from 'sweetalert2';
import { Usuario } from '../../services/productos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  email: string;

  constructor(  private fb: FormBuilder,
                private router: Router,
                private loginServ: LoginService ) {
    this.FormLogin();
   
  }

  ngOnInit(): void {
  }

  get CorreoNoValido(){
    return this.login.get('email').invalid && this.login.get('email').touched;
  }

  get PassNoValido(){
    return this.login.get('password').invalid && this.login.get('password').touched;
  }

  FormLogin(){
    this.login = this.fb.group({
      email: ['asd@gmail.com', [Validators.required, Validators.pattern('[\\w\\.-]*[a-zA-Z0-9_]@[\\w\\.-]*[a-zA-Z0-9]\\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]')]],
      password: ['Asd.1234@', [Validators.required, Validators.minLength(7)]]
    });
  }

  IniciarSesion(){
    if (this.login.invalid) {
      return Object.values(this.login.controls).forEach(control => {
        control.markAsTouched();
      });
    }else{
      Swal.fire({
        allowOutsideClick: false,
        icon: 'info',
        text: 'Espere por favor...'
      });

      Swal.showLoading();

      this.loginServ.IniciarSesion(this.login.value)
      .subscribe(resp => {
        Swal.close();
        let usuario = resp;
        localStorage.setItem('idUsuario', usuario[0]._id);
        this.loginServ.permiso$.emit('true');
        this.loginServ.email$.emit(usuario[0].email);
        this.router.navigate(['Categorias']);
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al autenticar',
          text: err.message
        });
      });
  
    }
  }

}
