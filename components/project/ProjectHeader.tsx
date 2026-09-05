import Icon from "@/components/ui/Icon";
import PillButton from "@/components/ui/PillButton";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/lib/data/projects";

/**
 * Cabecera del detalle de proyecto (nodo 1:134): botón "Volver" alineado a la
 * izquierda y, debajo, los chips de rol con el título centrado.
 */
export default function ProjectHeader({ project }: { project: Project }) {
  const title = project.detail.title ?? project.title;

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full items-start">
        <PillButton href="/#trabajo" variant="brand" size="back">
          {/* El asset apunta a la derecha; el diseño lo espeja para "volver". */}
          <Icon src="/icons/arrow-back.svg" width={16} height={15} className="-scale-x-100" />
          Volver
        </PillButton>
      </div>

      <div className="mt-6 flex flex-col items-center gap-2.5 text-center lg:mt-0">
        <ul className="flex flex-wrap items-start justify-center gap-2.5">
          {project.detail.tags.map((tag) => (
            <li key={tag.text}>
              <Tag tone={tag.tone}>{tag.text}</Tag>
            </li>
          ))}
        </ul>
        <h1 className="text-[36px] font-semibold leading-[1.2] tracking-[-1.08px] text-strong sm:text-[48px] sm:tracking-[-1.44px] lg:text-[64px] lg:leading-normal lg:tracking-[-1.92px]">
          {title}
        </h1>
      </div>
    </div>
  );
}
