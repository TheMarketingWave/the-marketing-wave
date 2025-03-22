import clsx from "clsx";
import { TbFilterEdit } from "solid-icons/tb";
import { createSignal, For, onCleanup, onMount } from "solid-js";
import { twMerge } from "tailwind-merge";
import { BasicButton } from "~/components/buttons/BasicButton";

type Props = {
  anchor: HTMLDivElement | null;
  tags: string[];
  setFilters: (tag: string) => void;
  getQueryTags: () => string[];
};

export const FloatingFilter = (props: Props) => {
  const [showList, setShowList] = createSignal(false);
  const [showFloatingFilterButton, setShowFloatingFilterButton] =
    createSignal(false);

  let observer: IntersectionObserver;

  onMount(() => {
    observer = new IntersectionObserver(
      (entries) => {
        const [anchorEntry] = entries;

        if (anchorEntry.isIntersecting) {
          setShowFloatingFilterButton(false);
          setShowList(false);
        } else {
          setShowFloatingFilterButton(true);
        }
      },
      { threshold: 1 }
    );

    if (props.anchor) observer.observe(props.anchor);
  });

  onCleanup(() => {
    if (props.anchor && observer) observer.unobserve(props.anchor);
  });

  return (
    <div>
      <div
        class={twMerge(
          clsx(
            "fixed right-4 bottom-4 glass-effect p-4 flex flex-col gap-1 rounded-md translate-x-[calc(100%+50px)] transition-transform",
            showList() && "translate-x-0"
          )
        )}
      >
        <For each={props.tags}>
          {(tag) => (
            <button
              class={twMerge(
                clsx(
                  "block text-brand-text-dark px-3 py-2 text-xs rounded text-right",
                  props.getQueryTags().includes(tag) &&
                    "bg-brand-orange text-white"
                )
              )}
              onClick={() => props.setFilters(tag)}
            >
              {tag}
            </button>
          )}
        </For>
      </div>

      <BasicButton
        class={twMerge(
          clsx(
            "fixed right-4 bottom-4 translate-y-0 translate-x-[calc(100%+50px)] transition-transform",
            showList() && "-translate-y-[310px]",
            showFloatingFilterButton() && "translate-x-0"
          )
        )}
        onClick={() => setShowList(!showList())}
      >
        <TbFilterEdit class="text-3xl" />
      </BasicButton>
    </div>
  );
};
