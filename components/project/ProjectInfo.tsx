import type { ProjectSection } from "@/lib/data/projects";

/** Bloques de texto del detalle: Description, Objective, Results (nodo 1:172). */
export default function ProjectInfo({ sections }: { sections: ProjectSection[] }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-10 lg:gap-[60px]">
      {sections.map((section) => (
        <section key={section.heading} className="flex flex-col gap-2.5">
          <h2 className="text-[26px] font-semibold tracking-[-0.78px] text-strong lg:text-[32px] lg:tracking-[-0.96px]">
            {section.heading}
          </h2>
          {/* En el diseño algunos bloques se parten en dos párrafos separados
              por un renglón en blanco; en los datos eso es un `\n\n`. El `gap`
              equivale a esa línea vacía (una interlínea completa). */}
          <div className="flex flex-col gap-6 lg:gap-[27px]">
            {section.body.split("\n\n").map((paragraph) => (
              <p key={paragraph} className="text-[16px] leading-[1.5] text-prose lg:text-[18px]">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
