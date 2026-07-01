import React from "react";
import { projectsData } from "@/data/projectsData";
import { notFound } from "next/navigation";
import ProjectDetails from "@/components/products/ProjectDetails";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => String(p.id) === resolvedParams.id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} - Case Study`,
    description: project.description.slice(0, 150) + "...",
  };
}

export default async function ProjectDetailsPage({ params }: Props) {
  const resolvedParams = await params;

  const project = projectsData.find((p) => String(p.id) === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
