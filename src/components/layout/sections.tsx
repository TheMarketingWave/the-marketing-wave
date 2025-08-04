import clsx from "clsx";
import { JSX } from "solid-js";

type SectionProps = {
  children: JSX.Element;
  class?: string;
};

export const Section = (props: SectionProps) => {
  return (
    <div class={clsx("w-full flex relative", props.class)}>
      <div class="w-full max-w-[1000px] mx-auto relative">{props.children}</div>
    </div>
  );
};
