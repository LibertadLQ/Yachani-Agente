import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-crear-mazo',
  imports: [ReactiveFormsModule, RouterLink, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule],
  templateUrl: './crear-mazo.html',
  styleUrl: './crear-mazo.css',
})
export class CrearMazo {
  form = new FormGroup({
    titulo: new FormControl('Fórmulas de derivadas', [Validators.required, Validators.maxLength(120)]),
    descripcion: new FormControl('Reglas y ejemplos para tu próximo repaso.', Validators.maxLength(500)),
  });

  pasos = [
    { numero: '1', texto: 'Datos del mazo', actual: true },
    { numero: '2', texto: 'Tarjetas', actual: false },
    { numero: '3', texto: 'Compartir', actual: false },
  ];
}
