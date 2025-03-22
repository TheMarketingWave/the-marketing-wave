import { createAsync } from "@solidjs/router";
import { ProjectsList } from "~/components/sections/ProjectsList";
import { ProjectFilter } from "~/components/sections/ProjectsList/ProjectsFilter";
import { getFooterContent, getProjects } from "~/lib/contento";

export const route = {
  preload: () => {
    getProjects();
    getFooterContent();
  },
};

export default function Projects() {
  const projectsData = createAsync(() => getProjects());

  return (
    <main class="w-full relative overflow-x-hidden mb-8">
      <h1 class="text-brand-text-dark text-6xl pt-32 px-3 pb-4">Portofolio</h1>
      <ProjectFilter projectsData={projectsData()} />
      <ProjectsList projectsData={projectsData()} />
    </main>
  );
}
