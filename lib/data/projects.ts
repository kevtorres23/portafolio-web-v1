/** Los seis proyectos de la sección "Mi trabajo previo". */

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
};

export const projects: Project[] = [
  {
    slug: "artex-bordados",
    title: "Artex Bordados",
    date: "sep - dic de 2024",
    role: "Diseñador UI/UX y desarrollador front-end",
    image: "/images/proyectos/artex.png",
  },
  {
    slug: "grupo-sadasi",
    title: "Grupo Sadasi",
    date: "enero - abril de 2025",
    role: "Diseñador UI/UX y desarrollador front-end",
    image: "/images/proyectos/sadasi.png",
  },
  {
    slug: "correos-de-mexico",
    title: "Correos de México",
    date: "septiembre - diciembre de 2025",
    role: "Diseñador UI/UX",
    image: "/images/proyectos/correos.png",
  },
  {
    slug: "hemisferios",
    title: "Hemisferios",
    date: "enero - abril de 2026",
    role: "Diseñador UI/UX y desarrollador front-end",
    image: "/images/proyectos/hemisferios.png",
    needsBorder: true,
  },
  {
    slug: "aguamia",
    title: "AguaMía",
    date: "julio - agosto de 2026",
    role: "Diseñador UI/UX y desarrollador front-end",
    image: "/images/proyectos/aguamia.png",
  },
  {
    slug: "rentapp",
    title: "RentApp",
    date: "abril - agosto de 2026",
    role: "Diseñador general y desarrollador front-end.",
    image: "/images/proyectos/rentapp.png",
  },
];
