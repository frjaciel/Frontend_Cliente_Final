import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LandingComponent } from '../app/component/landing/landing.component';
import { LoginComponent } from './component/login/login.component';
import { SinginComponent } from './component/singin/singin.component';

const routes: Routes = [
    {path: 'Landing', component: LandingComponent },
    {path: 'Login', component: LoginComponent},
    {path: 'Singin', component: SinginComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'Landing' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }