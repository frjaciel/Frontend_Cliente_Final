import { Component, OnInit } from '@angular/core';
import { LoginService, Permiso } from "../app/services/login.service";

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  listAccs: Permiso[] = [];
  loggedIn: boolean;
  email: string;

  CantidadCarrito = 0;

  localStorage = window.localStorage;

  constructor(private loginServ: LoginService) {
   
  }

  ngOnInit(): void {

    this.loginServ.permiso$.subscribe( (texto:boolean) => {
      this.loggedIn = texto;
      this.listAccs = this.loginServ.getListaPermisos();
    });

    this.loginServ.email$.subscribe( texto => {
      this.email = texto;
    });

    this.loginServ.cantidadCarrito$.subscribe ( texto => {
      this.CantidadCarrito = texto;
    });

  }

  Logout(){
    this.localStorage.removeItem('idUsuario');
    this.localStorage.removeItem('CantidadCarrito');
    this.localStorage.removeItem('DetalleFactura');
    this.loginServ.logout();
    this.loggedIn = false;
  }
}
