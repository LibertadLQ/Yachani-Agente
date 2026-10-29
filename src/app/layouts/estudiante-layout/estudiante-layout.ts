import { Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-estudiante-layout',
  imports: [
    NgTemplateOutlet,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './estudiante-layout.html',
  styleUrl: './estudiante-layout.css',
})
export class EstudianteLayout {
  menuPrincipal = [
    { icono: 'home', texto: 'Inicio', ruta: '' },
    { icono: 'explore', texto: 'Explorar grupos', ruta: '' },
    { icono: 'groups', texto: 'Mis grupos', ruta: '' },
    { icono: 'add', texto: 'Crear grupo', ruta: '' },
    { icono: 'auto_awesome', texto: 'Recomendaciones IA', ruta: '' },
    { icono: 'style', texto: 'Flashcards', ruta: '/estudiante' },
  ];

  navegacionMovil = [
    { icono: 'home', texto: 'Inicio', ruta: '' },
    { icono: 'explore', texto: 'Explorar', ruta: '' },
    { icono: 'groups', texto: 'Grupos', ruta: '' },
    { icono: 'style', texto: 'Flashcards', ruta: '/estudiante' },
  ];
}
