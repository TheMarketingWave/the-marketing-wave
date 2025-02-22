import { createAsync } from "@solidjs/router";
import { createEffect, createSignal, For } from "solid-js";
import { BasicButton } from "~/components/buttons/BasicButton";
import { FullButton } from "~/components/buttons/FullButton";
import { getProjects } from "~/lib/contento";
import { Project } from "~/types";
import { RecentProject } from "./RecentProject";

export const RecentProjects = () => {
  const projectsApi = createAsync(() => getProjects());

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
        <For each={getRecentProjects()}>
          {(project, index) => <RecentProject {...project} />}
        </For>
      </div>

      <FullButton class="self-center">See all projects</FullButton>
    </div>
  );
};
