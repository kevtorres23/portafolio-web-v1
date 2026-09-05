# Portafolio web — Kevin Torres

Portafolio personal construido con **Next.js 15 (App Router)**, **TypeScript** y **Tailwind CSS v4**, a partir del [diseño en Figma](https://www.figma.com/design/cgOCRaKy99twjRhZimy9Yt/Portafolio-Frontend-%7C-Kevin-Torres).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Estructura

```
app/
  layout.tsx      Fuentes (Poppins, Caveat) y metadata
  page.tsx        Composición de la Portada
  globals.css     Tokens de diseño en @theme
components/
  layout/         Navbar, Footer
  sections/       Hero, About, Work, Contact
  ui/             PillButton, ProjectCard, ToolCard, Icon, AccentText
lib/
  data/           Contenido (proyectos, herramientas, datos del sitio)
  hooks/          useScaleToFit
public/
  images/         Retrato, miniaturas de proyectos, logos
  icons/          SVG exportados de Figma
```

## Tokens de color

Definidos con `@theme` en [`app/globals.css`](app/globals.css) y usados como
utilidades de Tailwind (`bg-brand`, `text-muted`, `border-line`, …). Cada uno
lleva un comentario con su variable equivalente en Figma.

## Notas de implementación

- **Hero**: dos variantes reales. `HeroDesktop` reproduce el lienzo de 1440×728
  con posicionamiento absoluto y lo escala con `useScaleToFit` (solo ≥1024px,
  donde el factor nunca baja de ~0.71). `HeroMobile` usa un layout apilado con
  tamaños propios legibles. Se alternan por CSS, no por JavaScript, para que
  ambas se rendericen en servidor.
- **Tipografías**: solo Poppins y Caveat. Los labels de las Tool Cards usan
  Poppins SemiBold en lugar del Figtree del diseño.
- **Iconos**: todos son assets exportados de Figma en `public/icons/`, con su
  color ya incluido en el SVG.

## Pendiente

Las rutas `/proyectos/[slug]` a las que enlazan las tarjetas aún no existen;
se añadirán cuando estén listas las pantallas de detalle en Figma.
