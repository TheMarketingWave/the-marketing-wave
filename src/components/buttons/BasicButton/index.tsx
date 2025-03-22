import { createSignal, JSX } from "solid-js";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type Props = {
  children: JSX.Element;
  class?: ClassValue;
  onClick?: (e: MouseEvent) => void;
};

export const BasicButton = (props: Props) => {
  const [pressed, setPressed] = createSignal(false);

  const mergeCssClass = () => {
    return twMerge(
      clsx(
        "p-3 bg-white  text-brand-orange rounded-lg outline-none",
        pressed() ? "translate-x-[4px] translate-y-[4px]" : "shadow-brand",
        props.class
      )
    );
  };

  return (
    <button
      class={mergeCssClass()}
      onMouseDown={() => {
        setPressed(true);
      }}
      onMouseUp={() => {
        setPressed(false);
      }}
      onTouchStart={() => {
        setPressed(true);
      }}
      onTouchEnd={() => {
        setPressed(false);
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
