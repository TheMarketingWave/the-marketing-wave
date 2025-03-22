import { A } from "@solidjs/router";

type Props = {
  thumbnail: string;
  name: string;
  tags: string[];
  url: string;
};

export const ProjectItem = (props: Props) => {
  const tags = () => props.tags.join(" • ");

  return (
    <A href={props.url} class="w-full flex flex-col gap-6">
      <img
        src={props.thumbnail}
        class="w-full object-cover aspect-square rounded-lg shadow-brand-img"
      />
      <div class="flex flex-col gap-3 px-2 text-brand-text-dark">
        <h4 class="text-3xl">{props.name}</h4>
        <p class="text-sm font-light">{tags()}</p>
      </div>
    </A>
  );
};
