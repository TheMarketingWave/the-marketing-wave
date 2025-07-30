import clsx from "clsx";
import { createSignal, onCleanup, onMount } from "solid-js";

import "./img-blur.css";

type Props = {
  src: string;
  srcLandscape?: string;
  class?: string;
  alt?: string;
};

export const ImgBlur = (props: Props) => {
  let ref!: HTMLImageElement;
  const [animate, setAnimate] = createSignal(false);

  onMount(() => {
    const onLoad = () => {
      setAnimate(true);
    };

    if (ref.complete) {
      onLoad();
    } else {
      ref.addEventListener("load", onLoad);
      onCleanup(() => ref?.removeEventListener("load", onLoad));
    }
  });

  return (
    <picture>
      {props.srcLandscape && (
        <source media="(min-width: 768px)" srcset={props.srcLandscape} />
      )}

      <img
        ref={ref}
        src={props.src}
        alt={props.alt}
        class={clsx(
          "w-full h-full object-cover",
          animate() && "img-blur",
          props.class
        )}
      />
    </picture>
  );
};
