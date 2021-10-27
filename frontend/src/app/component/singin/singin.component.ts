import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { validarContraseñaIguales } from "../../validators/app.validar-contraseña-iguales";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  singin: FormGroup;

  constructor( private fb: FormBuilder,
               private router: Router) { 
      this.FormSingin();
  }

  ngOnInit(): void {
  }

  get CorreoNoValido(){
    return this.singin.get('email').invalid && this.singin.get('email').touched;
  }

  get PassNoValido(){
    return this.singin.get('password').invalid && this.singin.get('password').touched;
  }

  get numberPhoneNoValido(){
    return this.singin.get('numberPhone').invalid && this.singin.get('numberPhone').touched;
  }

  get NoSonIguales(): boolean {
    return this.singin.hasError('NoSonIguales') &&
       this.singin.get('password').dirty &&
       this.singin.get('Confpassword').dirty;
  }

  FormSingin(){
    this.singin = this.fb.group({
      email: ['Yozabeth@unah.hn', [Validators.required, Validators.pattern('[\\w\\.-]*[a-zA-Z0-9_]@[\\w\\.-]*[a-zA-Z0-9]\\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]')]],
      numberPhone: ['3354-8658', [Validators.required, Validators.pattern('[0-9]{4}-[0-9]{4}')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]],
      Confpassword: ['', Validators.required]
    }, {
      validators: validarContraseñaIguales
    });
  }

  Registrar(){
    console.log(this.NoSonIguales);
    if (this.singin.invalid) {
      return Object.values(this.singin.controls).forEach(control => {
        control.markAsTouched();
      });
    }else{
      Swal.fire({
        allowOutsideClick: false,
        icon: 'info',
        text: 'Espere por favor...'
      });
      
      this.router.navigate(['Landing']);
    
    }
  }

}
