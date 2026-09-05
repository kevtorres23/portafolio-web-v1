import Image from "next/image";
import Link from "next/link";

import Icon from "@/components/ui/Icon";
import type { Project } from "@/lib/data/projects";

/**
 * Tarjeta de proyecto (símbolo "Card", nodo 1:249).
 * Toda la tarjeta es un enlace; el botón circular es decorativo y reacciona
 * al hover del contenedor mediante `group`.
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group flex flex-col gap-6 rounded-[30px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:gap-[35px]"
    >
      <div
        className={`relative h-[220px] w-full overflow-hidden rounded-[30px] sm:h-[300px] lg:h-[385px] ${
          project.needsBorder ? "border border-black/10" : ""
        }`}
      >
        <Image
          src={project.image}
          alt={`Vista previa del proyecto ${project.title}`}
          fill
          /* Sin optimizar: PNG original a resolución completa, para que
             aguante el zoom. `sizes` queda como documentación del ancho real
             —la rejilla es (100vw − 160 de padding − 70 de gap) / 2, así que
             la tarjeta crece con el viewport— y con el 56vw extra que cubre
             el ancho que `object-cover` recorta en capturas 16:9. */
          unoptimized
          sizes="(min-width: 1024px) calc(56vw - 128px), 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col justify-center gap-2 lg:gap-3">
          <p className="text-[20px] font-semibold tracking-[-0.6px] text-ink lg:text-[24px]">
            {project.title}
          </p>

          <div className="flex items-center gap-[5px]">
            <Icon src="/icons/calendar.svg" size={20} />
            <p className="text-[15px] text-muted lg:text-[18px]">{project.date}</p>
          </div>

          <p className="text-[15px] text-strong lg:text-[18px]">{project.role}</p>
        </div>

        <span
          aria-hidden
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand p-2.5 transition-colors duration-200 group-hover:bg-brand-deep lg:p-3"
        >
          <Icon src="/icons/arrow-right.svg" size={35} />
        </span>
      </div>
    </Link>
  );
}
