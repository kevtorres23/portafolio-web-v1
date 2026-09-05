/**
 * Los seis proyectos del portafolio.
 *
 * Cada entrada alimenta dos vistas:
 * - la tarjeta de "Mi trabajo previo" en la Portada (`title`, `date`, `role`, `image`)
 * - la pantalla de detalle en `/proyectos/[slug]` (`detail`)
 *
 * Los textos de `detail.sections`, los enlaces y las fechas largas son
 * PLACEHOLDERS tomados del diseño de Figma; basta con editarlos aquí para que
 * se reflejen en la página, sin tocar los componentes.
 */

export type Tone = "green" | "blue";

export type ProjectTag = {
  text: string;
  tone: Tone;
};

export type ProjectLink = {
  /** Texto visible, p. ej. "artexbordados.com". */
  label: string;
  href: string;
};

export type ProjectSection = {
  heading: string;
  body: string;
};

export type ProjectDetail = {
  /** Título de la cabecera si difiere del de la tarjeta (p. ej. "Clínica Hemisferios"). */
  title?: string;
  /** Chips de color sobre el título. */
  tags: ProjectTag[];
  /** Imagen principal (1240×600 en el diseño). */
  cover: string;
  /** Tres imágenes de demostración: dos en fila y una a lo ancho. */
  gallery: [string, string, string];
  stack: string[];
  /** Fecha en formato largo, tal como aparece en la barra lateral. */
  period: string;
  website?: ProjectLink;
  github?: ProjectLink;
  /** Bloques "Description", "Objective", "Results"… */
  sections: ProjectSection[];
};

export type Project = {
  slug: string;
  title: string;
  /** Rango de fechas tal como aparece junto al ícono de calendario. */
  date: string;
  role: string;
  image: string;
  /**
   * Algunas miniaturas son casi blancas y necesitan un borde tenue para
   * separarse del fondo (así está definido en el diseño).
   */
  needsBorder?: boolean;
  detail: ProjectDetail;
};

/* ------------------------------------------------------------------------- */
/* Placeholders compartidos (texto del diseño). Sustituir por proyecto.      */
/* ------------------------------------------------------------------------- */

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const placeholderSections: ProjectSection[] = [
  { heading: "Description", body: LOREM },
  { heading: "Objective", body: LOREM },
  { heading: "Results", body: LOREM },
];

const DEFAULT_STACK = ["Figma", "React", "Tailwind CSS"];

const TAG_FRONTEND: ProjectTag = { text: "Desarrollador Front-end", tone: "green" };
const TAG_UIUX: ProjectTag = { text: "Diseñador UI/UX", tone: "blue" };

/** Rutas de imágenes de un proyecto a partir de su prefijo en `public/`. */
function assets(prefix: string) {
  const base = `/images/proyectos/${prefix}`;
  return {
    image: `${base}.png`,
    cover: `${base}-cover.png`,
    gallery: [`${base}-pres1.png`, `${base}-pres2.png`, `${base}-pres3.png`] as [
      string,
      string,
      string,
    ],
  };
}

const artex = assets("artex");
const sadasi = assets("sadasi");
const correos = assets("correos");
const hemisferios = assets("hemisferios");
const aguamia = assets("aguamia");
const rentapp = assets("rentapp");

export const projects: Project[] = [
  {
    slug: "artex-bordados",
    title: "Artex Bordados",
    date: "sep - dic de 2024",
    role: "Diseñador UI/UX y desarrollador front-end",
    image: artex.image,
    detail: {
      tags: [TAG_FRONTEND, TAG_UIUX],
      cover: artex.cover,
      gallery: artex.gallery,
      stack: DEFAULT_STACK,
      period: "Septiembre - Diciembre de 2024",
      website: { label: "artexbordados.com", href: "https://artexbordados.com" },
      github: { label: "github.com", href: "https://github.com/kevintorres" },
      sections: placeholderSections,
    },
  },
  {
    slug: "grupo-sadasi",
    title: "Grupo Sadasi",
    date: "enero - abril de 2025",
    role: "Diseñador UI/UX y desarrollador front-end",
    image: sadasi.image,
    detail: {
      tags: [TAG_FRONTEND, TAG_UIUX],
      cover: sadasi.cover,
      gallery: sadasi.gallery,
      stack: DEFAULT_STACK,
      period: "Enero - Abril de 2025",
      website: { label: "sadasi.com", href: "https://www.sadasi.com" },
      github: { label: "github.com", href: "https://github.com/kevintorres" },
      sections: placeholderSections,
    },
  },
  {
    slug: "correos-de-mexico",
    title: "Correos de México",
    date: "septiembre - diciembre de 2025",
    role: "Diseñador UI/UX",
    image: correos.image,
    detail: {
      tags: [TAG_UIUX],
      cover: correos.cover,
      gallery: correos.gallery,
      stack: ["Figma"],
      period: "Septiembre - Diciembre de 2025",
      website: { label: "correosdemexico.gob.mx", href: "https://www.correosdemexico.gob.mx" },
      sections: placeholderSections,
    },
  },
  {
    slug: "hemisferios",
    title: "Hemisferios",
    date: "enero - abril de 2026",
    role: "Diseñador UI/UX y desarrollador front-end",
    image: hemisferios.image,
    needsBorder: true,
    detail: {
      title: "Clínica Hemisferios",
      tags: [TAG_FRONTEND, TAG_UIUX],
      cover: hemisferios.cover,
      gallery: hemisferios.gallery,
      stack: DEFAULT_STACK,
      period: "Enero - Abril de 2026",
      website: { label: "clinicahemisferios.com", href: "https://clinicahemisferios.com" },
      github: { label: "github.com", href: "https://github.com/kevintorres" },
      sections: placeholderSections,
    },
  },
  {
    slug: "aguamia",
    title: "AguaMía",
    date: "julio - agosto de 2026",
    role: "Diseñador UI/UX y desarrollador front-end",
    image: aguamia.image,
    detail: {
      tags: [TAG_FRONTEND, TAG_UIUX],
      cover: aguamia.cover,
      gallery: aguamia.gallery,
      stack: DEFAULT_STACK,
      period: "Julio - Agosto de 2026",
      website: { label: "aguamia.com", href: "https://aguamia.com" },
      github: { label: "github.com", href: "https://github.com/kevintorres" },
      sections: placeholderSections,
    },
  },
  {
    slug: "rentapp",
    title: "RentApp",
    date: "abril - agosto de 2026",
    role: "Diseñador general y desarrollador front-end.",
    image: rentapp.image,
    detail: {
      tags: [TAG_FRONTEND, { text: "Diseñador general", tone: "blue" }],
      cover: rentapp.cover,
      gallery: rentapp.gallery,
      stack: DEFAULT_STACK,
      period: "Abril - Agosto de 2026",
      website: { label: "rentapp.com", href: "https://rentapp.com" },
      github: { label: "github.com", href: "https://github.com/kevintorres" },
      sections: placeholderSections,
    },
  },
];

/** Busca un proyecto por su slug de URL. */
export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
