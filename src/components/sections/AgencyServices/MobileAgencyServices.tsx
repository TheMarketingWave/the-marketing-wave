import clsx from "clsx";
import { createSignal, For, onCleanup, onMount } from "solid-js";
import { SectionTitle } from "~/components/titles/SectionTitle";
import { ServicesImages } from "./ServicesImages";
import { ServicesDescription } from "./ServicesDesc";

import "./animation.css";

type Props = {
  names: any[];
  imgs: string[];
  descriptions: { text: string; list_link: string }[];
};

export const MobileAgencyServices = (props: Props) => {
  const titlesRef: HTMLHeadingElement[] = [];
  const [selectedServiceIndex, setSelectedServiceIndex] = createSignal(-1);

  const handleIntersections: IntersectionObserverCallback = (entries) => {
    const intoView = entries
      .filter((entry) => entry.isIntersecting)
      .map((entry) => entry.target.id);
    const [_1, idIntoView] = intoView[0]?.split("=") ?? [];
    const outView = entries
      .filter((entry) => !entry.isIntersecting)
      .map((entry) => entry.target.id);
    const [_2, idOutView] = outView[0]?.split("=") ?? [];

    if (idIntoView) {
      setSelectedServiceIndex(Number(idIntoView));
    } else if (idOutView && Number(idOutView) === selectedServiceIndex()) {
      setSelectedServiceIndex(-1);
    }
  };

  onMount(() => {
    const isDesktop = window.innerWidth >= 768;
    if (isDesktop) {
      return;
    }

    const observer = new IntersectionObserver(handleIntersections, {
      root: null,
      rootMargin: "-40% 0px -60% 0px",
      threshold: 0,
    });

    titlesRef.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    onCleanup(() => {
      observer.disconnect();
    });
  });

  return (
    <div class="bg-brand-green w-full relative md:hidden flex flex-col">
      <div class="flex flex-col px-4 py-4 pb-8 relative mt-[1px] w-full">
        <SectionTitle
          text="SERVICES"
          class="absolute top-0 left-1/2 title-slide-in box-border text-shadow"
        />
        <For each={props.names}>
          {(item, index) => (
            <h3
              ref={(e) => {
                titlesRef[index()] = e;
              }}
              class={clsx(
                "text-white py-6 text-2xl md:text-right",
                "transition-transform origin-left md:origin-right",
                selectedServiceIndex() >= 0 &&
                  selectedServiceIndex() === index()
                  ? "agency-services__highlight"
                  : null
              )}
              id={`services-title=${index()}`}
            >
              {item}
            </h3>
          )}
        </For>
      </div>
      <ServicesImages
        images={props.imgs}
        currentIndex={selectedServiceIndex()}
      />
      <ServicesDescription
        description={props.descriptions}
        currentIndex={selectedServiceIndex()}
      />
    </div>
  );
};
