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
  proyectos/[slug]/page.tsx   Detalle de proyecto (6 rutas estáticas)
  globals.css     Tokens de diseño en @theme
  icon.svg        Favicon: la "k" de Poppins Bold sobre el azul de marca
components/
  layout/         Navbar, Footer
  sections/       Hero, About, Work, Contact
  project/        ProjectShowcase y sus piezas (Header, Cover, Sidebar, Info, Gallery)
  ui/             PillButton, ProjectCard, ToolCard, Tag, Icon, AccentText
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
- **Retrato del hero**: `public/images/kevin.png` es un recorte sin fondo que se
  coloca entero sobre la mancha azul (`public/icons/hero-blob.svg`), sin caja
  de recorte ni sombra; solo lo corta por abajo el borde del lienzo. El SVG de
  la mancha se exportó con la rotación del diseño ya aplicada para no tener que
  recalcularla en CSS.
- **Tipografías**: solo Poppins y Caveat. Los labels de las Tool Cards usan
  Poppins SemiBold en lugar del Figtree del diseño.
- **Iconos**: todos son assets exportados de Figma en `public/icons/`, con su
  color ya incluido en el SVG.

- **Detalle de proyecto**: las seis pantallas comparten la plantilla
  `ProjectShowcase`; solo cambian los datos de `detail` en
  [`lib/data/projects.ts`](lib/data/projects.ts). Los textos de Description /
  Objective / Results salen del archivo de Figma: editarlos ahí basta para
  actualizar la página. Un `\n\n` dentro de `body` equivale al renglón en
  blanco del diseño y se renderiza como un párrafo aparte. `website` y `figma`
  son opcionales y su bloque desaparece si se omiten (Sadasi y Correos de
  México no tienen sitio publicado, así que solo muestran el de Figma).

## Variables de entorno

- `NEXT_PUBLIC_SITE_URL` — URL pública del sitio, usada para resolver las
  imágenes Open Graph. En local se usa `http://localhost:3000`.
