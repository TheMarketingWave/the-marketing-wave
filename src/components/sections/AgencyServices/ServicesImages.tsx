import clsx from "clsx";
import { For } from "solid-js";

type Props = {
  currentIndex: number;
  images: string[];
};

export const ServicesImages = (props: Props) => {
  return (
    <div
      class={clsx(
        "fixed md:absolute right-[20px] md:left-0 bottom-[20px] w-[80%] aspect-square rounded-2xl overflow-hidden shadow-brand-img transition-transform transform-gpu",
        props.currentIndex < 0 ? "translate-x-[120%] " : "translate-x-0 "
      )}
    >
      <For each={props.images}>
        {(item, index) => (
          <img
            src={item}
            class={clsx(
              "w-full h-full object-cover absolute top-0 left-0 transition-opacity",
              props.currentIndex === index() ? "opacity-100" : "opacity-0"
            )}
          />
        )}
      </For>
    </div>
  );
};
