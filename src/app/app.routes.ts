import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  }
  ,
  {
    path: 'experiencia',
    loadComponent: () => import('./components/experiencia/experiencia.component').then(m => m.ExperienciaComponent)
  },
  {
    path: 'habilidades',
    loadComponent: () => import('./components/habilidades/habilidades.component').then(m => m.HabilidadesComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-page/contact-page/contact-page.component').then(m => m.ContactPageComponent)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];
