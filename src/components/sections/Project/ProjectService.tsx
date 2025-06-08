import clsx from "clsx";

export type ProjectServiceData = {
  img: string;
  title: string;
  description: string;
  img_divider: string;
};

type Props = {
  service: ProjectServiceData;
  index: number;
};

export const ProjectService = (props: Props) => {
  return (
    <div class="flex flex-col gap-8">
      <div class="m-6">
        <img
          src={props.service.img}
          class="aspect-square w-full shadow-brand-img rounded-2xl object-cover"
        />
      </div>
      <div class="flex flex-col gap-5">
        <p>{props.service.title}</p>
        <div
          class="rich_text_container"
          innerHTML={props.service.description}
        />
        <img
          src={props.service.img_divider}
          class={clsx(
            "aspect-video shadow-brand w-[150px] rounded-2xl object-cover",
            props.index % 2 === 0 ? "ml-0" : "ml-auto"
          )}
        />
      </div>
    </div>
  );
};
