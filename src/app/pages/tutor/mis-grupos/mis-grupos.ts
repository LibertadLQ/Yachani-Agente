import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-mis-grupos',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
  ],
  templateUrl: './mis-grupos.html',
  styleUrl: './mis-grupos.css',
})
export class MisGrupos {
  filtros = new FormGroup({
    busqueda: new FormControl(''),
    estado: new FormControl('todos'),
  });

  estados = [
    { valor: 'todos', texto: 'Todos los estados' },
    { valor: 'activo', texto: 'Activo' },
    { valor: 'sin-cupos', texto: 'Sin cupos' },
  ];

  resumen = [
    { icono: 'group', valor: '3', texto: 'Grupos activos' },
    { icono: 'school', valor: '11', texto: 'Estudiantes' },
    { icono: 'inbox', valor: '3', texto: 'Solicitudes' },
    { icono: 'calendar_today', valor: '4', texto: 'Sesiones esta semana' },
  ];

  grupos = [
    {
      siglas: 'IS',
      cupos: '2 cupos libres',
      completo: false,
      nombre: 'Ingeniería de software: repasos',
      descripcion: 'Repasa casos de uso, diagramas UML y patrones de diseño con ejercicios en equipo.',
      etiquetas: ['Práctico', 'Virtual'],
      estudiantes: '4/6 estudiantes',
      estado: 'Activo',
      progreso: 66,
      horario: 'Lun y mié · 18:00 – 20:00',
      solicitudes: '2 solicitudes pendientes',
    },
    {
      siglas: 'ML',
      cupos: 'Grupo completo',
      completo: true,
      nombre: 'Modelos de entrenamiento',
      descripcion: 'Compara modelos, evalúa métricas y comparte resultados con tu grupo.',
      etiquetas: ['Práctico', 'Mixta'],
      estudiantes: '5/5 estudiantes',
      estado: 'Sin cupos',
      progreso: 100,
      horario: 'Jue · 19:00 – 21:00',
      solicitudes: '',
    },
    {
      siglas: 'PW',
      cupos: '4 cupos libres',
      completo: false,
      nombre: 'Programación web: Angular',
      descripcion: 'Construye componentes, servicios y rutas paso a paso con proyectos pequeños.',
      etiquetas: ['Participativo', 'Virtual'],
      estudiantes: '2/6 estudiantes',
      estado: 'Activo',
      progreso: 33,
      horario: 'Sáb · 10:00 – 12:00',
      solicitudes: '1 solicitud pendiente',
    },
  ];
}
