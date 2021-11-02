import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LandingComponent } from '../app/component/landing/landing.component';
import { LoginComponent } from './component/login/login.component';
import { SinginComponent } from './component/singin/singin.component';
import { CategoriasComponent } from "./component/categorias/categorias.component";
import { TiendasComponent } from "./component/tiendas/tiendas.component";

const routes: Routes = [
    {path: 'Landing', component: LandingComponent },
    {path: 'Login', component: LoginComponent},
    {path: 'Singin', component: SinginComponent},
    {path: 'Categorias', component: CategoriasComponent},
    {path: 'Tiendas', component: TiendasComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'Landing' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }