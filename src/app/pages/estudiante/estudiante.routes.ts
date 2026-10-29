import { Routes } from '@angular/router';
import { EstudianteLayout } from '../../layouts/estudiante-layout/estudiante-layout';

export const routes: Routes = [
  {
    path: '',
    component: EstudianteLayout,
    children: [
      { path: '', redirectTo: 'mis-mazos', pathMatch: 'full' },
      {
        path: 'mis-mazos',
        title: 'Mis mazos · Yachani',
        loadComponent: () => import('./mis-mazos/mis-mazos').then((m) => m.MisMazos),
      },
      {
        path: 'crear-mazo',
        title: 'Crear mazo · Yachani',
        loadComponent: () => import('./crear-mazo/crear-mazo').then((m) => m.CrearMazo),
      },
    ],
  },
];
