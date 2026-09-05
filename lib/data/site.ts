/** Datos generales del sitio: identidad, enlaces y textos del hero. */

export const site = {
  name: "Kevin Torres",
  email: "kevintu236@gmail.com",
  description:
    "Portafolio de Kevin Torres, diseñador UI/UX y desarrollador web frontend. Diseño y construyo experiencias digitales.",
  cv: "/cv-kevin-torres.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/kevintorres",
    github: "https://github.com/kevintorres",
    discord: "https://discord.com/users/kevintorres",
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
