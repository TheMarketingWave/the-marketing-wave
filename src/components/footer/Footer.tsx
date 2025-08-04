import { A, createAsync, query } from "@solidjs/router";
import { For, Show, Suspense } from "solid-js";
import { getFooterContent } from "~/lib/contento";
import { TbMapPinFilled } from "solid-icons/tb";

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
    <div class="w-full overflow-hidden bg-brand-purple flex flex-col py-20  relative">
      <Suspense>
        <Show when={extractFooterContent()}>
          {(content) => (
            <div class=" flex flex-col md:absolute top-20 right-20">
              <h3 class="text-4xl text-white w-[250px] mx-auto mb-10 text-center">
                {content()?.title}
              </h3>
              <div class="flex gap-4 mx-auto mb-10">
                <For each={content()?.list}>
                  {(item) => (
                    <div class="flex items-center gap-2">
                      <img src={item.icon} />
                    </div>
                  )}
                </For>
              </div>
            </div>
          )}
        </Show>
      </Suspense>
      <picture>
        <source
          media="(min-width: 768px)"
          srcset=" https://assets.contento.io/assets/s_01JcNqtcfRKHbFR892mjwTxdbj/Graphics.webp"
        />
        <img
          src="https://assets.contento.io/assets/s_01JcNqtcfRKHbFR892mjwTxdbj/footer-home.webp"
          class="w-full mb-20 "
        />
      </picture>

      <div class="flex text-white md:justify-center md:gap-20">
        <div class="flex flex-col md:flex-row items-center gap-2 flex-3 md:flex-none">
          <A href="/home">Home</A>
          <div class="w-[10px] h-[1px] md:w-[1px] md:h-[10px] bg-white" />
          <A href="/terms">Terms</A>
          <div class="w-[10px] h-[1px] md:w-[1px] md:h-[10px] bg-white" />
          <A href="/contact">Contact</A>
        </div>
        <div class="flex-4 md:flex-none">
          <div class="flex items-center gap-2">
            <TbMapPinFilled />
            <p>Address:</p>
          </div>
          <a href="https://maps.app.goo.gl/ceaXHPBYyVDEuTxz9" target="_blank">
            Cluj-Napoca, Romania
          </a>
        </div>
      </div>
    </div>
  );
};
