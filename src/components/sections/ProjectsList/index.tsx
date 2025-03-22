import { useSearchParams } from "@solidjs/router";
import { For } from "solid-js";
import { Project } from "~/types";
import { ProjectItem } from "./ProjectItem";
import { ContentData } from "@gocontento/client";

type Props = {
  projectsData: ContentData | undefined;
};

export const ProjectsList = (props: Props) => {
  const [searchParams] = useSearchParams();

  const getQueryTags = (): string[] =>
    (searchParams.tags as string)?.split(",") ?? ["All"];

  const getProjectsList = () => {
    const content = props.projectsData;

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
        .filter((project) => {
          if (getQueryTags().includes("All")) {
            return true;
          }

          for (const filter of getQueryTags()) {
            if (project.tags.includes(filter)) {
              return true;
            }
          }

          return false;
        });
    }

    return [];
  };

  return (
    <div class="w-full">
      <div class="w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-3 box-border">
        <For each={getProjectsList()}>
          {(project, index) => <ProjectItem {...project} />}
        </For>
      </div>
    </div>
  );
};
