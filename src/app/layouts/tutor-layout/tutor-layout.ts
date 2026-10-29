import { Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-tutor-layout',
  imports: [
    NgTemplateOutlet,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
  ],
  templateUrl: './tutor-layout.html',
  styleUrl: './tutor-layout.css',
})
export class TutorLayout {
  menuPrincipal = [
    { icono: 'home', texto: 'Inicio', ruta: '' },
    { icono: 'group', texto: 'Mis grupos', ruta: '/tutor/mis-grupos' },
    { icono: 'add', texto: 'Crear grupo', ruta: '/tutor/crear-grupo' },
    { icono: 'auto_awesome', texto: 'Crear grupo con IA', ruta: '' },
    { icono: 'inbox', texto: 'Solicitudes', ruta: '' },
    { icono: 'library_books', texto: 'Flashcards', ruta: '' },
  ];
}
