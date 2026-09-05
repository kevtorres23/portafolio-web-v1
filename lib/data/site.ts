/** Datos generales del sitio: identidad, enlaces y textos del hero. */

export const site = {
  name: "Kevin Torres",
  email: "kevintu236@gmail.com",
  description:
    "Portafolio de Kevin Torres, diseñador UI/UX y desarrollador web frontend. Diseño y construyo experiencias digitales.",
  /* Lo sirve `public/cv-kevin-torres.pdf`; el archivo debe existir ahí para que
     funcionen el botón del Navbar y el enlace del Footer. */
  cv: "/cv-kevin-torres.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/kevin-torres-urbina/",
    github: "https://github.com/kevtorres23",
    discord: "https://discord.com/users/764633985280114728",
  },
} as const;

/**
 * Las tres anotaciones manuscritas del hero.
 * `parts` permite colorear palabras sueltas sin duplicar el texto entre las
 * variantes de escritorio y móvil.
 */
export type HeroAnnotation = {
  id: string;
  /** Línea superior, en Caveat. */
  script: string;
  /** Línea inferior, en Poppins Bold, con acentos por palabra. */
  parts: { text: string; accent?: "blue" | "green" }[];
};

export const heroAnnotations: HeroAnnotation[] = [
  {
    id: "diseno",
    script: "pasión por el",
    parts: [
      { text: "diseño " },
      { text: "gráfico", accent: "blue" },
      { text: " y " },
      { text: "UI/UX", accent: "blue" },
    ],
  },
  {
    id: "desarrollo",
    script: "amor por el",
    parts: [{ text: "desarrollo web " }, { text: "frontend", accent: "green" }],
  },
  {
    id: "experiencias",
    script: "¡me apasiona crear",
    parts: [{ text: "experiencias", accent: "green" }, { text: " digitales!" }],
  },
];
