import Icon from "@/components/ui/Icon";
import type { Tool } from "@/lib/data/tools";

/**
 * Tarjeta de herramienta de la sección azul (nodo 1:80).
 * En el diseño el label usa Figtree SemiBold; aquí se usa Poppins SemiBold
 * con el mismo tracking, ya que el proyecto solo carga Poppins y Caveat.
 */
export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="flex flex-col justify-center gap-2.5 overflow-hidden rounded-[20px] border border-tool-border bg-tool p-5">
      <Icon
        src={tool.icon}
        width={tool.width}
        height={tool.height}
        alt={`Logo de ${tool.name}`}
      />
      <p className="text-[16px] font-semibold tracking-[-0.54px] text-white lg:text-[18px]">
        {tool.name}
      </p>
    </div>
  );
}
