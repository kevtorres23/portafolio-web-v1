import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProjectShowcase from "@/components/project/ProjectShowcase";
import { getProject, projects } from "@/lib/data/projects";
import { site } from "@/lib/data/site";

type Params = Promise<{ slug: string }>;

/** Genera las seis rutas estáticas en el build. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.detail.title ?? project.title} — ${site.name}`;
  const description = project.detail.sections[0]?.body ?? site.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: project.detail.cover }],
      locale: "es_MX",
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <ProjectShowcase project={project} />
      <Footer />
    </>
  );
}
