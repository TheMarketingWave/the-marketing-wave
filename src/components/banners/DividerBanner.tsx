import clsx from "clsx";
import { createSignal, onCleanup, onMount } from "solid-js";

type Props = {
  mobileImg?: string;
  desktopImg?: string;
  mobileGraphicImg?: string;
};

export const DividerBanner = (props: Props) => {
  const [position, setPosition] = createSignal<"top" | "fixed" | "bottom">(
    "top"
  );
  let observer: IntersectionObserver;
  let refContainer: HTMLDivElement;
  let topPoint: HTMLDivElement;
  let bottomPoint: HTMLDivElement;

  let containerIsIntersecting = false;
  let topIsIntersecting = false;
  let bottomIsIntersecting = false;

  const setCssImgPosition = () => {
    if (topIsIntersecting && containerIsIntersecting && !bottomIsIntersecting) {
      setPosition("top");
      return;
    }

    if (!topIsIntersecting && containerIsIntersecting && bottomIsIntersecting) {
      setPosition("bottom");
      return;
    }

    if (containerIsIntersecting) {
      setPosition("fixed");
    }
  };

  const getCssPositions = () => {
    switch (position()) {
      case "bottom":
        return "absolute bottom-0";
      case "fixed":
        return "fixed top-0";
      default:
        return "absolute top-0";
    }
  };

  const handleIntersections: IntersectionObserverCallback = (entries) => {
    for (const element of entries) {
      if (element.target === refContainer) {
        containerIsIntersecting = element.isIntersecting;
      }
      if (element.target === topPoint) {
        topIsIntersecting = element.isIntersecting;
      }
      if (element.target === bottomPoint) {
        bottomIsIntersecting = element.isIntersecting;
      }
    }

    setCssImgPosition();
  };

  onMount(() => {
    observer = new IntersectionObserver(handleIntersections, {
      root: null,
      threshold: 0,
    });

    if (refContainer && topPoint && bottomPoint) {
      observer.observe(refContainer);
      observer.observe(topPoint);
      observer.observe(bottomPoint);
    }
  });

  onCleanup(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return (
    <div
      id="banner-container"
      class="w-full flex flex-col mt-24 overflow-hidden relative"
      ref={(e) => (refContainer = e)}
    >
      <div id="top-point" ref={(e) => (topPoint = e)} />
      <picture>
        {props.desktopImg && (
          <source media="(min-width: 768px)" srcset={props.desktopImg} />
        )}

        <img
          src={props.mobileImg}
          class={clsx("w-full h-screen object-cover left-0", getCssPositions())}
        />
      </picture>
      <div class="w-full h-screen overflow-hidden relative glass-effect">
        <img
          src={props.mobileGraphicImg}
          class="absolute top-0 left-1/2 w-full h-full object-contain"
        />
      </div>
      <div class="w-full h-screen" />
      <div id="bottom-point" ref={(e) => (bottomPoint = e)} />
    </div>
  );
};
