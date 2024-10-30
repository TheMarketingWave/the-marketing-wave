import { cache, createAsync } from "@solidjs/router";
import { createEffect } from "solid-js";
import { getTitleApi } from "~/lib/contento";

const loadContent = cache(async () => {
  "use server";

  return await getTitleApi();
}, "users");

export const route = {
  preload: () => loadContent(),
};

export default function About() {
  const content = createAsync(() => loadContent());
  const imgUrlMobile = () => {
    const pageData = content();
    if (pageData)
      return pageData.fields.bg.assets.find(
        ({ asset }: any) => asset.name === "mobile-landing"
      ).asset.url;

    return "";
  };

  const imgUrlDesktop = () => {
    const pageData = content();
    if (pageData)
      return pageData.fields.bg.assets.find(
        ({ asset }: any) => asset.name === "desktop-landing"
      ).asset.url;

    return "";
  };

  return (
    <main class="h-screen w-screen relative">
      <img
        src={`${imgUrlMobile()}?w=500`}
        class="w-full h-full object-cover md:hidden"
      ></img>
      <img
        src={`${imgUrlDesktop()}?w=1440`}
        class="w-full h-full object-cover hidden md:block"
      ></img>
      <h1 class="absolute w-full text-center bottom-[100px] left-0 text-3xl text-brand-orange md:text-6xl">
        {content()?.fields?.title?.text}
      </h1>
    </main>
  );
}
