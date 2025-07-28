import clsx from "clsx";
import { createSignal, onCleanup, onMount } from "solid-js";

import "./img-blur.css";

type Props = {
  src: string;
  class?: string;
};

export const ImgBlur = (props: Props) => {
  let ref!: HTMLImageElement;
  const [animate, setAnimate] = createSignal(false);

  const onLoad = () => {
    setAnimate(true);
  };

  onMount(() => {
    if (ref.complete) {
      setAnimate(true);
    } else {
      ref.addEventListener("load", onLoad);
    }
  });

  onCleanup(() => {
    ref?.removeEventListener("load", onLoad);
  });

  return (
    <img
      ref={ref}
      class={clsx(
        "w-full h-full object-cover",
        animate() && "img-blur",
        props.class
      )}
      src={props.src}
    />
  );
};
