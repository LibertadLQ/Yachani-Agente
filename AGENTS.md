# Yachani

Aplicación web responsiva para formar grupos de estudio, compartir materiales y practicar con flashcards.

> Solo **Datos** y **Estructura** son de este proyecto. El resto es la política del profe y sirve para cualquier proyecto Angular con Figma.

## Datos
- Figma: https://www.figma.com/design/W64004HR3EyE3XCLJT8vqN/Untitled?node-id=0-1&t=1ofbJIFx8hkrXvOQ-1
- UI: Angular Material
- Gráficos: ninguno

## Cómo trabajar
Haz solo la pantalla que te pida. Léela en el Figma, impleméntala y verifica que compile.
Al terminar, lista los archivos creados y qué quedó pendiente.
No toques rutas, layouts ni tema.

## Estructura
Sigue la siguiente estructura:

```
src/app/
├── app.routes.ts                    # "/" redirige a /tutor/mis-grupos; cada grupo con loadChildren
├── layouts/                         # Un layout por grupo (menú lateral oscuro + cabecera)
│   ├── tutor-layout/
│   └── estudiante-layout/
└── pages/
    ├── tutor/                       # Grupo por tipo de usuario
    │   ├── tutor.routes.ts          # /tutor/...
    │   ├── mis-grupos/              # UI 1 · Figma: "Tutor · Grupos · Mis grupos"
    │   └── crear-grupo/             # UI 2 · Figma: "Tutor · Grupos · Crear grupo – Formulario"
    └── estudiante/
        ├── estudiante.routes.ts     # /estudiante/...
        ├── mis-mazos/               # UI 3 · Figma: "Mis mazos · Biblioteca"
        └── crear-mazo/              # UI 4 · Figma: "Mazo · Crear" (solo el paso 1; los pasos 2 y 3 quedan dibujados)
```
Un grupo es un conjunto de pantallas que comparten el mismo layout.

## Alcance
Solo dibuja cada pantalla y conéctala: formularios con sus campos, listas con `@for`,
errores con `@if` y enlaces con `routerLink`. La lógica se programa después, no ahora.

- **Sí:** `FormGroup` con validaciones simples y mensaje de error, botón deshabilitado si el formulario es inválido, listas con `@for` y datos de ejemplo fijos, navegación con `routerLink`.
- **No:** funciones, signals, `computed`, `inject()`, `Router`, servicios, modelos ni interfaces. No calcules, filtres ni busques, ni generes contenido por código. Usa los valores del Figma, tal cual.
- Contadores, chips y buscadores: déjalos dibujados, sin comportamiento.
- Si dudas, déjalo fijo.

## Reglas
- **Angular:** componentes standalone, un `.ts`, `.html` y `.css` por pantalla, nombres en minúsculas y guiones.
- **Control flow:** usa `@if`, `@for` (siempre con `track`) y `@switch`. Nunca `*ngIf`, `*ngFor` ni `ngSwitch`.
- **UI:** usa los componentes de la librería indicada en Datos en lugar de HTML a mano. No crees componentes ni carpeta `components/`: todo va dentro de cada página.
- **Librerías:** si Datos nombra una que no está instalada, instálala con `npm`. Úsalas en lugar de dibujar a mano: fechas con `mat-datepicker` y listas largas con `mat-paginator` (configúralos en la ruta que los usa).
- **Formularios:** Reactive Forms (`FormGroup`, `formControlName`). Todo lo que el usuario llena o elige (campos, chips, fechas, cantidades) va dentro de un `FormGroup`, nunca suelto. No uses Signal Forms: debe funcionar en Angular 21 y 22.
- **Validaciones:** simples y según el diseño (`required`, `email`, `minLength`). El mensaje va en el idioma del Figma, debajo del campo, al tocarlo (en Material, con `<mat-error>`). Cada campo con validación lleva su `<mat-error>` en el HTML, y el botón del formulario va con `[disabled]="form.invalid"`.
- **Navegación:** todos los botones y enlaces usan `routerLink`, también el que envía un formulario (va deshabilitado mientras sea inválido).
- **Diseño:** cada pantalla es una sola página responsiva (escritorio y móvil). Respeta el Figma y su frame «Guidelines» (Roboto, morados, menú lateral oscuro y contenido claro) y usa las variables de `styles.css`.
- **Pantallas alternativas** (error, vacío, rechazo): son estados de la misma pantalla, no rutas. Por ahora solo los errores de formulario.
- Si dudas, pregunta. No inventes pantallas.
