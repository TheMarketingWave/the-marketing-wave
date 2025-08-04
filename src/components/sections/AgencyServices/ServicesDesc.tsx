import { A } from "@solidjs/router";
import clsx from "clsx";
import { For } from "solid-js";
import { BasicButton } from "~/components/buttons/BasicButton";

type Props = {
  currentIndex: number;
  description: { text: string; list_link: string }[];
};

export const ServicesDescription = (props: Props) => {
  return (
    <div
      class={clsx(
        "fixed left-[10px] bottom-[30px] w-[calc(100%-40px)] h-[160px] rounded-2xl overflow-hidden shadow-brand-img transition-transform glass-effect transform-gpu",
        props.currentIndex < 0 ? "-translate-x-[120%] " : "translate-x-0"
      )}
    >
      <For each={props.description}>
        {(item, index) => (
          <div
            class={clsx(
              "w-full h-full absolute top-0 left-0 transition-opacity flex items-center p-6",
              props.currentIndex === index() ? "opacity-100" : "opacity-0"
            )}
          >
            <p class="text-brand-text-dark">{item.text}</p>
            <A href={item.list_link}>
              <BasicButton>Check It Out</BasicButton>
            </A>
          </div>
        )}
      </For>
    </div>
  );
};
