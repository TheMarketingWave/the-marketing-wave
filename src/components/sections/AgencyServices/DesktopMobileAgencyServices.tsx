import { A } from "@solidjs/router";
import clsx from "clsx";
import { createSignal, For, onCleanup, onMount } from "solid-js";
import { BasicButton } from "~/components/buttons/BasicButton";

type Props = {
  names: any[];
  imgs: string[];
  descriptions: { text: string; list_link: string }[];
};

export const DesktopMobileAgencyServices = (props: Props) => {
  const [selectedServiceIndex, setSelectedServiceIndex] = createSignal(0);
  const [inView, setInView] = createSignal(false);
  let ref!: HTMLDivElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          console.log(entry);

          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.3 }
    );

    if (ref) observer.observe(ref);

    onCleanup(() => {
      observer.disconnect();
    });
  });

  return (
    <div class="bg-brand-green w-full relative hidden md:flex" ref={ref}>
      <div class="flex-1 flex flex-col pr-16">
        <div class="w-full h-[400px] relative">
          <For each={props.imgs}>
            {(img, index) => (
              <img
                src={img}
                class={clsx(
                  "absolute -top-[30px] -left-[10px] w-full h-full object-cover shadow-brand-img rounded-4xl rounded-l-none",
                  inView()
                    ? selectedServiceIndex() === index()
                      ? "scale-fade-in"
                      : "scale-fade-out"
                    : "opacity-0"
                )}
              />
            )}
          </For>
        </div>
        <div class="max-w-[600px] ml-auto  relative w-full h-[200px]">
          <For each={props.descriptions}>
            {(description, index) => (
              <div
                class={clsx(
                  "absolute top-0 left-0 gap-6 flex flex-col pl-10",
                  selectedServiceIndex() === index()
                    ? "scale-fade-in"
                    : "scale-fade-out"
                )}
              >
                <p class="text-white text-2xl font-normal">
                  {description.text}
                </p>
                <A href={description.list_link}>
                  <BasicButton>Read More</BasicButton>
                </A>
              </div>
            )}
          </For>
        </div>
      </div>
      <div class="flex flex-1">
        <div class="flex flex-col flex-1 max-w-[600px] mr-auto pr-10">
          <img
            class={clsx(
              "w-[282px] h-[200px] object-cover rounded-4xl shadow-brand-img mx-auto -translate-y-[60px] transition-opacity",
              inView() ? "opacity-100" : "opacity-0"
            )}
            src="https://assets.contento.io/assets/s_01JcNqtcfRKHbFR892mjwTxdbj/services-random-img.jpg"
          ></img>
          <For each={props.names}>
            {(item, index) => (
              <h3
                class={clsx(
                  "py-4 text-2xl text-right cursor-pointer relative ",
                  "transition-all transform-gpu duration-500 origin-right",
                  selectedServiceIndex() === index()
                    ? "scale-[2] text-brand-green-accent z-0"
                    : "scale-100 text-white z-10"
                )}
                id={`services-title=${index()}`}
                onClick={() => setSelectedServiceIndex(index())}
              >
                {item}
              </h3>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};
