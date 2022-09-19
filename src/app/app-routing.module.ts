import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesPelisComponent } from './components/detalles-pelis/detalles-pelis.component';
import { DetallesSeriesComponent } from './components/detalles-series/detalles-series.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { SeriesComponent } from './components/series/series.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'peliculas',
    component: PeliculasComponent
  },
  {
    path: 'series',
    component: SeriesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'peliculas/info/:id',
    component: DetallesPelisComponent
  },
  {
    path: 'series/info/:id',
    component: DetallesSeriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
