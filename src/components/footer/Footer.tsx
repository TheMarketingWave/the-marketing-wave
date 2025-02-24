import { createAsync } from "@solidjs/router";
import { createEffect, createMemo, For, Show } from "solid-js";
import { getFooterContent } from "~/lib/contento";

export const Footer = () => {
  const footerContent = createAsync(() => getFooterContent());

  const extractFooterContent = createMemo(() => {
    if (footerContent()) {
      return {
        title: footerContent()?.fields?.label?.text,
        list: footerContent()?.fields?.list?.blocks?.map((block: any) => {
          return {
            label: block?.fields?.title?.text,
            icon: block?.fields?.icon?.assets?.[0]?.asset?.url,
          };
        }),
      };
    }

    return null;
  });

  return (
    <div class="w-full overflow-hidden bg-brand-purple">
      <img
        src="https://assets.contento.io/assets/s_01JcNqtcfRKHbFR892mjwTxdbj/footer-home.webp"
        class="w-full mt-20"
      />
      <Show when={extractFooterContent()}>
        <div class="mt-20 flex flex-col">
          <h3 class="text-4xl text-white w-[250px] mx-auto mb-10">
            {extractFooterContent()?.title}
          </h3>
          <div class="flex flex-col gap-4 mx-auto mb-10">
            <For each={extractFooterContent()?.list}>
              {(item) => (
                <div class="flex items-center gap-2">
                  <p>{item.label}</p>
                  <img src={item.icon} />
                </div>
              )}
            </For>
          </div>
        </div>
      </Show>
    </div>
  );
};
