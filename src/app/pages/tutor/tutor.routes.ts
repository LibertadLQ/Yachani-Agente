import { Routes } from '@angular/router';
import { TutorLayout } from '../../layouts/tutor-layout/tutor-layout';

export const routes: Routes = [
  {
    path: '',
    component: TutorLayout,
    children: [
      { path: '', redirectTo: 'mis-grupos', pathMatch: 'full' },
      {
        path: 'mis-grupos',
        title: 'Mis grupos · Yachani',
        loadComponent: () => import('./mis-grupos/mis-grupos').then((m) => m.MisGrupos),
      },
      {
        path: 'crear-grupo',
        title: 'Crear grupo · Yachani',
        loadComponent: () => import('./crear-grupo/crear-grupo').then((m) => m.CrearGrupo),
      },
    ],
  },
];
