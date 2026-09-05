/**
 * Los seis proyectos del portafolio.
 *
 * Cada entrada alimenta dos vistas:
 * - la tarjeta de "Mi trabajo previo" en la Portada (`title`, `date`, `role`, `image`)
 * - la pantalla de detalle en `/proyectos/[slug]` (`detail`)
 *
 * Los textos de `detail.sections` son los definitivos del archivo de Figma.
 * Editarlos aquí basta para actualizar la página, sin tocar los componentes.
 */

export type Tone = "green" | "blue";

export type ProjectTag = {
  text: string;
  tone: Tone;
};

export type ProjectLink = {
  /** Texto visible, p. ej. "artex-store.vercel.app". */
  label: string;
  href: string;
};

export type ProjectSection = {
  heading: string;
  /** Párrafos separados por una línea en blanco, tal como en el diseño. */
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
  figma?: ProjectLink;
  /** Bloques "Descripción", "Objetivo", "Resultados"… */
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
/* Datos compartidos entre proyectos.                                        */
/* ------------------------------------------------------------------------- */

const DEFAULT_STACK = ["Figma", "React", "Tailwind CSS"];

const TAG_FRONTEND: ProjectTag = { text: "Desarrollador Front-end", tone: "green" };
const TAG_UIUX: ProjectTag = { text: "Diseñador UI/UX", tone: "blue" };

/** Enlace al archivo de Figma del proyecto; el rótulo es común a los seis. */
function figmaLink(href: string): ProjectLink {
  return { label: "figma.com", href };
}

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
      website: { label: "artex-store.vercel.app", href: "https://artex-store.vercel.app/" },
      figma: figmaLink(
        "https://www.figma.com/design/y8WLlL5nPLwmsoicMfOxP3/Artex-Bordados?node-id=0-1",
      ),
      sections: [
        {
          heading: "Descripción",
          body: "Artex Bordados es una empresa dedicada a la personalización de textiles con bordados, impresiones en vinil y sublimación. Este proyecto consistió en el diseño y desarrollo de una página web para este negocio.\n\nFue el primer proyecto real en el que tuve la oportunidad de participar. Gracias a él, obtuve nuevos conocimientos en el área del diseño y desarrollo web.",
        },
        {
          heading: "Objetivo",
          body: "El objetivo de la página web de Artex era aumentar las ventas generales de la tienda al ofrecer a los clientes una nueva manera de adquirir bordados, viniles o impresiones. De esta manera, Artex tendría un mayor flujo de clientes e interesados.",
        },
        {
          heading: "Resultados",
          body: "Diseñé e implementé en código las interfaces con React, asegurando que los puntos principales de la página funcionaran en su totalidad, lo que incluye el carrito de compras, el checkout y la personalización de una prenda.\n\nEl frontend pudo adaptarse correctamente con el backend y la página web pasó a la fase de despliegue correctamente.",
        },
      ],
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
      figma: figmaLink(
        "https://www.figma.com/design/6JO3OJXgGnX6Tgi01crKPW/Sadasi-Management-System?node-id=93-463",
      ),
      sections: [
        {
          heading: "Descripción",
          body: "Grupo Sadasi es una empresa mexicana especializada en el desarrollo de conjuntos habitacionales con más de 40 años de experiencia. Este proyecto consiste en un sistema web dedicado a facilitar la gestión, búsqueda y actualización de los proyectos mantenidos por la compañía.",
        },
        {
          heading: "Objetivo",
          body: "El objetivo era implementar una solución digital que les permitiera al equipo de Sadasi administrar eficientemente sus conjuntos habitacionales y clientes.",
        },
        {
          heading: "Resultados",
          body: "Las interfaces diseñadas fueron correctamente implementadas en código, en conjunto con el resto del equipo del proyecto. Se siguieron las mejores prácticas y pasaron a formar parte del sistema integral utilizado por los miembros y colaboradores de Sadasi.",
        },
      ],
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
      figma: figmaLink(
        "https://www.figma.com/design/q0dZGu8RM46raNQwbibhbg/Correos-de-M%C3%A9xico?node-id=1-2498",
      ),
      sections: [
        {
          heading: "Descripción",
          body: "Tuve la oportunidad de colaborar en el área de diseño UI/UX junto a otros compañeros, para el proyecto de Correos de México el cual consistió en un rediseño tanto visual como funcional de la plataforma oficial del servicio postal mexicano. Mi aportación principal fue en el diseño de los módulos correspondientes a los administradores y vendedores de la plataforma, para los que diseñé paneles web y móviles.",
        },
        {
          heading: "Objetivo",
          body: "El objetivo de este proyecto era construir un sistema integral para el personal administrativo y operativo de Correos de México. En el área de diseño UI/UX, se buscaba una plataforma y una aplicación móvil que gestionara eficazmente los procesos que el personal de la empresa realiza con frecuencia para optimizar sus actividades lo mejor posible.",
        },
        {
          heading: "Resultados",
          body: "Diseñé interfaces tanto para la aplicación móvil como para el sitio web, siguiendo la línea visual ya establecida en Correos de México. Asimismo, mi enfoque en este trabajo fue mantener una experiencia de usuario fluida e intuitiva, de manera que cualquier persona dentro de la compañía pudiera usarla con total facilidad.",
        },
      ],
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
      website: {
        label: "hemisferios-clinica.com",
        href: "https://www.hemisferios-clinica.com/",
      },
      figma: figmaLink(
        "https://www.figma.com/design/odQ5eXk7ePOTURfikYaQxX/Hemisferios-Web-System?node-id=549-26050",
      ),
      sections: [
        {
          heading: "Descripción",
          body: "Hemisferios es una clínica de terapia de comunicación y lenguaje enfocada en niños. Este sistema funciona tanto como una página web como un sistema de citas que los administradores del centro pueden utilizar para diversas tareas.\n\nLa página permite a los usuarios realizar una cita en el centro, mientras que el sistema permite monitorear, además de citas, pacientes, terapeutas y comentarios de contacto.",
        },
        {
          heading: "Objetivo",
          body: "En Hemisferios, buscaban una solución que les permitiera tener más presencia en línea y que las personas pudieran así agendar una cita sin necesidad de acudir a las oficinas. Asimismo, el personal administrativo necesitaba un espacio que les permitiera llevar el control de sus procesos y actividades administrativas de una manera rápida y eficaz.",
        },
        {
          heading: "Resultados",
          body: "La fase de diseño UI/UX y la implementación en código de las pantallas fue un éxito. Se siguió la línea de diseño y elementos de marca ya establecidos por Hemisferios, por lo que el resultado está conformado por una página web llamativa y fácil de usar para usuarios y nuevos clientes, y en un sistema web eficiente que les permite al personal de Hemisferios llevar un control operativo de una manera más ágil.",
        },
      ],
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
      website: {
        label: "aguamia-purificadora.vercel.app",
        href: "https://aguamia-purificadora.vercel.app/",
      },
      figma: figmaLink(
        "https://www.figma.com/design/OyubYoxIV8FDCeT9zHdhFY/AguaM%C3%ADa-Web?node-id=0-1",
      ),
      sections: [
        {
          heading: "Descripción",
          body: "AguaMía es una purificadora de agua establecida en la ciudad de Durango, Durango. Su rápido crecimiento y su afluencia continua fueron los indicadores de que también necesitaban expandirse digitalmente.",
        },
        {
          heading: "Objetivo",
          body: "Este proyecto busca crear un espacio web en el que las personas puedan conocer más a profundidad a la purificadora, así como también adquirir un plan familiar o realizar un pedido de agua embotellada.",
        },
        {
          heading: "Resultados",
          body: "El diseño UI/UX del sitio web fue construido con un enfoque en dar a conocer a profundidad lo que hay debajo de AguaMía. Los clientes pueden leer información sobre los tanques, filtros purificadores y procesos internos, esto con el objetivo de brindarles la total confianza de que el agua que se llevan a su casa es de la mejor calidad.",
        },
      ],
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
      /* El host del despliegue es demasiado largo para la columna de 150px, así
         que aquí el rótulo describe el enlace en vez de mostrar el dominio. */
      website: {
        label: "Ver demo",
        href: "https://rentapp-demo-kevtorres23s-projects.vercel.app/owner/login",
      },
      figma: figmaLink("https://www.figma.com/design/CuYFUU3aVY4Ks9YrMVIsP4/RentApp?node-id=2238-9269"),
      sections: [
        {
          heading: "Descripción",
          body: "RentApp es un sistema integral de rentas que une a inquilinos y a propietarios en un solo lugar. Le permite a los usuarios inquilinos pagar su renta con facilidad y acceder a información valiosa de su contrato. Por el otro lado, les permite a los usuarios arrendadores generar contratos, llevar un control de sus pagos de renta y actualizar cualquier información importante de sus arrendamientos.",
        },
        {
          heading: "Objetivo",
          body: "El objetivo de RentApp es proporcionar un espacio fácil de utilizar, intuitivo, dinámico y adaptable. Dado que el proyecto consiste tanto en un sistema web como en su versión de aplicación móvil, se buscaba también crear un sistema de diseño que fuera capaz de adaptarse de la mejor manera a estas dos presentaciones o versiones.",
        },
        {
          heading: "Resultados",
          body: "La versión web de RentApp está próxima a publicarse para que cualquier persona pueda utilizarla. La versión móvil está aprobada y en desarrollo, y se planea desplegarse en la Play Store y en la App Store. El diseño UI/UX pudo completarse en tiempo y forma, y se entregó un sistema de diseño completo que mantuviera la consistencia visual en toda la plataforma.\n\nNota: el enlace de la demo abre el inicio de sesión de propietario. Puedes probar el modo propietario con el usuario roberto.",
        },
      ],
    },
  },
];

/** Busca un proyecto por su slug de URL. */
export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
