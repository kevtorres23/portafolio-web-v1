import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data/projects";

/** Sección "Mi trabajo previo" (nodo 1:84). */
export default function Work() {
  return (
    <section id="trabajo" className="scroll-mt-20 px-5 py-16 lg:px-20 lg:py-20">
      <header className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center lg:gap-10">
        <h2 className="text-[32px] font-semibold tracking-[-1.2px] text-ink lg:text-[48px] lg:tracking-[-2.4px]">
          Mi trabajo previo
        </h2>
        <p className="text-[16px] text-body lg:w-[477px] lg:text-right lg:text-[20px]">
          Aquí encontrarás mis trabajos más destacados. ¡Desliza hacia abajo!
        </p>
      </header>

      <ul className="mt-10 grid grid-cols-1 gap-12 lg:mt-[50px] lg:grid-cols-2 lg:gap-[70px]">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
