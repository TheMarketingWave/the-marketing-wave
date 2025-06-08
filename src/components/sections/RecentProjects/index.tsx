import { A, createAsync } from "@solidjs/router";
import { For, Suspense } from "solid-js";
import { FullButton } from "~/components/buttons/FullButton";
import { Project } from "~/types";
import { RecentProject } from "./RecentProject";
import { getProjectsApi } from "../../../lib/api";

export const RecentProjects = () => {
  const projectsApi = createAsync(() => getProjectsApi());

  const getRecentProjects = () => {
    const content = projectsApi();

    if (content?.fields?.projects?.blocks?.length) {
      return (content.fields.projects.blocks as any[])
        .map(
          (project: any) =>
            ({
              name: project.name,
              tags:
                project?.fields?.tags?.list.map((tag: any) => tag.text) ?? [],
              recent: project?.fields?.recent?.is_on ?? false,
              url: project?.fields?.page_url?.text,
              thumbnail: project?.fields?.thumbnail?.assets?.[0]?.asset?.url,
            } as Project)
        )
        .filter((project) => project.recent);
    }

    return [];
  };

  return (
    <div class="flex flex-col mt-[80px] gap-8">
      <h3 class="text-4xl text-brand-text-dark text-center">Recent Projects</h3>
      <div class="flex gap-4 overflow-x-auto overflow-y-hidden hide-scroll-bar">
        <Suspense>
          <For each={getRecentProjects()}>
            {(project) => <RecentProject {...project} />}
          </For>
        </Suspense>
      </div>

      <A href="/projects" class="self-center">
        <FullButton class="self-center">See all projects</FullButton>
      </A>
    </div>
  );
};
