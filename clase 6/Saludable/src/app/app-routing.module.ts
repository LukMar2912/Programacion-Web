import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InicioComponent} from './components/inicio/inicio.component';
import {RegistroComponent} from './components/registro/registro.component';
import {LoginComponent} from './components/login/login.component';
import {FormularioComponent} from './components/formulario/formulario.component';

const routes: Routes = [
  {path: 'inicio',component: InicioComponent},
  {path: 'login',component:LoginComponent},
  {path: 'registro',component:RegistroComponent},
  {path: 'formulario',component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
