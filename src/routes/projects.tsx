import { createAsync } from "@solidjs/router";
import { Suspense } from "solid-js";
import { ProjectsList } from "~/components/sections/ProjectsList";
import { ProjectFilter } from "~/components/sections/ProjectsList/ProjectsFilter";
import { getProjectsApi } from "~/lib/api";

export const route = {
  preload: () => {
    getProjectsApi();
  },
};

export default function Projects() {
  const projects = createAsync(() => getProjectsApi());

  return (
    <main class="w-full relative overflow-x-hidden mb-8">
      <Suspense>
        <div class="w-full max-w-[1000px] flex flex-col mx-auto">
          <h1 class="text-brand-text-dark text-6xl pt-32 px-3 pb-4">
            Portofolio
          </h1>
          <ProjectFilter projectsData={projects()} />
        </div>

        <ProjectsList projectsData={projects()} />
      </Suspense>
    </main>
  );
}
