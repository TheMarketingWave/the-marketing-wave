import { createAsync, useParams } from "@solidjs/router";
import { For, Suspense } from "solid-js";
import { ProjectMedia } from "~/components/sections/Project/ProjectMedia";
import { ProjectServiceData } from "~/components/sections/Project/ProjectService";
import { ProjectServices } from "~/components/sections/Project/ProjectServices";
import { RecentProjects } from "~/components/sections/RecentProjects";
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
        media:
          block?.fields?.project_media?.blocks?.[0]?.fields?.media?.assets?.map(
            ({ asset }: any) => {
              return asset?.url;
            }
          ),
      };
    }) as ProjectServiceData[];

  const getProjectMedia = () =>
    getProject()?.fields?.project_media?.blocks?.[0]?.fields?.media?.assets?.map(
      ({ asset }: any) => {
        return asset?.url;
      }
    ) as string[];

  return (
    <Suspense>
      <main class="w-full">
        <div class="w-full max-w-[1000px] flex flex-col mx-auto">
          <p class="text-brand-text-dark mt-[150px] px-4">PORTFOLIO</p>

          <div class="flex flex-col sm:flex-row">
            <div class="flex-1/2">
              <h1 class="text-brand-text-dark text-6xl p-4">
                {getProjectName()}
              </h1>
              <img
                src={getThumbnail()}
                class="w-full h-auto object-cover aspect-square"
              />
            </div>

            <div class="flex-1/2 flex flex-col gap-6">
              <div class="flex flex-col px-5">
                <p class="text-xs font-light mt-6 sm:mt-[100px]">SERVICES</p>
                <For each={getServices()}>
                  {(service: any) => <p>{service}</p>}
                </For>
              </div>
              <div
                class="px-5 rich_text_container"
                innerHTML={getDescription()}
              />
            </div>
          </div>

          <img src={getImgDivider()} class="w-full object-cover mt-6" />

          <div class="w-full gap-8 flex flex-col">
            <div class="flex flex-col p-4 gap-3">
              <p class="">CONTEXT</p>
              <div class="rich_text_container" innerHTML={getContext()} />
            </div>
            <ProjectServices projectServices={getProjectServices()} />
          </div>
        </div>
        <div class="mt-16">
          <ProjectMedia imgs={getProjectMedia()} />
        </div>
        <div class="mb-16">
          <RecentProjects />
        </div>
      </main>
    </Suspense>
  );
}
