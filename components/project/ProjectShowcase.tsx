import ProjectCover from "@/components/project/ProjectCover";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectInfo from "@/components/project/ProjectInfo";
import ProjectSidebar from "@/components/project/ProjectSidebar";
import type { Project } from "@/lib/data/projects";

/**
 * Plantilla completa del detalle de proyecto (frames "Artex", "Correos de
 * México", …, nodo 1:131). Las seis pantallas comparten esta estructura y
 * solo cambian los datos.
 *
 * Medidas del diseño a 1440px: márgenes laterales de 100px, 66px entre el
 * navbar y el botón "Volver", 50px entre secciones y antes del footer.
 */
export default function ProjectShowcase({ project }: { project: Project }) {
  const { detail } = project;
  const title = detail.title ?? project.title;

  return (
    <main className="flex flex-col gap-10 px-5 pb-10 pt-8 sm:px-10 lg:gap-[50px] lg:px-[100px] lg:pb-[50px] lg:pt-[66px]">
      <section className="flex flex-col gap-8 lg:gap-10">
        <ProjectHeader project={project} />
        <ProjectCover src={detail.cover} alt={`Vista principal del proyecto ${title}`} />
      </section>

      <section className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[120px] xl:gap-[250px]">
        <ProjectSidebar detail={detail} />
        <ProjectInfo sections={detail.sections} />
      </section>

      <ProjectGallery images={detail.gallery} projectTitle={title} />
    </main>
  );
}
