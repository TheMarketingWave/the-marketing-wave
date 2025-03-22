import { For } from "solid-js";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { useSearchParams } from "@solidjs/router";
import { ContentData } from "@gocontento/client";
import _ from "lodash";
import { FloatingFilter } from "./FloatingFilter";

type Props = {
  projectsData: ContentData | undefined;
};

export const ProjectFilter = (props: Props) => {
  let anchor: HTMLDivElement | null = null;

  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryTags = (): string[] =>
    (searchParams.tags as string)?.split(",") ?? ["All"];

  const setFilters = (newTag: string) => {
    if (newTag === "All") {
      setSearchParams({
        tags: null,
      });
      return;
    }

    const currentTags = getQueryTags();

    let newTags: string[] = [];

    if (currentTags.includes(newTag)) {
      newTags = currentTags.filter((tag) => tag !== newTag);
    } else {
      newTags = [...currentTags, newTag];
    }

    if (newTags.includes("All") && newTags.length === 1) {
      setSearchParams({ tags: null });
    } else if (newTags.includes("All") && newTags.length > 1) {
      setSearchParams({
        tags: newTags.filter((e) => e !== "All").join(","),
      });
    } else {
      setSearchParams({
        tags: newTags.join(","),
      });
    }
  };

  const getProjectTags = (): string[] => {
    const content = props.projectsData;

    if (content?.fields?.projects?.blocks?.length) {
      return [
        "All",
        ..._.uniq(
          _.flatten(
            (content.fields.projects.blocks as any[]).map(
              (project: any) =>
                project?.fields?.tags?.list.map((tag: any) => tag.text) ??
                ([] as string[])
            )
          )
        ),
      ];
    }

    return [];
  };

  return (
    <div ref={(el) => (anchor = el)} class="flex flex-wrap gap-3 px-3 pb-4">
      <For each={getProjectTags()}>
        {(tag) => (
          <p
            class={twMerge(
              clsx(
                "text-brand-text-dark bg-white px-3 py-2 text-xs rounded",
                getQueryTags().includes(tag) && "bg-brand-orange text-white"
              )
            )}
            onClick={() => setFilters(tag)}
          >
            {tag}
          </p>
        )}
      </For>
      <FloatingFilter
        anchor={anchor}
        tags={getProjectTags()}
        setFilters={setFilters}
        getQueryTags={getQueryTags}
      />
    </div>
  );
};
