import clsx from "clsx";
import { For } from "solid-js";

type Props = {
  currentIndex: number;
  description: string[];
};

export const ServicesDescription = (props: Props) => {
  return (
    <div
      class={clsx(
        "fixed left-[10px]  bottom-[30px] w-[calc(100%-40px)] h-[120px] rounded-2xl overflow-hidden shadow-brand-img transition-transform glass-effect",
        props.currentIndex < 0 ? "-translate-x-[120%]" : "translate-x-0"
      )}
    >
      <For each={props.description}>
        {(item, index) => (
          <div
            class={clsx(
              "w-full h-full absolute top-0 left-0 transition-opacity flex items-center px-6",
              props.currentIndex === index() ? "opacity-100" : "opacity-0"
            )}
          >
            <p class="text-brand-text-dark">{item}</p>
          </div>
        )}
      </For>
    </div>
  );
};
