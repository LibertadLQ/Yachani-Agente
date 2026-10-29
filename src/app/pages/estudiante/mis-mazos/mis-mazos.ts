import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-mis-mazos',
  imports: [RouterLink, MatButtonModule, MatCardModule, MatIconModule, MatProgressBarModule],
  templateUrl: './mis-mazos.html',
  styleUrl: './mis-mazos.css',
})
export class MisMazos {
  mazos = [
    {
      titulo: 'Fórmulas de derivadas',
      cantidad: '4 tarjetas',
      descripcion: 'Reglas y ejemplos para tu próximo repaso.',
      autorYEstado: 'Leicy Cahuana · Publicado',
      progresoTexto: '3 de 4 revisadas · 75 %',
      progreso: 75,
    },
    {
      titulo: 'Límites laterales',
      cantidad: '12 tarjetas',
      descripcion: 'Repasa propiedades y límites de funciones.',
      autorYEstado: 'Leicy Cahuana · Publicado',
      progresoTexto: '8 de 12 revisadas · 67 %',
      progreso: 67,
    },
    {
      titulo: 'Repaso de integrales',
      cantidad: '0 tarjetas',
      descripcion: 'Continúa agregando preguntas a tu borrador.',
      autorYEstado: 'Leicy Cahuana · Borrador',
      progresoTexto: 'Todavía no hay tarjetas',
      progreso: 0,
    },
  ];
}
