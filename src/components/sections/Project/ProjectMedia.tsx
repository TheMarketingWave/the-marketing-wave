import { For } from "solid-js";

type ProjectMediaProps = {
  imgs: string[];
};

export const ProjectMedia = (props: ProjectMediaProps) => {
  return (
    <div class="bg-brand-purple py-12 px-6 text-white">
      <p class="mb-2 text-2xl">Content</p>
      <p class="mb-6"> Checkout some of our work</p>
      <div class="flex overflow-x-auto gap-6 pb-5 pr-5">
        <For each={props.imgs}>
          {(url) => (
            <img
              src={url}
              class="shrink-0 aspect-portrait w-[300px] object-cover rounded-4xl shadow-brand-pink"
            />
          )}
        </For>
      </div>
    </div>
  );
};
