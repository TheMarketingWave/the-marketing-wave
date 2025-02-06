import { createAsync } from "@solidjs/router";
import { createSignal, For, onCleanup, onMount, Show } from "solid-js";

import { getAgencyServices } from "~/lib/contento";
import { ServicesImages } from "./ServicesImages";
import clsx from "clsx";
import { SectionTitle } from "~/components/titles/SectionTitle";
import { ServicesDescription } from "./ServicesDesc";

export const AgencyServices = () => {
  const titlesRef: HTMLHeadingElement[] = [];
  const [selectedServiceIndex, setSelectedServiceIndex] = createSignal(-1);
  const agencyServices = createAsync(() => getAgencyServices());

  const getDescriptionList = () => {
    const services = agencyServices();
    if (services?.fields.list?.blocks) {
      return services.fields.list.blocks.map(({ fields }: any) => {
        return fields?.short_description?.text ?? "";
      });
    }

    return [];
  };

  const getImagesList = () => {
    const services = agencyServices();
    if (services?.fields.list?.blocks) {
      return services.fields.list.blocks.map(({ fields }: any) => {
        return fields?.img?.assets?.[0]?.asset.url ?? "";
      });
    }

    return [];
  };

  const getNames = () => {
    const services = agencyServices();
    if (services?.fields.list?.blocks) {
      return services.fields.list.blocks.map(({ name }: any) => {
        return name ?? "";
      });
    }

    return [];
  };

  let observer: IntersectionObserver;

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
    observer = new IntersectionObserver(handleIntersections, {
      root: null,
      rootMargin: "-40% 0px -60% 0px",
      threshold: 0,
    });

    titlesRef.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });
  });

  onCleanup(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return (
    <Show when={getImagesList()}>
      <div class="flex flex-col bg-brand-green px-4 py-4 relative mt-[50px]">
        <SectionTitle
          text="SERVICES"
          class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(100%+20px)] box-border text-shadow"
        />
        <For each={getNames()}>
          {(item, index) => (
            <h3
              ref={(e) => {
                titlesRef[index()] = e;
              }}
              class={clsx(
                "py-6",
                "text-2xl",
                "transition-transform",
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
        images={getImagesList()}
        currentIndex={selectedServiceIndex()}
      />
      <ServicesDescription
        description={getDescriptionList()}
        currentIndex={selectedServiceIndex()}
      />
    </Show>
  );
};
