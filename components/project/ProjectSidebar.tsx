import type { ReactNode } from "react";

import Icon from "@/components/ui/Icon";
import Tag from "@/components/ui/Tag";
import type { ProjectDetail, ProjectLink } from "@/lib/data/projects";

/** Un bloque de la barra lateral: encabezado (con icono opcional) y contenido. */
function SidebarBlock({
  heading,
  icon,
  children,
}: {
  heading: string;
  icon?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-w-[140px] flex-col gap-[5px]">
      <div className="flex items-center gap-[5px]">
        {icon && <Icon src={icon} size={21} />}
        <h2 className="text-[19px] font-semibold tracking-[-0.57px] text-strong lg:text-[21px] lg:tracking-[-0.63px]">
          {heading}
        </h2>
      </div>
      {children}
    </div>
  );
}

function ExternalLink({ link, className }: { link: ProjectLink; className: string }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-[15px] font-medium transition-opacity hover:opacity-70 ${className}`}
    >
      {link.label}
    </a>
  );
}

/**
 * Columna lateral del detalle (nodo 1:146): Tech Stack, fecha y enlaces.
 * En escritorio es una columna fija de 150px; en móvil los bloques fluyen en
 * filas.
 */
export default function ProjectSidebar({ detail }: { detail: ProjectDetail }) {
  return (
    <aside className="flex flex-wrap gap-x-10 gap-y-8 lg:w-[150px] lg:shrink-0 lg:flex-col lg:gap-10">
      <SidebarBlock heading="Tech Stack">
        {/* En el diseño "Figma" y "React" comparten fila; con Poppins (más ancha
            que Figtree) hacen falta ~190px, así que la lista puede sobresalir de
            la columna de 150px sin desplazar el texto de la derecha. */}
        <ul className="flex flex-wrap gap-[5px] lg:w-[190px]">
          {detail.stack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
      </SidebarBlock>

      <SidebarBlock heading="Date">
        <p className="text-[15px] text-prose">{detail.period}</p>
      </SidebarBlock>

      {detail.website && (
        <SidebarBlock heading="Website" icon="/icons/globe.svg">
          <ExternalLink link={detail.website} className="text-brand-green" />
        </SidebarBlock>
      )}

      {detail.github && (
        <SidebarBlock heading="GitHub" icon="/icons/github-dark.svg">
          <ExternalLink link={detail.github} className="text-brand" />
        </SidebarBlock>
      )}
    </aside>
  );
}
