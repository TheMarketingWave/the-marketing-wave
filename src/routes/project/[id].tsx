import { createAsync, useParams } from "@solidjs/router";
import { createEffect, For, Suspense } from "solid-js";
import { ProjectServiceData } from "~/components/sections/Project/ProjectService";
import { ProjectServices } from "~/components/sections/Project/ProjectServices";
import { getProjectsApi } from "~/lib/api";

export const route = {
  preload: () => getProjectsApi(),
};

export default function Projects() {
  const projects = createAsync(() => getProjectsApi());
  const { id } = useParams();

  const getProject = () => {
    return projects()?.fields?.projects?.blocks?.find((block: any) =>
      block?.fields?.page_url?.text?.includes(id)
    );
  };

  const getProjectName = () => getProject()?.name;
  const getThumbnail = () =>
    getProject()?.fields?.thumbnail?.assets?.[0]?.asset?.url;

  const getServices = () =>
    getProject()?.fields?.tags?.list?.map((tag: any) => tag.text);

  const getDescription = () => getProject()?.fields?.description?.text;

  const getImgDivider = () =>
    getProject()?.fields?.img_divider?.assets?.[0]?.asset?.url;

  const getContext = () => getProject()?.fields?.context?.text;

  const getProjectServices = () =>
    getProject()?.fields?.project_sections?.blocks?.map((block: any) => {
      return {
        img: block?.fields?.imgs?.assets?.[0]?.asset?.url,
        title: block?.fields?.title?.text,
        description: block?.fields?.description?.text,
        img_divider: block?.fields?.imgs?.assets?.[1]?.asset?.url,
      };
    }) as ProjectServiceData[];

  createEffect(() => {
    console.log(getProject());
  });

  return (
    <main class="w-full relative overflow-x-hidden mb-8">
      <div class="pt-32 px-3 pb-4">
        <p class="text-brand-text-dark">PORTFOLIO</p>
        <Suspense>
          <h1 class="text-brand-text-dark text-6xl">{getProjectName()}</h1>
        </Suspense>
      </div>

      <Suspense>
        <div class="w-full aspect-square gap-16 flex flex-col">
          <img src={getThumbnail()} class="w-full h-full object-cover" />
          <div class="flex flex-col px-5 ">
            <p class="text-xs font-light">SERVICES</p>
            <For each={getServices()}>{(service: any) => <p>{service}</p>}</For>
          </div>
          <div class="px-5 rich_text_container" innerHTML={getDescription()} />
          <img src={getImgDivider()} class="w-full object-cover" />
          <div class="flex flex-col px-5 gap-3">
            <p class="">CONTEXT</p>
            <div class="rich_text_container" innerHTML={getContext()} />
          </div>
          <ProjectServices projectServices={getProjectServices()} />
        </div>
      </Suspense>
    </main>
  );
}
