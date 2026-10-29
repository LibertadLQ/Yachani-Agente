import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'tutor/mis-grupos', pathMatch: 'full' },
  {
    path: 'tutor',
    loadChildren: () => import('./pages/tutor/tutor.routes').then((m) => m.routes),
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./pages/estudiante/estudiante.routes').then((m) => m.routes),
  },
  { path: '**', redirectTo: 'tutor/mis-grupos' },
];
