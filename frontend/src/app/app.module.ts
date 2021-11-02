import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { LandingComponent } from './component/landing/landing.component';

//Router
import { AppRoutingModule } from './app-routing.module';
import { SinginComponent } from './component/singin/singin.component';

import { HttpClientModule } from '@angular/common/http';
import { CategoriasComponent } from './component/categorias/categorias.component';
import { TiendasComponent } from './component/tiendas/tiendas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    SinginComponent,
    CategoriasComponent,
    TiendasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
