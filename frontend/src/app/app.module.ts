import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SinginComponent } from './component/singin/singin.component';
import { LandingComponent } from './component/landing/landing.component';
import { CategoriasComponent } from './component/categorias/categorias.component';
import { TiendasComponent } from './component/tiendas/tiendas.component';
import { TiendasXCategoriaComponent } from './component/tiendasxcategoria/tiendasxcategoria.component';
import { ProductosxtiendaComponent } from './component/productosxtienda/productosxtienda.component';

//Router
import { AppRoutingModule } from './app-routing.module';

//HttpClient
import { HttpClientModule } from '@angular/common/http';

//services
import { CategoriasService } from "../app/services/categorias.service";
import { LoginService } from "../app/services/login.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EstrellaComponent } from './component/estrella/estrella.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    SinginComponent,
    CategoriasComponent,
    TiendasComponent,
    TiendasXCategoriaComponent,
    ProductosxtiendaComponent,
    EstrellaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    CategoriasService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
