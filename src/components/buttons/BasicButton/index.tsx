import { createSignal, JSX } from "solid-js";
import clsx, { ClassValue } from "clsx";

type Props = {
  children: JSX.Element;
  class?: ClassValue;
  onClick?: (e: MouseEvent) => void;
};

export const BasicButton = (props: Props) => {
  const [pressed, setPressed] = createSignal(false);

  return (
    <button
      class={clsx(
        "p-3 bg-white  text-brand-orange rounded-lg",
        pressed() ? "translate-x-[4px] translate-y-[4px]" : "shadow-brand",
        props.class
      )}
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
