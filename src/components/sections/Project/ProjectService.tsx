import clsx from "clsx";
import { ProjectMedia } from "./ProjectMedia";

export type ProjectServiceData = {
  img: string;
  title: string;
  description: string;
  img_divider: string;
  media: string[];
};

type Props = {
  service: ProjectServiceData;
  index: number;
};

export const ProjectService = (props: Props) => {
  return (
    <div class="flex flex-col gap-8 sm:flex-row">
      <div class="flex-1/3">
        <img
          src={props.service.img}
          class="aspect-square w-full shadow-brand-img rounded-2xl object-cover"
        />
      </div>
      <div class="flex flex-col gap-5 flex-2/3">
        <p>{props.service.title}</p>
        <div
          class="rich_text_container"
          innerHTML={props.service.description}
        />
        <img
          src={props.service.img_divider}
          class={clsx(
            "aspect-video shadow-brand w-[150px] rounded-2xl object-cover ml-auto"
          )}
        />
      </div>
    </div>
  );
};
