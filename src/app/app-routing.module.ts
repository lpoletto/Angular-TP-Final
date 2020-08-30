import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

// defino las rutas
const routes: Routes = [
  //Ruta raiz, renderizo el componente home
  {path:"", component:HomeComponent},
  //Ruta registro
  {path:"registro", component:RegistroComponent},
  {path:"login", component:LoginComponent},
  {path:'producto/:id', component:DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
