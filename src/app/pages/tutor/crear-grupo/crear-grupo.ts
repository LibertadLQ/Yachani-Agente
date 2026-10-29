import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-crear-grupo',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
  ],
  templateUrl: './crear-grupo.html',
  styleUrl: './crear-grupo.css',
})
export class CrearGrupo {
  form = new FormGroup({
    nombre: new FormControl('Programación web: Angular', Validators.required),
    curso: new FormControl('programacion-web', Validators.required),
    modalidad: new FormControl('virtual'),
    descripcion: new FormControl(
      'Construye componentes, servicios y rutas paso a paso con proyectos pequeños.',
      [Validators.required, Validators.maxLength(500)],
    ),
    metodo: new FormControl('participativo', Validators.required),
    capacidad: new FormControl(6, [Validators.required, Validators.min(2)]),
    publico: new FormControl(true),
  });

  cursos = [{ valor: 'programacion-web', texto: 'Programación web' }];

  modalidades = [
    { valor: 'virtual', texto: 'Virtual' },
    { valor: 'mixta', texto: 'Mixta' },
  ];

  metodos = [
    { valor: 'visual', texto: 'Visual', detalle: 'Esquemas y videos' },
    { valor: 'practico', texto: 'Práctico', detalle: 'Ejercicios' },
    { valor: 'participativo', texto: 'Participativo', detalle: 'Todos aportan' },
    { valor: 'debate', texto: 'Debate', detalle: 'Discutir ideas' },
  ];

  franjas = [{ dia: 'Sábado', horas: '10:00 – 12:00' }];
}
