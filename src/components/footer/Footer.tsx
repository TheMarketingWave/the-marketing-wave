import { createAsync, query } from "@solidjs/router";
import { For, Show, Suspense } from "solid-js";
import { getFooterContent } from "~/lib/contento";

const getFooterContentApi = query(async () => {
  "use server";

  return getFooterContent();
}, "footer");

export const Footer = () => {
  const footerContent = createAsync(() => getFooterContentApi());

  const extractFooterContent = () => {
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
  };

  return (
    <div class="w-full overflow-hidden bg-brand-purple">
      <Suspense>
        <Show when={extractFooterContent()}>
          {(content) => (
            <div class="mt-20 flex flex-col">
              <h3 class="text-4xl text-white w-[250px] mx-auto mb-10 text-center">
                {content()?.title}
              </h3>
              <div class="flex gap-4 mx-auto mb-10">
                <For each={content()?.list}>
                  {(item) => (
                    <div class="flex items-center gap-2">
                      {/* <p>{item.label}</p> */}
                      <img src={item.icon} />
                    </div>
                  )}
                </For>
              </div>
            </div>
          )}
        </Show>
      </Suspense>
      <img
        src="https://assets.contento.io/assets/s_01JcNqtcfRKHbFR892mjwTxdbj/footer-home.webp"
        class="w-full mb-20"
      />
    </div>
  );
};
