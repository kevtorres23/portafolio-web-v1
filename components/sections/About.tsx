import ToolCard from "@/components/ui/ToolCard";
import { tools } from "@/lib/data/tools";

/** Sección azul "Me fascina el proceso..." (nodo 1:75). */
export default function About() {
  return (
    <section className="bg-brand px-5 py-20 lg:px-20 lg:py-[200px]">
      <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:gap-10">
        <div className="flex max-w-[564px] flex-col justify-center gap-6 text-white lg:gap-[50px]">
          <h2 className="text-[32px] font-medium leading-[1.4] tracking-[-1.2px] lg:text-[48px] lg:leading-[1.5] lg:tracking-[-2.4px]">
            Me fascina el proceso de <strong className="font-bold">diseñar</strong> algo
            para después <strong className="font-bold">construirlo</strong>.
          </h2>
          <p className="text-[16px] leading-[1.5] lg:text-[20px]">
            Mi pasión por el desarrollo web va desde el diseño de un producto hasta su
            construcción y despliegue final. Siempre trato de disfrutar este proceso lo
            más que me sea posible.
          </p>
        </div>

        <ul className="grid w-full grid-cols-2 gap-3 sm:gap-5 lg:w-auto lg:shrink-0 lg:grid-cols-2">
          {tools.map((tool) => (
            <li key={tool.name} className="lg:w-[272.5px]">
              <ToolCard tool={tool} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
