# Yachani · Reto AGENTS.md

Proyecto Angular hecho para el reto del curso: aplicar un archivo **AGENTS.md** y generar **4 pantallas (UI)** a partir de un diseño en Figma, con ayuda de un agente de IA (Claude Code conectado a Figma).

Yachani es una aplicación web responsiva para formar grupos de estudio, compartir materiales y practicar con flashcards.

## Entregables

| Entregable | Dónde está |
|---|---|
| Repositorio | Este repositorio |
| Figma | [Yachani – Reto](https://www.figma.com/design/W64004HR3EyE3XCLJT8vqN/Untitled?node-id=0-1) |
| Política AGENTS.md | [`AGENTS.md`](AGENTS.md), en la raíz del proyecto |

## Política AGENTS.md

El archivo `AGENTS.md` es la política que sigue el agente de IA al generar cada pantalla. Tiene dos partes:

- **Del proyecto:** *Datos* (link del Figma y librería de UI) y *Estructura* (carpetas, rutas y las 4 pantallas).
- **Política general:** *Cómo trabajar*, *Alcance* y *Reglas*. Por ejemplo: una pantalla por pedido, componentes standalone, `@if` / `@for`, Reactive Forms con validaciones, Angular Material, `routerLink` y diseño responsivo, sin servicios ni lógica todavía.

## Las 4 pantallas

| # | Pantalla | Ruta | Rol |
|---|---|---|---|
| UI 1 | Mis grupos | `/tutor/mis-grupos` | Tutor |
| UI 2 | Crear grupo | `/tutor/crear-grupo` | Tutor |
| UI 3 | Mis mazos | `/estudiante/mis-mazos` | Estudiante |
| UI 4 | Crear mazo | `/estudiante/crear-mazo` | Estudiante |

Cada pantalla tiene versión web y móvil. Cada rol tiene su propio layout con menú lateral.

## Tecnologías

- Angular 22 (componentes standalone)
- Angular Material
- Figma (diseño y guía de estilos) + Figma MCP
- Claude Code (agente de IA)

## Cómo ejecutarlo

Necesitas Node.js instalado.

```bash
npm install
npx ng serve -o
```

Se abre en `http://localhost:4200`.

## Estructura

```
src/app/
├── app.routes.ts
├── layouts/
│   ├── tutor-layout/
│   └── estudiante-layout/
└── pages/
    ├── tutor/        (mis-grupos, crear-grupo)
    └── estudiante/   (mis-mazos, crear-mazo)
```